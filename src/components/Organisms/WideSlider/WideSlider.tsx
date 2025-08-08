import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './WideSlider.module.scss'; // Import your CSS module for styling
import '@splidejs/react-splide/css'; // Import the default theme

export const WideSlider = () => {
  const images = [
    'https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/494183649_1258638742557123_5095540749511758967_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=upMOfPyABd0Q7kNvwHZtN32&_nc_oc=AdnNOn1Hq0B8skJRrwmFC1aimvMQI6uurV8WceBhaafKGxbj30R__rPXhjfH7cxZeIs&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=cpwQ2sXFp1hx-mtzFlmlLA&oh=00_AfICcVNPOptatyiMYNLCdpfCPROU5p8tLvtz-ltgnXXMFw&oe=6842EC3F',
    'https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/495020136_1260298602391137_8719482977751739287_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mVOZm5dNspsQ7kNvwGvCYSs&_nc_oc=AdnuKSSXhsZCSJN4dsMZJMIc0QKnO9lsS7R1VG4n93iCisasqyoB2qklzb8erFoFRbM&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=5B6Xl0hMMNw2_plDDYXnTQ&oh=00_AfLgnT-mtC-8SWy4I16U5Fap48QiieqnLWZDDeBxq6GHag&oe=6842F721',
    'https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/494190488_1258638812557116_5781637812078465548_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lWtecfIlc2cQ7kNvwHTeZnh&_nc_oc=Adn5ePIK6NNG-dMwXKSDKGCtuIWTuGILx7JQ7RhqXSLb7WLXAx_ABtFQSiz2C3Lg6UI&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=bz3xDkpa6QOI-3ksxN8mwA&oh=00_AfKcYyzMNPc1AfB1ITPbiLgVde3UcEpQfsmJjbpx9_1Rxg&oe=6842E8BC',
    'https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/498123998_1268308394923491_209909218570941369_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wwTssz5CgLEQ7kNvwFyCm7b&_nc_oc=AdmGSk-rnDs6-mWWpm_ok7G03XfaYxmE6H93afv0DyXI7oYH7uzMgaRxkjRf9ER5eMs&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=_hx5b3pi8Hk2Vlgy0NXLCg&oh=00_AfIeee7DI0909spLTQAxyerOtN4O912WRyI2n70y1I2-5A&oe=6843040B',
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
