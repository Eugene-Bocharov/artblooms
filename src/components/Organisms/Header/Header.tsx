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
            <div className={styles.navLinks}>
              <HeaderLink text="Home" href="/" />
              <HeaderLink text="About" href="/about" />
              <HeaderLink text="Studio" href="#" />

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
                    <HeaderLink text="Art Classes for Children" href="#" />
                    <HeaderLink text="Art Classes for Adults" href="#" />
                    <HeaderLink text="Art Classes for Adolescents" href="#" />
                    <HeaderLink text="Prices" href="#" />
                  </div>
                )}
              </div>
            </div>
            <HeaderLink text="Workshops" href="#" />
            <HeaderLink text="Events" href="#" />
            <HeaderLink text="Art Birthdays" href="#" />
            <HeaderLink text="Trial Classes" href="#" />
            <HeaderLink text="Careers" href="#" />
            <HeaderLink text="Enroll Now" href="#" />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
