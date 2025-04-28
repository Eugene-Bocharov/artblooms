import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { WorkerFormComp } from '../../components/Organisms/CareersForm/CareersForm';

export const CareersPage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}
      <h1
        style={{ textAlign: 'center', fontSize: '2.5rem', marginTop: '2rem' }}
      >
        Careers
      </h1>
      <TitleDesc
        title="Our Prices"
        description="Whether you are looking to renovate your home, build a new commercial space, or enhance the aesthetic appeal of your property, we are dedicated to transforming spaces into functional, beautiful environments."
      />
      <WorkerFormComp />
      <Footer />
    </>
  );
};
