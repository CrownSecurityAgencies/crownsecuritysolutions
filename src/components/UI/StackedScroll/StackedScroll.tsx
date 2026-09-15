"use client";

import React from "react";
import styles from "./StackedScroll.module.scss";
import classNames from "classnames";
import BlockContent from "./BlockContent";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import { stackedBlocks } from "@/data/stackedData";

type StackedBlock = {
  number?: string;
  className: string;
  heading: string;
  description: string;
};

type Props = {
  blocks?: StackedBlock[];
  showHeader?: boolean;
};

const StackedScroll: React.FC<Props> = ({
  blocks = stackedBlocks,
  showHeader = true,
}) => {
  return (
    <div className={styles.wrapper}>
      {showHeader && (
        <div className={styles.SectionHeader}>
          <SectionHeader
            label=""
            title="Our Process"
            subtitle="At Crown Security Agencies, we follow a transparent, step-by-step system to ensure every deployment is planned, compliant, and performance-driven, supported by digital tools, expert supervision, and real-time reporting."
            highlightedWords={["Our"]}
          />
        </div>
      )}
      <div className={styles.container}>
        {blocks.map((block, index) => (
          <div
            key={index}
            className={classNames(styles.block, styles[block.className])}
            style={{ zIndex: index + 1 }}
          >
            <BlockContent
              number={block.number}
              heading={block.heading}
              description={block.description}
              variant={block.className}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedScroll;
