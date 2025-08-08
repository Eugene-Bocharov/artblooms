import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HomeWelc } from '../../components/Organisms/HomeWelc/HomeWelc';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { PopUpForm } from '../../components/Organisms/PopUpForm/PopUpForm';
import { photos } from '../../static/serviceExp';
import { Partners } from '../../components/Organisms/Partners/Partners';
import { StatsSection } from '../../components/Organisms/StatsSection/StatsSection';
import { TestimonialsComponent } from '../../components/TestimonialsComponent/TestimonialsComponent';
import { LinkCards } from '../../components/LinkCards/LinkCards';

export const Homepage: React.FC = () => {
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
      image:
        'https://images.unsplash.com/photo-1623853434105-8e7a72898180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbiUyMHBvcnRyYWl0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfDF8MHx8fDA%3D',
      title: 'Maude',
      text: 'Maude is an interdisciplinary artist living and creating in Montreal. With extensive experience in childrens art education and many years spent studying art in school, Maude brings a breadth of knowledge to each class. Her approach to teaching is constructive, aiming to meet children where they are in terms of skill level and interest. In her personal art practice, Maude is interested in bright colors and symbolism inspired by Christian iconography.',
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
      <HomeWelc />
      <StatsSection />
      <TestimonialsComponent />
      <LinkCards title="Teachers" cards={exampleCards} />
      <Partners title="Our Partners" pic={photos.partner} />
      <PopUpForm />
      {/* <Title title="Ready to work with us ?" link="/contact" /> */}
      <Footer />
    </>
  );
};
