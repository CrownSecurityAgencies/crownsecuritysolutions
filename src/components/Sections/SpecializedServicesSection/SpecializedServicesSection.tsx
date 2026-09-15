import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import styles from './SpecializedServicesSection.module.scss';
import { SPECIALIZED_SERVICES_DATA } from '@/data/specializedServices';

const SpecializedServicesSection: React.FC = () => {
  return (
    <section className={styles.specializedServicesSection}>
      <div className="pageLayout">
        <div className="full-width-container">

          <div className={styles.SectionHeader}>
            {/* Header */}
            <SectionHeader
              label=""
              title="A comprehensive service offering\nfrom Crown Security Agencies"
              highlightedWords={["A comprehensive service offering"]}
            />
          </div>

          <div className={styles.servicesGrid}>
            {SPECIALIZED_SERVICES_DATA.services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.contentSection}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      width={541}
                      height={314}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.title}>{service.title}</h3>
                    <p className={styles.description}>{service.description}</p>
                  </div>
                </div>
                <Link href={service.linkUrl} className={styles.link}>
                  <span className={styles.linkText}>{service.linkText}</span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrowIcon}
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedServicesSection;
