import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { WideSlider } from '../../components/Organisms/WideSlider/WideSlider';

export const ArtBirthdaysPage: React.FC = () => {
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
      <h1>About Us</h1>
      <PicDesc
        title="Elevate Your Space"
        description="Celebrate your special day with a creative twist! At Art Blooms Club, we offer unforgettable art-themed birthday parties for both children and adults. Whether you're looking to give your child a fun, hands-on art experience or want to add a unique, artistic flair to your adult celebration, our parties are designed to inspire and entertain.

For kids, we create a playful and engaging environment where young artists can explore their creativity through guided art activities. From painting to sculpture and more, our experienced instructors will lead the group in making personalized masterpieces to take home.

For adults, we offer a more sophisticated experience with themed art activities, perfect for a relaxed and enjoyable celebration. Whether you're hosting a milestone birthday, a group of friends, or a team event, our art parties provide a fun, social, and creative way to mark the occasion.

Let Art Blooms Club take care of everything – from materials to guidance – so you can focus on enjoying your special day surrounded by art and creativity.





At Art Blooms Club, we offer fun and affordable art birthday parties for groups of 5 to 10 people. The cost is $25 per child and $35 per adult, which includes all art supplies and expert guidance. For larger groups, please contact us directly for customized pricing and arrangements. Each participant will leave with a unique piece of art, making it a truly memorable and creative celebration. Let us help you make your birthday party extra special!"
        position="normal"
        pic="https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <WideSlider />
      <Footer />
    </>
  );
};
