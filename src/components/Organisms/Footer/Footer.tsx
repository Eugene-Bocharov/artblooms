import React from 'react';
import styles from './Footer.module.scss';

import { FooterEmailForm } from '../FooterEmailForm/FooterEmailForm';

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.midContainer}>
          <div className={styles.footerRow}>
            <h1 className={styles.logoTitle}>ArtBlooms</h1>
            <div className={styles.footerEmailFormBox}>
              <FooterEmailForm />
            </div>
          </div>
          <div className={styles.dividerBox}>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Navigation</p>

              <a className={styles.link} href="/studio">
                Studio
              </a>
              <a className={styles.link} href="/art-classes-children">
                Art Classes for Children
              </a>
              <a className={styles.link} href="/art-classes-adults">
                Art Classes for Adults
              </a>
              <a className={styles.link} href="/art-classes-adolescents">
                Art Classes for Adolescents
              </a>
              <a className={styles.link} href="/prices">
                Prices
              </a>
              <a className={styles.link} href="/workshops">
                Workshops
              </a>
              <a className={styles.link} href="/events">
                Events
              </a>
              <a className={styles.link} href="/art-birthdays">
                Art Birthdays
              </a>
              <a className={styles.link} href="/trial-classes">
                Trial Classes
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Social Media</p>
              <a
                className={styles.link}
                href="https://www.instagram.com/artbloomsclub?igsh=MTJsZ3JtY3l3Nmk2eQ%3D%3D&utm_source=qr"
              >
                Instagram
              </a>
              <a
                className={styles.link}
                href="https://www.facebook.com/share/1AtYNa3Ruo/?mibextid=wwXIfr"
              >
                Facebook
              </a>
              <a className={styles.link} href="#">
                X
              </a>
              <a className={styles.link} href="#">
                LinkedIn
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Contact</p>
              <a className={styles.link} href="#">
                514-621-67-48
              </a>
              <a className={styles.link} href="#">
                artbloomsclub@gmail.com
              </a>
              <a className={styles.link} href="#">
                4055 St.Catherine O. Unit 196 H3Z 3J8 Westmount Quebec
              </a>
              <a className={styles.link} href="/enroll-now">
                Write us
              </a>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.midContainer}>
          <p className={styles.rightT}>
            Copyright © 2025 ArtBlooms - All rights reserved | Website made by
            Yevhenii Bocharov from{' '}
            <a className={styles.website} href="https://hipl.netlify.app/">
              HIPL.netlify.app
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
