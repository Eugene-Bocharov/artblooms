import React, { useState } from 'react';
import { Slide, useScrollTrigger, AppBar, Toolbar } from '@material-ui/core';
import styles from './Header.module.scss';
import { HeaderLink } from '../../Molecules/HeaderLink/HeaderLink';

interface HeaderProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<HeaderProps> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isArtClassesOpen, setIsArtClassesOpen] = useState(false);

  return (
    <div className={styles.header}>
      <HideOnScroll>
        <AppBar
          position="fixed"
          className={`${styles.appBar} ${styles.fullWidthMenu}`}
        >
          <Toolbar className={styles.toolbar}>
            <div className={styles.logo}></div>
            <div
              className={styles.navLinks}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <HeaderLink text="Home" href="/" />
              <HeaderLink text="About" href="/about" />
              <HeaderLink text="Studio" href="/studio" />
              <div
                className={styles.dropdownContainer}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <HeaderLink text="Art Classes" href="#" />
                <div
                  className={`${styles.arrow} ${showDropdown ? styles.arrowOpen : ''}`}
                />
                {showDropdown && (
                  <div className={styles.dropdown}>
                    <HeaderLink
                      text="Art Classes for Children"
                      href="/art-classes-children"
                    />
                    <HeaderLink
                      text="Art Classes for Adults"
                      href="/art-classes-adults"
                    />
                    <HeaderLink
                      text="Art Classes for Adolescents"
                      href="/art-classes-adolescents"
                    />
                    <HeaderLink text="Prices" href="/prices" />
                  </div>
                )}
              </div>
              <HeaderLink text="Workshops" href="/workshops" />
              <HeaderLink text="Events" href="/events" />
              <HeaderLink text="Art Birthdays" href="/art-birthdays" />
              <HeaderLink text="Trial Classes" href="/trial-classes" />
              <HeaderLink text="Careers" href="/careers" />
              <HeaderLink text="Get in Touch" href="/enroll-now" />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
