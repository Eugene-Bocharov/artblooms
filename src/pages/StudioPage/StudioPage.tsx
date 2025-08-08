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
        title="Elevate Your Space"
        description="At Art Blooms Club, we offer a unique space for artists of all levels to unleash their creativity in a welcoming, inspiring environment. Our Studio Sessions provide the perfect opportunity for individuals to explore their artistic passions with the guidance of a skilled educator."
        position="normal"
        pic="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PicDesc
        title="Elevate Your Space"
        description="Every Saturday and Sunday afternoon, we invite you to join us for 3.5-hour sessions designed to help you deepen your artistic practice. Whether you're an experienced painter or a beginner, our studio is the ideal place to experiment with different techniques and mediums in a relaxed yet structured setting.

"
        position="reversed"
        pic="https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PicDesc
        title="Elevate Your Space"
        description="With the support of our dedicated educators, you'll receive personalized feedback and creative direction to help you grow as an artist. This is not just a painting class—it's a chance to immerse yourself in your craft, discover new possibilities, and connect with fellow art lovers in a supportive community.

"
        position="normal"
        pic="https://images.unsplash.com/photo-1522410818928-5522dacd5066?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PicDesc
        title="Elevate Your Space"
        description="Join us at Art Blooms Club for a truly enriching artistic experience in a space where creativity flows freely and guidance is always within reach.

"
        position="reversed"
        pic="https://images.unsplash.com/photo-1449668800654-c55ef9de3ef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Footer />
    </>
  );
};
