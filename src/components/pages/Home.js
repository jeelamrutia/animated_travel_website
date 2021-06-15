import React from 'react';
import Hero from '/home/jeelamrutiya/Desktop/ReactJS/animated_website/src/components/Hero.js';
import InfoSection from '/home/jeelamrutiya/Desktop/ReactJS/animated_website/src/components/InfoSection.js';
import Cards from '../Cards';
import { InfoData } from '/home/jeelamrutiya/Desktop/ReactJS/animated_website/src/components/data/InfoData.js';
import { SliderData } from '/home/jeelamrutiya/Desktop/ReactJS/animated_website/src/components/data/SliderData.js';
import Footer from '../Footer';



function Home(){
    
    
    return (
      <>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <Cards />
      <Footer />
      </>
    );
  
    }
export default Home;