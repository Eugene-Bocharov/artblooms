import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { ClassDescCard } from '../../components/classDescCard/classDescCard';
import ClassImage1 from '../../static/ClassImage1.png';
import ClassImage2 from '../../static/ClassImage2.png';
import ClassImage3 from '../../static/ClassImage3.png';
import ClassImage4 from '../../static/ClassImage4.png';

export const EventsPage: React.FC = () => {
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

  const cardsTop = [
    {
      image: ClassImage1,
      link: '#',
    },
    {
      image: ClassImage2,
      link: '#',
    },
  ];

  const cardsBottom = [
    {
      image: ClassImage3,
      link: '#',
    },
    {
      image: ClassImage4,
      link: '#',
    },
    {
      image: ClassImage1,
      link: '#',
    },
    {
      image: ClassImage2,
      link: '#',
    },
  ];

  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}
      <h1>Events</h1>
      <ClassDescCard title="Upcoming" cards={cardsTop} />
      <ClassDescCard title="Last" cards={cardsBottom} />
      <Footer />
    </>
  );
};
