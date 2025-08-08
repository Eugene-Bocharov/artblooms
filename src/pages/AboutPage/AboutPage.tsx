import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { WideSlider } from '../../components/Organisms/WideSlider/WideSlider';

export const AboutPage: React.FC = () => {
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
        title="Discover the Art Blooms Club"
        description="At Art Blooms Club, we believe   every child is an artist waiting to bloom. Located in the heart of Westmount, Montreal, our art classes are designed to ignite creativity, build confidence, and provide a joyful, hands-on experience for children of all ages.

Our classes are led by experienced instructors who foster a supportive and encouraging environment, allowing each child to explore various artistic mediums at their own pace. Whether it's painting, drawing, or mixed media, our curriculum is tailored to inspire imagination and self-expression.

We offer flexible scheduling options, including after-school sessions and weekend workshops, to accommodate busy families. Each class is thoughtfully designed to ensure that children not only develop their artistic skills but also have fun and make lasting memories.

Join us at  Art Blooms Club, where creativity blossoms and young artists thrive.


Art Blooms Club is also a vibrant community of artists and art enthusiasts. 

Our mission is to foster creativity, collaboration, and appreciation for the arts through engaging events and workshops. We aim to provide a platform for local artists to showcase their work, connect with the community, and inspire others to explore their artistic potential.Westmount

At Art Blooms Club, we believe in the transformative power of art to bring people together and enrich lives. Whether you're an artist looking for a supportive environment to share your creations or an art lover eager to discover new talent, our club offers a welcoming space for all.

Join us in celebrating the beauty and diversity of art in Westmount. Together, we can cultivate a flourishing arts community where creativity blooms.

"
        position="normal"
        pic="https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/494725263_1258638712557126_1376132219059415236_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kTAhCHEgud8Q7kNvwGGVYRO&_nc_oc=Adn1irWAFQgtq-jyTbsfXxKWkhQhUBpyRCogZIvDB7spOboUaYJW48bkEXknrL7QbDA&_nc_zt=23&_nc_ht=scontent.fyhu2-1.fna&_nc_gid=opjP8swferciBK4WUMf8xQ&oh=00_AfLLg5WCo7lbO42EsNJ-ZclBLsQEQN2bmyuFePy_oXdViw&oe=6842D7F5"
      />

      <WideSlider />
      <Footer />
    </>
  );
};
