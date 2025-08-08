import React, { useState } from 'react';
import styles from './LinkCards.module.scss';

type CardInfo = {
  image: string;
  title: string;
  text: string;
  link: string;
};

type LinkCardsProps = {
  cards: CardInfo[];
  title?: string; // Optional title
};

export const LinkCards: React.FC<LinkCardsProps> = ({ cards, title }) => {
  // Track which card is expanded
  const [expanded, setExpanded] = useState<number | null>(null);

  // Helper to truncate text
  const truncate = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + '...' : text;
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.linkCardsTitle}>{title}</h2>}
      <div className={styles.linkCardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.cardSingle}>
            <img
              src={card.image}
              alt={card.title}
              className={styles.cardImageSingle}
            />
            <div className={styles.cardContentSingle}>
              <h2 className={styles.cardTitleSingle}>{card.title}</h2>
              <p className={styles.cardTextSingle}>
                {expanded === index ? card.text : truncate(card.text, 150)}
              </p>
              {card.text.length > 150 && (
                <button
                  className={styles.cardLinkSingle}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  {expanded === index ? 'Show less' : 'Read More'}{' '}
                  <span className={styles.arrow}>&rarr;</span>
                </button>
              )}
              {card.text.length <= 150 && (
                <a href={card.link} className={styles.cardLinkSingle}>
                  Read More <span className={styles.arrow}>&rarr;</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
