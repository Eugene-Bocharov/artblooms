import React, { useState } from 'react';
import styles from './HeaderMob.module.scss';
import { HeaderLinkMob } from '../../Molecules/HeaderLinkMob/HeaderLinkMob';
import { Slide, useScrollTrigger, AppBar, Toolbar } from '@material-ui/core';
import Hamburger from 'hamburger-react';

interface HeaderProps {
  children: React.ReactElement;
  isMenuOpen: boolean;
}

const HideOnScroll: React.FC<HeaderProps> = ({ children, isMenuOpen }) => {
  const trigger = useScrollTrigger();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isMenuOpen ? (
        <>{React.cloneElement(children, { elevation: 4 })}</>
      ) : (
        <Slide appear={false} direction="down" in={!trigger}>
          {React.cloneElement(children, {
            elevation: prevScrollPos > 0 ? 4 : 0,
          })}
        </Slide>
      )}
    </>
  );
};

const ServicesDropdown = () => (
  <div className={styles.dropdownMenu}>
    {/* <a href="/interior" className={styles.serviceLink}>
      Interior Design
    </a> */}
    <a href="/art-classes-children" className={styles.serviceLink}>
      Art Classes for Children
    </a>
    <a href="/art-classes-adults" className={styles.serviceLink}>
      Art Classes for Adults
    </a>
    <a href="/art-classes-adolescents" className={styles.serviceLink}>
      Art Classes for Adolescents
    </a>
    <a href="/prices" className={styles.serviceLink}>
      Prices
    </a>
  </div>
);

export const HeaderMob = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArtClassesOpen, setIsArtClassesOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.header}>
        <HideOnScroll isMenuOpen={isMenuOpen}>
          <AppBar position="fixed" className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
              <div className={styles.incontainer}>
                <div className={styles.divider}>
                  <a
                    href="/"
                    className={styles.logocontainer}
                    aria-label="Home"
                  ></a>
                  <div className={styles.hamburgerContainer}>
                    <Hamburger
                      toggled={isMenuOpen}
                      toggle={setIsMenuOpen}
                      color="#000"
                    />
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </div>
      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.mobcontainer}>
            <HeaderLinkMob text="Home" href="/" />
            <HeaderLinkMob text="About" href="/about" />
            <HeaderLinkMob text="Studio" href="/studio" />
            <div
              className={styles.dropdownLink}
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-controls="services-dropdown"
            >
              Art Classes
              <div
                className={`${styles.arrow} ${isDropdownOpen ? styles.open : ''}`}
              />
            </div>
            {isDropdownOpen && <ServicesDropdown />}
            <HeaderLinkMob text="Workshops" href="/workshops" />
            <HeaderLinkMob text="Events" href="/events" />
            <HeaderLinkMob text="Art Birthdays" href="/art-birthdays" />
            <HeaderLinkMob text="Trial Classes" href="/trial-classes" />
            <HeaderLinkMob text="Careers" href="/careers" />
            <HeaderLinkMob text="Get in Touch" href="/enroll-now" />
          </div>
        </div>
      )}
    </>
  );
};
