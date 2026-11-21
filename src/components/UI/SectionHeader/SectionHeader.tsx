import React from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  highlightedWords?: string[];
  as?: 'h1' | 'h2';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  highlightedWords = [],
  as: HeadingTag = 'h2'
}) => {
  // Simple function to render title with highlighted words
  const renderHighlightedTitle = (titleText: string, highlights: string[]) => {
    // Normalize literal "\n" sequences (backslash + n) to actual newline characters
    const normalizedTitle = titleText.replace(/\\n/g, '\n');

    if (highlights.length === 0) {
      return <>{normalizedTitle}</>;
    }

    // Create a regex pattern for all highlighted words
    const highlightRegex = new RegExp(`(${highlights.join('|')})`, 'gi');
    const parts = normalizedTitle.split(highlightRegex);

    return parts.map((part, partIndex) => {
      const isHighlighted = highlights.some(word =>
        word.toLowerCase() === part.toLowerCase()
      );

      return isHighlighted ? (
        <span key={partIndex} className={styles.highlight}>
          {part}
        </span>
      ) : (
        // wrap non-highlighted text in a Fragment so newline/whitespace is preserved by CSS
        <React.Fragment key={partIndex}>{part}</React.Fragment>
      );
    });
  };

  return (
    <div className={styles.header}>
      <div className={styles.eyebrow}>
        {label && <span className={styles.label}>{label}</span>}
        <HeadingTag className={styles.title}>
          {renderHighlightedTitle(title, highlightedWords)}
        </HeadingTag>
      </div>
      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
