// components/HeroSection/HeroSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';
import { HeroSectionProps } from '@/types/hero';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC<HeroSectionProps> = ({
  media,
  content,
  overlay = { enabled: true, color: '#000000', opacity: 0.5 },
  contentPosition = 'left',
  className = '',
}) => {
  const overlayStyle = overlay.enabled
    ? {
      background: overlay.gradient || overlay.color || '#000000',
      opacity: overlay.opacity || 0.5,
    }
    : undefined;

  return (
    <section className={`${styles.hero} ${className}`}>

      {/* Background Media */}
      <div className={styles.mediaWrapper}>
        {media.type === 'image' ? (
          <Image
            src={media.src}
            alt={media.alt || 'Hero background'}
            fill
            className={styles.media}
            priority
            quality={90}
          />
        ) : (
          <video
            className={styles.media}
            autoPlay={media.videoProps?.autoPlay ?? true}
            loop={media.videoProps?.loop ?? true}
            muted={media.videoProps?.muted ?? true}
            playsInline={media.videoProps?.playsInline ?? true}
            poster={media.poster}
          >
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {overlay.enabled && (
          <div className={styles.overlay} style={overlayStyle}></div>
        )}
      </div>

      {/* Content */}
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <div
              className={`${styles.content} ${styles[`content--${contentPosition}`]
                }`}
            >
              <h1
                className={`${styles.title} ${content.titleClassName || ''}`}
              >
                {content.title}
              </h1>
              <p
                className={`${styles.description} ${content.descriptionClassName || ''
                  }`}
              >
                {content.description}
              </p>
            </div>
            {content.buttons && content.buttons.length > 0 && (
              <div className={styles.buttonGroup}>
                {content.buttons.map((button, index) => {
                  const ButtonContent = (
                    <Button
                      key={index}
                      text={button.text}
                      variant={button.variant || 'primary'}
                      iconBgColor={button.iconBgColor}
                      onClick={button.onClick}
                      icon={<ArrowIcon color="#FFFFFF" />}
                    />
                  );

                  return button.href ? (
                    <Link key={index} href={button.href}>
                      {ButtonContent}
                    </Link>
                  ) : (
                    ButtonContent
                  );
                })}
              </div>
            )}

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
