import React from 'react';
import styles from './LinkCards.module.scss';

type CardInfo = {
  image: string;
  title: string;
  text: string;
  link: string;
};

type LinkCardsProps = {
  cards: CardInfo[];
};

export const LinkCards: React.FC<LinkCardsProps> = ({ cards }) => {
  return (
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
            <p className={styles.cardTextSingle}>{card.text}</p>
            <a href={card.link} className={styles.cardLinkSingle}>
              Read More <span className={styles.arrow}>&rarr;</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
