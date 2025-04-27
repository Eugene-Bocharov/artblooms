import React from 'react';
import styles from './ClassInfo.module.scss';

type ClassInfoCard = {
  image: string;
  title: string;
  details: Array<{
    smallTitle: string;
    name: string;
    cost: string;
    spots: number;
    link: string;
  }>;
};

type ClassInfoProps = {
  cards: ClassInfoCard[];
};

export const ClassInfo: React.FC<ClassInfoProps> = ({ cards }) => {
  return (
    <div className={styles.gridContainer}>
      {cards.slice(0, 4).map((card, index) => (
        <div key={index} className={styles.classInfoContainer}>
          <img src={card.image} alt={card.title} className={styles.image} />
          <h2 className={styles.title}>{card.title}</h2>
          <ul className={styles.detailsList}>
            {card.details.map((detail, detailIndex) => (
              <li key={detailIndex} className={styles.detailItem}>
                <div className={styles.detailHeader}>
                  <span className={styles.smallTitle}>{detail.smallTitle}</span>
                  <span className={styles.name}>{detail.name}</span>
                </div>
                <div className={styles.detailFooter}>
                  <span className={styles.cost}>{detail.cost}</span>
                  <span className={styles.spots}>
                    {detail.spots} spots available
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={card.details[0]?.link || '#'}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
      ))}
    </div>
  );
};
