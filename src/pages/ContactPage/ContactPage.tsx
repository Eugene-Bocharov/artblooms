import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Title } from '../../components/Molecules/Title/Title';
import { ContactForm } from '../../components/Organisms/ContactForm/ContactForm';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { ContactInfo } from '../../components/Organisms/ContactInfo/ContactInfo';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';

export function ContactPage() {
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
      <ContactInfo title="Let us bring your vision to life!" />
      <TitleDesc
        title="Lets get in touch !"
        description="At Art Blooms Club, we are always looking for passionate and talented art educators to join our dynamic team. If you are an experienced instructor with a love for nurturing creativity and guiding students of all ages, we would love to hear from you.
      
      We believe in the power of art to inspire and transform, and we are constantly seeking individuals who share this vision and have the skills to bring out the best in our students. Whether you specialize in painting, drawing, sculpture, or other artistic disciplines, we encourage you to reach out.
      
      Feel free to send us your CV and a brief introduction to your teaching experience. We are always open to connecting with new, creative individuals who are eager to be part of our vibrant community.
      
      Apply today and help us inspire the next generation of artists at Art Blooms Club!"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
