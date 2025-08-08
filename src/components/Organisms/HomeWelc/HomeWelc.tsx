import React, { useState, useEffect } from 'react';
import styles from './HomeWelc.module.scss';

export const HomeWelc: React.FC = () => {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.overlay}>
        <div className={styles.titleContainer + ' ' + styles.leftAlign}>
          <h1 className={styles.title}>
            ART BLOOMS CLUB <br /> ART FOR ALL AGES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeWelc;
