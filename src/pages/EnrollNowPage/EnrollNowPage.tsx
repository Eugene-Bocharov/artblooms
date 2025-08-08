import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { ContactForm } from '../../components/Molecules/ContactForm/ContactForm';
import { Title } from '../../components/Molecules/Title/Title';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';

export const EnrollNowPage: React.FC = () => {
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
        title="Lets Get in Touch"
        description="At Art Blooms Club, we value open communication and are always happy to connect with individuals who share our passion for art. If you have any additional questions, suggestions, or ideas for collaboration, please don’t hesitate to reach out to us.

Whether you’re looking for more information about our classes, events, or partnerships, or simply have something you'd like to share, we welcome your input. We’re here to listen and explore how we can work together to create meaningful experiences in the art world.

Feel free to contact us anytime—we look forward to hearing from you!"
      />
      <ContactForm />
      <Footer />
    </>
  );
};
