"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import styles from "./CertificatesSection.module.scss";

type CertificateItem = {
  title: string;
  fileName: string;
  category: string;
  description: string;
};

const CERTIFICATES: CertificateItem[] = [
  {
    title: "Shops and Establishments Certificate",
    fileName: "CSA-Shops and Establishments Certificate.pdf",
    category: "Compliance",
    description: "Business establishment compliance certificate.",
  },
  {
    title: "CSA ISO 2026",
    fileName: "CSA_ISO_2026.pdf",
    category: "Quality",
    description: "Quality and operational standards certification.",
  },
  {
    title: "PSARA - Delhi",
    fileName: "Psara - Delhi.pdf",
    category: "License",
    description: "Private security agency license for Delhi.",
  },
  {
    title: "PSARA - Gujarat",
    fileName: "Psara - Gujarat.pdf",
    category: "License",
    description: "Private security agency license for Gujarat.",
  },
  {
    title: "PSARA - Haryana",
    fileName: "Psara - Haryana.pdf",
    category: "License",
    description: "Private security agency license for Haryana.",
  },
  {
    title: "PSARA - Karnataka",
    fileName: "Psara - Karnataka.pdf",
    category: "License",
    description: "Private security agency license for Karnataka.",
  },
  {
    title: "PSARA - Maharashtra",
    fileName: "Psara - Maharashtra.pdf",
    category: "License",
    description: "Private security agency license for Maharashtra.",
  },
  {
    title: "PSARA - Tamil Nadu",
    fileName: "Psara - Tamil Nadu.pdf",
    category: "License",
    description: "Private security agency license for Tamil Nadu.",
  },
  {
    title: "PSARA - Telangana",
    fileName: "Psara - Telangana.pdf",
    category: "License",
    description: "Private security agency license for Telangana.",
  },
];

const buildPdfUrl = (fileName: string) =>
  `/certificates/${encodeURI(fileName)}`;

const CertificatesSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCertificate]);

  return (
    <section className={styles.certificatesSection}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.sectionHeader}>
            <SectionHeader
              as="h1"
              label="Compliance"
              title="PSARA Licensed & ISO Certified Security Agency"
              subtitle="Preview the company certificates below without leaving the page."
            />
          </div>

          <div className={styles.certificatesGrid}>
            {CERTIFICATES.map((certificate) => (
              <button
                key={certificate.fileName}
                type="button"
                className={styles.certificateCard}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className={styles.cardTop}>
                  <div className={styles.documentIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      />
                      <path
                        d="M14 2v5h5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      />
                      <path
                        d="M9 13h6M9 17h6M9 9h2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      />
                    </svg>
                  </div>
                  <span className={styles.fileBadge}>PDF</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>{certificate.category}</div>
                  <h3 className={styles.cardTitle}>{certificate.title}</h3>
                  <p className={styles.cardDescription}>
                    {certificate.description}
                  </p>
                </div>

                <div className={styles.cardAction}>
                  <span>View certificate</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onClick={(event) => {
            if (event.currentTarget === event.target) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <p className={styles.modalEyebrow}>
                  {selectedCertificate.category}
                </p>
                <h3 id="certificate-modal-title" className={styles.modalTitle}>
                  {selectedCertificate.title}
                </h3>
                <p className={styles.modalFileName}>
                  {selectedCertificate.fileName}
                </p>
              </div>
              <button
                type="button"
                className={styles.modalClose}
                aria-label="Close certificate preview"
                onClick={() => setSelectedCertificate(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.modalViewer}>
              <iframe
                title={selectedCertificate.title}
                src={buildPdfUrl(selectedCertificate.fileName)}
                className={styles.pdfFrame}
              />
            </div>

            <div className={styles.modalFooter}>
              <a
                className={styles.openInNewTab}
                href={buildPdfUrl(selectedCertificate.fileName)}
                target="_blank"
                rel="noreferrer"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
