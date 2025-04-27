import React, { useState, useEffect } from 'react';
import styles from './HomeWelc.module.scss';

export const HomeWelc: React.FC = () => {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.overlay}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Bring Your Vision into Reality with Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeWelc;
