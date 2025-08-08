import React from 'react';
import styles from './StatsSection.module.scss';
import stat1 from '../../../static/stat_1.png';
import stat2 from '../../../static/stat_2.png';
import stat3 from '../../../static/stat_3.png';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <img src={stat1} alt="Students" />,
      value: '100+',
      label: 'Students',
    },
    {
      icon: <img src={stat2} alt="Student teacher ratio" />,
      value: '7:1',
      label: 'Student teacher ratio',
    },
    {
      icon: <img src={stat3} alt="Students average in class" />,
      value: '8-10',
      label: 'Students average in class',
    },
  ];

  return (
    <div className={styles.statsContainer}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.iconContainer}>{stat.icon}</div>
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
