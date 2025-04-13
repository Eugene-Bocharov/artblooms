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
    <a href="/exterior" className={styles.serviceLink}>
      Exterior Finishings
    </a>
    <a href="/newconstr" className={styles.serviceLink}>
      New Construction
    </a>
    <a href="/roofing" className={styles.serviceLink}>
      Roofing & Other
    </a>
    <a href="/additions" className={styles.serviceLink}>
      Additions & Remodeling
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
                  <div className={styles.logocontainer}></div>
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
              className={styles.dropdown}
              onClick={() => setIsArtClassesOpen(!isArtClassesOpen)}
            >
              <HeaderLinkMob text="Art Classes" href="#" />
              {isArtClassesOpen && (
                <div className={styles.submenu}>
                  <HeaderLinkMob
                    text="Art Classes for Children"
                    href="/art-classes-children"
                  />
                  <HeaderLinkMob
                    text="Art Classes for Adults"
                    href="/art-classes-adults"
                  />
                  <HeaderLinkMob
                    text="Art Classes for Adolescents"
                    href="/art-classes-adolescents"
                  />
                  <HeaderLinkMob text="Prices" href="/prices" />
                </div>
              )}
            </div>
            <HeaderLinkMob text="Workshops" href="/workshops" />
            <HeaderLinkMob text="Events" href="/events" />
            <HeaderLinkMob text="Art Birthdays" href="/art-birthdays" />
            <HeaderLinkMob text="Trial Classes" href="/trial-classes" />
            <HeaderLinkMob text="Careers" href="/careers" />
            <HeaderLinkMob text="Enroll Now" href="/enroll-now" />
          </div>
        </div>
      )}
    </>
  );
};
