import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './WideSlider.module.scss'; // Import your CSS module for styling
import '@splidejs/react-splide/css'; // Import the default theme

export const WideSlider = () => {
  const images = [
    'https://plus.unsplash.com/premium_photo-1713374360754-10c839c0cf62?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1712142157802-84516cba5529?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1713374439384-d21616a21d0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1713374346270-e7fc2bbb6dc4?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className={styles.sliderContainer}>
      <Splide
        options={{
          type: 'slide',
          perPage: 1,
          autoplay: true,
          interval: 3000,
          rewind: true,
          pagination: false, // To hide the dots
          arrows: true, // Ensure arrows are displayed (you can style them in CSS)
        }}
        aria-label="Simple Images Slider"
        className={styles.splide}
      >
        {images.map((image, index) => (
          <SplideSlide key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className={styles.image}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
