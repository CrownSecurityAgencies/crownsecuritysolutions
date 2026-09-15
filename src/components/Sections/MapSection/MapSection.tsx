import React from 'react';
import styles from './MapSection.module.scss';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';

const MapSection: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <h4 className={styles.heading}>Our Offices</h4>
      
      <div className={styles.officeGrid}>
        <div className={styles.officeCard}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.701118970854!2d72.9854820768195!3d19.208252347804365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9361999ddef%3A0xec5f83df01940d4!2sRustomjee%20Urbania!5e0!3m2!1sen!2sin!4v1769839126988!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crown Security Agencies Thane Office"
            />
          </div>
        </div>
        <div className={styles.officeCard}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483192.5343475806!2d73.09631596406362!3d18.88966850287397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9312d0aeaab%3A0xf68e7487ea7ec1cc!2sCrown%20Security%20Agency!5e0!3m2!1sen!2sin!4v1769838590540!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crown Security Agencies Thane West Office"
            />
          </div>
        </div>

      </div>

      <p className={styles.mapText}>
        Visit us at either of our offices or contact us for more information.
      </p>
    </div>
  );
};

export default MapSection;
