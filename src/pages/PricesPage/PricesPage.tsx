import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';

export const PricesPage: React.FC = () => {
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
      <h1>Prices</h1>
      <TitleDesc
        title="Our Prices"
        description="At Art Blooms Club, we strive to make our courses accessible while offering excellent value for a high-quality artistic experience. Each course consists of 10 classes, and a full session costs $225+tax. This includes expert guidance, all necessary materials, and a supportive, creative environment where you can truly explore your artistic potential. Join us and take the next step in your artistic journey!"
      />
      <Footer />
    </>
  );
};
