import React from 'react';
import styles from './classDescCard.module.scss';
import linkCardStyles from '../LinkCards/LinkCards.module.scss';

type ClassDescCard = {
  image: string;
  title?: string;
  description?: string;
  details?: Array<{
    smallTitle: string;
    name: string;
    cost: string;
    spots: number;
    link?: string;
  }>;
  link?: string;
  button?: boolean;
};

type ClassDescCardProps = {
  cards: ClassDescCard[];
  title?: string;
};

export const ClassDescCard: React.FC<ClassDescCardProps> = ({
  cards,
  title,
}) => {
  return (
    <div className={styles.container}>
      {title && <h1 className={styles.cardsTitle}>{title}</h1>}
      <div className={styles.gridContainer}>
        {cards.slice(0, 4).map((card, index) => (
          <div key={index} className={styles.classInfoContainer}>
            <img src={card.image} alt={card.title} className={styles.image} />
            {card.title && <h2 className={styles.title}>{card.title}</h2>}
            {card.details && card.details.length > 0 && (
              <ul className={styles.detailsList}>
                {card.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className={styles.detailItem}>
                    <div className={styles.detailHeader}>
                      <span className={styles.smallTitle}>
                        {detail.smallTitle}
                      </span>
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
            )}
            {card.description && (
              <p className={styles.description}>{card.description}</p>
            )}
            {card.button === true ? (
              <a
                href={card.link || '#'}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            ) : card.link ? (
              <a href={card.link} className={linkCardStyles.cardLinkSingle}>
                Read More <span className={linkCardStyles.arrow}>&rarr;</span>
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
