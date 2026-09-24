import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ContactUs.module.scss';
import ContactForm from '@/components/Sections/ContactForm/ContactForm';

const ContactUs: React.FC = () => {
    return (
        <section className={styles.contactSection}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <div className={styles.container}>
                        <div className={styles.leftColumn}>
                            <div className={styles.header}>
                                <div className={styles.eyebrow}>
                                    <span className={styles.label}>Contact Us</span>
                                    <h2 className={styles.title}>
                                        Contact a <span className={styles.highlight}> Trusted</span> Security Services Provider in India for Customized Protection Solutions.
                                    </h2>
                                </div>
                                <p className={styles.subtitle}>
                                    Crown Security Agencies maintains an extensive operational network to ensure quick accessibility and client support wherever your business or property may be located.
                                </p>
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={"/images/contact-us.webp"}
                                    alt={"Contact Us Image"}
                                    width={400}
                                    height={400}
                                    className={styles.image}
                                />
                            </div>
                        </div>

                        <div className={styles.rightColumn}>
                            <aside className={styles.careersNotice} aria-labelledby="careers-notice-title">
                                <h3 id="careers-notice-title">Looking for a career with Crown?</h3>
                                <p>For job opportunities, please visit our Careers page. The form below is for security service enquiries.</p>
                                <Link href="/careers/" className={styles.careersLink}>
                                    View Career Opportunities <span aria-hidden="true">→</span>
                                </Link>
                            </aside>
                            <ContactForm />
                        </div>
                    </div>
                    <div className={styles.lowerContainer}>
                        <div className={styles.lowerLeftContainer}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoCardRow}>
                                    <h3 className={styles.infoTitle}>Head & Corporate Office</h3>
                                    <p className={styles.infoText}>
                                         Head Office: Office 11, P3 Level, Azziano, Rustomjee Urbania, Majiwada, Thane (W), Maharashtra 400601
                                    </p>
                                    <p className={styles.infoText}>
                                        Corporate Office: Elite's Hajra Mansion, 02, off Doctor Ansari Road, 2nd, Rabodi, Thane West, Thane, Maharashtra 400601
                                    </p>
                                    <div className={styles.infoLinkGroup}>
                                        <p className={styles.infoLink}>
                                            Email: info@crownsecuritysolutions.com
                                        </p>
                                        <p className={styles.infoLink}>
                                            Phone: +91 8108107824
                                        </p>
                                    </div>
                                    <p className={styles.infoText}>
                                        Our head office functions as both a client service hub and a central coordination point for all regional operations.
                                    </p>
                                </div>
                                <div className={styles.divider} />
                                <div className={styles.infoCardRow}>
                                    <h3 className={styles.infoTitle}>Primary Contacts</h3>
                                    <p className={styles.contactName}>Mr. Rahil Shaikh <br />General Manager – Business Expansion</p>
                                    <div className={styles.infoLinkGroup}>
                                        <p className={styles.infoLink}>
                                            Email: <a href="mailto:rahil.shaikh@crownsecuritysolutions.com">rahil.shaikh@crownsecuritysolutions.com</a>
                                        </p>
                                        <p className={styles.infoLink}>
                                            Phone: +91 8108107824
                                        </p>
                                    </div>
                                    <p className={styles.contactName}>Mr. Hillol Nag <br />Head of Department (HOD)</p>
                                    <div className={styles.infoLinkGroup}>
                                        <p className={styles.infoLink}>
                                            Email: <a href="mailto:hillol.nag@crownsecuritysolutions.com">hillol.nag@crownsecuritysolutions.com</a>
                                        </p>
                                        <p className={styles.infoLink}>
                                            Phone: +91 8108107819
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.lowerRightContainer}>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceBlock}>
                                    <h3 className={styles.serviceTitle}>Service Coverage Areas</h3>
                                    <p className={styles.serviceText}>
                                        Crown operates across Delhi, Haryana, Gujarat, Maharashtra, Karnataka, Telangana, and Tamil Nadu, with regional offices in Pune, Bangalore, Chennai, Ahmedabad, Hyderabad, and Delhi NCR.
                                    </p>
                                    <p className={styles.serviceText}>This network enables us to offer consistent service standards and quick escalation management across India.</p>
                                </div>
                                <div className={styles.serviceDivider} />
                                <div className={styles.serviceBlock}>
                                    <h3 className={styles.serviceTitle}>Escort Services</h3>
                                    <p className={styles.serviceText}>
                                        Our Escort Services extend PAN-India, supported by licensed officers and advanced route coordination.
                                    </p>
                                    <p className={styles.serviceText}>No matter the destination, we ensure the same professionalism, reliability, and discretion Crown is known for.</p>
                                </div>
                                <div className={styles.serviceDivider} />
                                <div className={styles.serviceBlock}>
                                    <h3 className={styles.serviceTitle}>Response Time</h3>
                                    <p className={styles.serviceText}>
                                        All inquiries are acknowledged within 4 hours and responded to within 24 hours with tailored recommendations.
                                    </p>
                                    <p className={styles.serviceText}>We believe prompt communication is the first step toward building lasting client confidence.</p>
                                </div>
                                <div className={styles.serviceDivider} />
                                <div className={styles.serviceBlock}>
                                    <h3 className={styles.serviceTitle}>Regional Representation</h3>
                                    <p className={styles.serviceText}>
                                       Regional representatives in Pune, Bangalore, Chennai, Ahmedabad, Hyderabad, and Delhi NCR ensure local supervision and swift operational support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
