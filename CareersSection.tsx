'use client';
import { trackEvent } from '@/lib/analytics';

import React, { useState, useEffect } from 'react';
import styles from './CareersSection.module.scss';
import { Job, ApplicationData } from '@/data/careersSection';


const jobListings: Job[] = [
  {
    id: 'security-guard',
    title: 'Security Guard',
    location: 'Mumbai, Pune, Hyderabad, Bangalore, Chennai',
    experience: 'Fresher / 1-2 Years',
    description: 'Frontline protection role ensuring safety of assets and personnel at corporate parks and residential complexes.'
  },
  {
    id: 'security-supervisor',
    title: 'Security Supervisor',
    location: 'Mumbai, Pune, Hyderabad, Bangalore, Chennai',
    experience: '3-5 Years',
    description: 'Leadership role managing a team of guards, ensuring deployment schedules and client compliance.'
  },
  {
    id: 'field-officer',
    title: 'Field Officer',
    location: 'Mumbai, Pune, Hyderabad, Bangalore, Chennai',
    experience: '5+ Years',
    description: 'Operational command role overseeing multiple sites and ensuring standard operating procedures (SOPs).'
  },
  {
    id: 'guard-i',
    title: 'Guard I',
    location: 'Mumbai, Pune, Hyderabad, Bangalore, Chennai',
    experience: 'Fresher / 1-2 Years',
    description: 'Frontline protection role ensuring safety of assets and personnel at corporate parks and residential complexes.'
  },
  {
    id: 'lady-guard',
    title: 'Lady Guard',
    location: 'Mumbai, Pune, Hyderabad, Bangalore, Chennai',
    experience: 'Fresher / 1-2 Years',
    description: 'Female security personnel for specialized roles including frisking, access control at corporate offices, malls, and residential complexes.'
  },
  {
    id: 'supervisor',
    title: 'Supervisor',
    location: 'Mumbai, Pune, Hyderabad, Bangalore, Chennai',
    experience: '3-5 Years',
    description: 'Leadership role managing a team of guards, ensuring deployment schedules and client compliance.'
  }
];

const CareersSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    // Try to load saved form data from localStorage
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('careersFormData');
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (error) {
          console.warn('Failed to parse saved form data:', error);
        }
      }
    }
    // Default form data
    return {
      surname: '', firstName: '', middleName: '', fatherName: '', motherName: '',
      dateOfBirth: '', age: '', maritalStatus: 'Single',
      mobileNumber: '', alternateNumber: '', presentAddress: '', permanentAddress: '',
      permanentAddressSameAsPresent: false, height: '', weight: '', chest: '', qualification: '10th Pass',
      previousESIC: '', previousUAN: '', residentialExperience: '', commercialExperience: '',
      industrialExperience: '',
      languages: {
        english: { speak: false, read: false, write: false },
        hindi: { speak: false, read: false, write: false },
        marathi: { speak: false, read: false, write: false }
      },
      skills: { fireFighting: false, safety: false, firstAid: false, driving: false, computer: false },
      nameOnAadhar: '', aadharNumber: '', panNumber: '', bankName: '', accountHolderName: '',
      accountNumber: '', ifscCode: '', branchAddress: '', profilePhoto: null, resume: null
    };
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('careersFormData', JSON.stringify(formData));
    }
  }, [formData]);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowForm(true);
    setCurrentStep(1);
  };

  const handleBack = () => {
    setShowForm(false);
    setSelectedJob(null);
    setCurrentStep(1);
  };

  const updateFormData = (data: Partial<ApplicationData>) => {
    setFormData((prev: ApplicationData) => ({ ...prev, ...data } as ApplicationData));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.surname || !formData.firstName || !formData.dateOfBirth || !formData.age) {
        alert('Please fill in all required fields');
        return;
      }
      if (parseInt(formData.age) < 18) {
        alert('Applicant must be at least 18 years old');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.mobileNumber || formData.mobileNumber.length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }
      if (!formData.presentAddress || !formData.permanentAddress) {
        alert('Please fill in all address fields');
        return;
      }
      if (!formData.height || !formData.weight || !formData.chest) {
        alert('Please fill in all physical measurements');
        return;
      }
    }
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    const requiredFields: Array<keyof ApplicationData> = [
      'surname', 'firstName', 'fatherName', 'motherName', 'dateOfBirth',
      'age', 'maritalStatus', 'mobileNumber', 'presentAddress',
      'permanentAddress', 'height', 'weight', 'chest', 'qualification',
      'nameOnAadhar', 'aadharNumber', 'bankName', 'accountHolderName',
      'accountNumber', 'ifscCode', 'branchAddress'
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert('Please fill in all required fields before submitting.');
        return;
      }
    }
    if (!formData.nameOnAadhar || !formData.aadharNumber || formData.aadharNumber.length !== 12) {
      alert('Please fill in valid Aadhar details');
      return;
    }
    if (!formData.bankName || !formData.accountHolderName || !formData.accountNumber || !formData.ifscCode || formData.ifscCode.length !== 11) {
      alert('Please fill in all bank details correctly');
      return;
    }
    if (!formData.profilePhoto || !formData.resume) {
      alert('Please upload both profile photo and resume');
      return;
    }

    // Create FormData for file uploads
    const formDataToSend = new FormData();

    // Add all form fields to FormData
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'languages') {
        // Handle language skills
        Object.entries(value as any).forEach(([lang, skills]) => {
          Object.entries(skills as any).forEach(([skill, enabled]) => {
            formDataToSend.append(`${lang}_${skill}`, enabled ? 'true' : 'false');
          });
        });
      } else if (key === 'skills') {
        // Handle skills
        Object.entries(value as any).forEach(([skill, enabled]) => {
          formDataToSend.append(skill, enabled ? 'true' : 'false');
        });
      } else if (key === 'profilePhoto' || key === 'resume') {
        // Handle files
        if (value) {
          formDataToSend.append(key, value as File);
        }
      } else {
        // Handle regular fields
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          formDataToSend.append(key, value.toString());
        }
      }
    });

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        trackEvent('job_application', { form_name: 'careers' });
        setIsSuccess(true);
        setErrorMessage('');
        setIsModalOpen(true);
        handleBack();
      } else {
        const errorData = await response.json();
        setIsSuccess(false);
        setErrorMessage(errorData.error || 'Failed to submit application. Please try again.');
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setIsSuccess(false);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to submit application. Please check your internet connection and try again.'
      );
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ApplicationData, value: any) => {
    updateFormData({ [field]: value });
    if (field === 'dateOfBirth' && value) {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
      updateFormData({ dateOfBirth: value, age: age.toString() });
    }
    if (field === 'permanentAddressSameAsPresent' && value === true) {
      updateFormData({ permanentAddressSameAsPresent: true, permanentAddress: formData.presentAddress });
    }
  };

  const handleLanguageChange = (lang: 'english' | 'hindi' | 'marathi', skill: 'speak' | 'read' | 'write', checked: boolean) => {
    updateFormData({ languages: { ...formData.languages, [lang]: { ...formData.languages[lang], [skill]: checked } } });
  };

  const handleSkillChange = (skill: keyof ApplicationData['skills'], checked: boolean) => {
    updateFormData({ skills: { ...formData.skills, [skill]: checked } });
  };

  const statusModal = isModalOpen ? (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{isSuccess ? 'Thank You!' : 'Submission Failed'}</h3>
          <button
            type="button"
            className={styles.modalClose}
            aria-label="Close"
            onClick={() => setIsModalOpen(false)}
          >
            x
          </button>
        </div>
        <p className={styles.modalMessage}>
          {isSuccess
            ? 'Your application has been submitted successfully. Our team will get back to you within 24hrs.'
            : errorMessage}
        </p>
        <button type="button" className={styles.modalButton} onClick={() => setIsModalOpen(false)}>
          OK
        </button>
      </div>
    </div>
  ) : null;

  return (
    <>
      {showForm && selectedJob ? (
        <section className={styles.applicationContainer}>
          <div className="pageLayout">
            <div className="full-width-container">
              <button className={styles.backButton} onClick={handleBack}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Jobs
              </button>

              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <div className={styles.formTitleContainer}>
                    <h2 className={styles.formTitle}>Application Form</h2>
                    <p className={styles.formSubtitle}>Applying for: {selectedJob.title}</p>
                  </div>
                  <div className={styles.stepCounter}>Step {currentStep} of 4</div>
                </div>

                <div className={styles.formBody}>
                  <div className={styles.stepIndicator}>
                    {[1, 2, 3, 4].map((step, index) => (
                      <div key={step} className={styles.stepWrapper}>
                        <div className={`${styles.stepCircle} ${step <= currentStep ? styles.active : ''}`}>{step}</div>
                        {index < 3 && <div className={`${styles.stepLine} ${step < currentStep ? styles.active : ''}`} />}
                      </div>
                    ))}
                  </div>

                  <div className={styles.formContent}>
                    {currentStep === 1 && (
                      <div className={styles.stepContent}>
                        <div className={styles.sectionHeader}>
                          <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <div>
                            <h2 className={styles.sectionTitle}>Personal Identity</h2>
                          </div>
                        </div>

                        <div className={styles.formGrid}>
                          <div className={styles.formGroup}>
                            <label>SURNAME</label>
                            <input type="text" placeholder="TIWARI" value={formData.surname} onChange={(e) => handleChange('surname', e.target.value.toUpperCase())} required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>FIRST NAME</label>
                            <input type="text" placeholder="RAJU" value={formData.firstName} onChange={(e) => handleChange('firstName', e.target.value.toUpperCase())} required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>MIDDLE NAME</label>
                            <input type="text" placeholder="RAHUL" value={formData.middleName} onChange={(e) => handleChange('middleName', e.target.value.toUpperCase())} />
                          </div>
                        </div>

                        <div className={styles.formGrid}>
                          <div className={styles.formGroup}>
                            <label>Father's Name</label>
                            <input type="text" value={formData.fatherName} onChange={(e) => handleChange('fatherName', e.target.value)} required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Mother's Name</label>
                            <input type="text" value={formData.motherName} onChange={(e) => handleChange('motherName', e.target.value)} required />
                          </div>
                        </div>

                        <div className={styles.formGrid}>
                          <div className={styles.formGroup}>
                            <label>Date of Birth</label>
                            <input type="date" value={formData.dateOfBirth} onChange={(e) => handleChange('dateOfBirth', e.target.value)} max={new Date().toISOString().split('T')[0]} required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Age</label>
                            <input type="text" placeholder="Years" value={formData.age} readOnly />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Marital Status</label>
                            <select value={formData.maritalStatus} onChange={(e) => handleChange('maritalStatus', e.target.value)} required>
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
                              <option value="Divorced">Divorced</option>
                              <option value="Widowed">Widowed</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className={styles.stepContent}>
                        <div className={styles.sectionHeader}>
                          <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <div><h2 className={styles.sectionTitle}>Contact & Address</h2></div>
                        </div>

                        <div className={styles.formGrid}>
                          <div className={styles.formGroup}>
                            <label>Mobile Number</label>
                            <input type="tel" placeholder="Enter mobile number" value={formData.mobileNumber} onChange={(e) => handleChange('mobileNumber', e.target.value)} pattern="[0-9]{10}" maxLength={10} required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Alternate Number</label>
                            <input type="tel" placeholder="Enter alternate number" value={formData.alternateNumber} onChange={(e) => handleChange('alternateNumber', e.target.value)} maxLength={10} />
                          </div>
                        </div>

                        <div className={styles.formGroup}>
                          <label>Present Address (Full)</label>
                          <textarea placeholder="Enter your current address" value={formData.presentAddress} onChange={(e) => handleChange('presentAddress', e.target.value)} rows={3} required />
                        </div>

                        <div className={styles.checkboxGroup}>
                          <input type="checkbox" id="sameAddress" checked={formData.permanentAddressSameAsPresent} onChange={(e) => handleChange('permanentAddressSameAsPresent', e.target.checked)} />
                          <label htmlFor="sameAddress">Permanent Address same as Present</label>
                        </div>

                        <div className={styles.formGroup}>
                          <label>Permanent Address (Native Place)</label>
                          <textarea placeholder="Enter your permanent address" value={formData.permanentAddress} onChange={(e) => handleChange('permanentAddress', e.target.value)} rows={3} disabled={formData.permanentAddressSameAsPresent} required />
                        </div>

                        <div className={styles.sectionHeader} style={{ marginTop: '2rem' }}>
                          <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div>
                            <h2 className={styles.sectionTitle}>Physical Standards</h2>
                          </div>
                        </div>

                        <div className={styles.formGrid}>
                          <div className={styles.formGroup}>
                            <label>Height (cms)</label>
                            <input type="number" placeholder="170" value={formData.height} onChange={(e) => handleChange('height', e.target.value)} min="140" max="220" required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Weight (kg)</label>
                            <input type="number" placeholder="70" value={formData.weight} onChange={(e) => handleChange('weight', e.target.value)} min="40" max="150" required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Chest (cms)</label>
                            <input type="number" placeholder="85" value={formData.chest} onChange={(e) => handleChange('chest', e.target.value)} min="70" max="130" required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Qualification</label>
                            <select value={formData.qualification} onChange={(e) => handleChange('qualification', e.target.value)} required>
                              <option value="10th Pass">10th Pass</option>
                              <option value="12th Pass">12th Pass</option>
                              <option value="Graduate">Graduate</option>
                              <option value="Post Graduate">Post Graduate</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className={styles.stepContent}>
                        <div className={styles.sectionHeader}>
                          <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div><h2 className={styles.sectionTitle}>Work Experience & Skills</h2></div>
                        </div>

                        <div className={styles.formGrid}>
                          <div className={styles.formGroup}>
                            <label>Previous ESIC No (if any)</label>
                            <input type="text" placeholder="Enter ESIC number" value={formData.previousESIC} onChange={(e) => handleChange('previousESIC', e.target.value)} />
                          </div>
                          <div className={styles.formGroup}>
                            <label>Previous UAN No (if any)</label>
                            <input type="text" placeholder="Enter UAN number" value={formData.previousUAN} onChange={(e) => handleChange('previousUAN', e.target.value)} />
                          </div>
                        </div>

                        <div className={styles.formGroup}>
                          <label>Security Experience Details (Site Name / Location / Duration)</label>
                          <textarea placeholder="Residential Security Experience..." value={formData.residentialExperience} onChange={(e) => handleChange('residentialExperience', e.target.value)} rows={3} />
                        </div>
                        <div className={styles.formGroup}>
                          <textarea placeholder="Commercial Security Experience..." value={formData.commercialExperience} onChange={(e) => handleChange('commercialExperience', e.target.value)} rows={3} />
                        </div>
                        <div className={styles.formGroup}>
                          <textarea placeholder="Industrial Security Experience..." value={formData.industrialExperience} onChange={(e) => handleChange('industrialExperience', e.target.value)} rows={3} />
                        </div>

                        <div className={styles.languageTable}>
                          <table>
                            <thead>
                              <tr><th>Language</th><th>Speak</th><th>Read</th><th>Write</th></tr>
                            </thead>
                            <tbody>
                              {(['english', 'hindi', 'marathi'] as const).map(lang => (
                                <tr key={lang}>
                                  <td>{lang.charAt(0).toUpperCase() + lang.slice(1)}</td>
                                  {(['speak', 'read', 'write'] as const).map(skill => (
                                    <td key={skill}>
                                      <input type="checkbox" checked={formData.languages[lang][skill]} onChange={(e) => handleLanguageChange(lang, skill, e.target.checked)} />
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className={styles.skillsSection}>
                          <label className={styles.skillsLabel}>Knowledge / Skills</label>
                          <div className={styles.skillsGrid}>
                            {[
                              { key: 'fireFighting', label: 'Fire Fighting' },
                              { key: 'safety', label: 'Safety' },
                              { key: 'firstAid', label: 'First Aid' },
                              { key: 'driving', label: 'Driving' },
                              { key: 'computer', label: 'Computer' }
                            ].map(skill => (
                              <div key={skill.key} className={styles.skillCheckbox}>
                                <input type="checkbox" id={skill.key} checked={formData.skills[skill.key as keyof ApplicationData['skills']]} onChange={(e) => handleSkillChange(skill.key as keyof ApplicationData['skills'], e.target.checked)} />
                                <label htmlFor={skill.key}>{skill.label}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className={styles.stepContent}>
                        <div className={styles.sectionHeader}>
                          <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          <div><h2 className={styles.sectionTitle}>Bank & Government IDs</h2></div>
                        </div>

                        <div className={styles.formGroup}>
                          <label>NAME AS ON AADHAR CARD</label>
                          <input type="text" placeholder="Enter name as on Aadhar" value={formData.nameOnAadhar} onChange={(e) => handleChange('nameOnAadhar', e.target.value.toUpperCase())} required />
                        </div>

                        <div className={styles.formGrid}>
                          <div className={styles.formGroup}>
                            <label>Aadhar Card No.</label>
                            <input type="text" placeholder="Enter 12-digit Aadhar number" value={formData.aadharNumber} onChange={(e) => { const value = e.target.value.replace(/\D/g, ''); if (value.length <= 12) handleChange('aadharNumber', value); }} maxLength={12} required />
                          </div>
                          <div className={styles.formGroup}>
                            <label>PAN Card No.</label>
                            <input type="text" placeholder="Enter PAN number" value={formData.panNumber} onChange={(e) => { const value = e.target.value.toUpperCase(); if (value.length <= 10) handleChange('panNumber', value); }} maxLength={10} />
                          </div>
                        </div>

                        <div className={styles.bankDetailsSection}>
                          <h3 className={styles.subsectionTitle}>BANK ACCOUNT DETAILS (FOR SALARY)</h3>
                          <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                              <label>Bank Name</label>
                              <input type="text" placeholder="Enter bank name" value={formData.bankName} onChange={(e) => handleChange('bankName', e.target.value)} required />
                            </div>
                            <div className={styles.formGroup}>
                              <label>Account Holder Name</label>
                              <input type="text" placeholder="Enter account holder name" value={formData.accountHolderName} onChange={(e) => handleChange('accountHolderName', e.target.value)} required />
                            </div>
                          </div>
                          <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                              <label>Account Number</label>
                              <input type="text" placeholder="Enter account number" value={formData.accountNumber} onChange={(e) => handleChange('accountNumber', e.target.value)} required />
                            </div>
                            <div className={styles.formGroup}>
                              <label>IFSC CODE</label>
                              <input type="text" placeholder="Enter IFSC code" value={formData.ifscCode} onChange={(e) => handleChange('ifscCode', e.target.value.toUpperCase())} maxLength={11} required />
                            </div>
                          </div>
                          <div className={styles.formGroup}>
                            <label>Bank Branch Address</label>
                            <textarea placeholder="Enter bank branch address" value={formData.branchAddress} onChange={(e) => handleChange('branchAddress', e.target.value)} rows={3} required />
                          </div>
                        </div>

                        <div className={styles.documentUploadSection}>
                          <h3 className={styles.subsectionTitle}>DOCUMENT UPLOADS</h3>
                          <div className={styles.uploadGrid}>
                            {[{ id: 'profilePhoto', label: 'Profile Photo', accept: 'image/*' }, { id: 'resume', label: 'Resume / CV', accept: '.pdf,.doc,.docx' }].map(upload => (
                              <div key={upload.id} className={styles.uploadBox}>
                                <label className={styles.uploadLabel}>{upload.label}</label>
                                <div className={styles.fileInputWrapper}>
                                  <input
                                    type="file"
                                    id={upload.id}
                                    accept={upload.accept}
                                    onChange={(e) => handleChange(upload.id as 'profilePhoto' | 'resume', e.target.files?.[0] || null)}
                                    style={{ display: 'none' }}
                                  />
                                  <div className={styles.fileInputDisplay}>
                                    <button
                                      type="button"
                                      className={styles.chooseFileButton}
                                      onClick={() => document.getElementById(upload.id)?.click()}
                                    >
                                      Choose File
                                    </button>
                                    <span className={styles.fileName}>{formData[upload.id as 'profilePhoto' | 'resume']?.name || 'No file chosen'}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={styles.formActions}>
                    {currentStep > 1 && <button className={styles.prevButton} onClick={prevStep}>Previous</button>}
                    {currentStep < 4 ? (
                      <button className={styles.nextButton} onClick={nextStep}>
                        Next Step
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <button className={styles.submitButton} onClick={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className={styles.spinner} aria-hidden="true" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    )}
                  </div>

                  {currentStep === 1 && (
                    <p className={styles.formDisclaimer}>
                      By submitting this form, you declare that all information provided is true to the best of your knowledge. False information may lead to rejection of your application.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.careersContainer}>
          <div className="pageLayout">
            <div className="full-width-container">
              <div className={styles.careersHeader}>
                <h2 className={styles.mainTitle}>Current Openings</h2>
              </div>

              <div className={styles.jobGrid}>
                {jobListings.map((job) => (
                  <div key={job.id} className={styles.jobCard} onClick={() => handleApply(job)}>
                    <div className={styles.jobCardContent}>
                      <h2 className={styles.jobTitle}>{job.title}</h2>
                      <div className={styles.jobMeta}>
                        <div className={styles.metaItem}>
                          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{job.location}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <p className={styles.jobDescription}>{job.description}</p>
                    </div>
                    <div className={styles.jobCardArrow}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {statusModal}
    </>
  );
};

export default CareersSection;
