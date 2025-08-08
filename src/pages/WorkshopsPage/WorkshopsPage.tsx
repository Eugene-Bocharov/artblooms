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
      image: require('../../static/ClassImage1.png'),
      title: 'Watercolor Workshop',
      description:
        'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. ',
      details: [
        {
          smallTitle: 'Date',
          name: 'May 10',
          cost: '$50',
          spots: 10,
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
      link: 'https://square.link/u/FgnQU3yP?src=embed',
      button: true,
    },
    {
      image: require('../../static/ClassImage2.png'),
      title: 'Watercolor Workshop',
      description:
        'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. ',
      details: [
        {
          smallTitle: 'Date',
          name: 'May 10',
          cost: '$50',
          spots: 10,
          link: '#',
        },
      ],
      link: 'https://square.link/u/FgnQU3yP?src=embed',
      button: true,
    },
  ];

  const cardsBottom = [
    {
      image: require('../../static/ClassImage1.png'),
      title: 'Daria Schiefferstien',
      description:
        'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '#',
    },
    {
      image: require('../../static/ClassImage2.png'),
      title: 'Daria Schiefferstien',
      description:
        'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '#',
    },
    {
      image: require('../../static/ClassImage1.png'),
      title: 'Daria Schiefferstien',
      description:
        'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '#',
    },
    {
      image: require('../../static/ClassImage2.png'),
      title: 'Daria Schiefferstien',
      description:
        'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
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
