import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';

export const StudioPage: React.FC = () => {
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
      <h1>Studio Information</h1>
      <PicDesc
        title="Our Mission"
        description="We aim to inspire creativity and bring art to life through our unique programs and workshops."
        position="normal"
        pic="https://images.unsplash.com/photo-1745500415839-503883982264?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PicDesc
        title="Our Mission"
        description="We aim to inspire creativity and bring art to life through our unique programs and workshops."
        position="reversed"
        pic="https://images.unsplash.com/photo-1745500415839-503883982264?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PicDesc
        title="Our Mission"
        description="We aim to inspire creativity and bring art to life through our unique programs and workshops."
        position="normal"
        pic="https://images.unsplash.com/photo-1745500415839-503883982264?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PicDesc
        title="Our Mission"
        description="We aim to inspire creativity and bring art to life through our unique programs and workshops."
        position="reversed"
        pic="https://images.unsplash.com/photo-1745500415839-503883982264?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Footer />
    </>
  );
};
