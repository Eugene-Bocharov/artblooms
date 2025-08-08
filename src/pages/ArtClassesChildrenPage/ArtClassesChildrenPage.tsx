import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { ClassInfo } from '../../components/ClassInfo/ClassInfo';
import { LinkCards } from '../../components/LinkCards/LinkCards';
import ClassImage1 from '../../static/ClassImage1.png';
import ClassImage2 from '../../static/ClassImage2.png';
import ClassImage3 from '../../static/ClassImage3.png';
import ClassImage4 from '../../static/ClassImage4.png';
import ClassImage5 from '../../static/ClassImage5.jpeg';
import ClassImage6 from '../../static/ClassImage6.jpeg';
import ClassImage7 from '../../static/ClassImage7.jpeg';

import ClassImage8 from '../../static/ClassImage8.jpeg';

export const ArtClassesChildrenPage: React.FC = () => {
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

  const exampleCards = [
    {
      image: ClassImage1,
      title: 'Monday',
      details: [
        {
          smallTitle: '15.45-17.00',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
        {
          smallTitle: '17.15-18.30',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
    },
    {
      image: ClassImage5,
      title: 'Tuesday',
      details: [
        {
          smallTitle: '15.45-17.00',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
        {
          smallTitle: '17.15-18.30',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
    },
    {
      image: ClassImage6,
      title: 'Wednesday',
      details: [
        {
          smallTitle: '15.45-17.00',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
        {
          smallTitle: '17.15-18.30',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
    },
    {
      image: ClassImage4,
      title: 'Thursday',
      details: [
        {
          smallTitle: '15.45-17.00',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
        {
          smallTitle: '17.15-18.30',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
    },
    {
      image: ClassImage7,
      title: 'Friday',
      details: [
        {
          smallTitle: '15.45-17.00',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
        {
          smallTitle: '17.15-18.30',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
    },
    {
      image: ClassImage2,
      title: 'Saturday',
      details: [
        {
          smallTitle: '10.30-11.45',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
        {
          smallTitle: '12.00-13.15',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
    },
    {
      image: ClassImage8,
      title: 'Sunday',
      details: [
        {
          smallTitle: '10.30-11.45',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
        {
          smallTitle: '12.00-13.15',
          name: 'Children Art Class',
          cost: '$225 for 10 classes',
          spots: '2.5 months',
          link: 'https://square.link/u/FgnQU3yP?src=embed',
        },
      ],
    },
  ];
  const exampleCardss = [
    {
      image:
        'https://images.unsplash.com/photo-1623853434105-8e7a72898180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbiUyMHBvcnRyYWl0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfDF8MHx8fDA%3D',
      title: 'Daria Schiefferstien',
      text: 'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '/link1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1584361853901-dd1904bb7987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MXwwfHx8MA%3D%3D',
      title: 'Daria Schiefferstien',
      text: 'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '/link1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1620122303020-87ec826cf70d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Daria Schiefferstien',
      text: 'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '/link1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1657460899405-693e46f2ade2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Daria Schiefferstien',
      text: 'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '/link1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1594751684241-bcef815d5a57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Daria Schiefferstien',
      text: 'Daria Schieferstein ’11 is an accomplished attorney at Kramer Levin Naftalis & Frankel, LLP in New York. Daria recently took time out from her busy schedule to reflect on her journey from the halls of Ross School to the courtrooms of Manhattan.',
      link: '/link1',
    },
  ];
  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}
      <h1>Art Classes for Children</h1>
      <ClassInfo title="Classes" cards={exampleCards} />
      <LinkCards title="Teachers" cards={exampleCardss} />
      <Footer />
    </>
  );
};
