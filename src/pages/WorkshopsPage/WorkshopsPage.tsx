import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { ClassDescCard } from '../../components/classDescCard/classDescCard';

export const WorkshopsPage: React.FC = () => {
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
      image:
        'https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Watercolor Workshop',
      description: 'Learn watercolor techniques in a fun, hands-on class.',
      details: [
        {
          smallTitle: 'Date',
          name: 'May 10',
          cost: '$50',
          spots: 10,
          link: '#',
        },
      ],
      link: '#',
      button: true,
    },
    {
      image:
        'https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Watercolor Workshop',
      description: 'Learn watercolor techniques in a fun, hands-on class.',
      details: [
        {
          smallTitle: 'Date',
          name: 'May 10',
          cost: '$50',
          spots: 10,
          link: '#',
        },
      ],
      link: '#',
      button: true,
    },
  ];

  const cardsBottom = [
    {
      image:
        'https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sketching Basics',
      description: 'A perfect start for those who want to learn sketching.',
      link: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sketching Basics',
      description: 'A perfect start for those who want to learn sketching.',
      link: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sketching Basics',
      description: 'A perfect start for those who want to learn sketching.',
      link: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sketching Basics',
      description: 'A perfect start for those who want to learn sketching.',
      link: '#',
    },
  ];

  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}
      <h1>Workshops</h1>
      <ClassDescCard title="Upcoming" cards={cardsTop} />
      <ClassDescCard title="Last" cards={cardsBottom} />
      <Footer />
    </>
  );
};
