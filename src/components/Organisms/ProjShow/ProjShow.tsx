import React, { useState } from 'react';
import styles from './ProjShow.module.scss';

interface ProjShowProps {
  title: string;
  description: string;
  images: string[];
}

export function ProjShow({ title, description, images }: ProjShowProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.thumbnail}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>{title}</h3>
            <button onClick={closeModal} className={styles.closeButton}>
              X
            </button>
            <div className={styles.picDivider}>
              <div
                className={styles.largeImageContainer}
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
              />
              <div className={styles.thumbnailsRow}>
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`${styles.smallThumbnail} ${idx === currentIndex ? styles.activeThumbnail : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
