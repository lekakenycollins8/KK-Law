import { Hero } from '../components/Hero';
import { About } from '../components/About';
import Features from '../components/Features';
import Stats from '../components/Stats';
import { Values } from '../components/values/Values';
import { useRef } from 'react';


const Home = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="heroSection  ">
        <Hero scrollToAbout={scrollToAbout} />
      </div>
      <div  ref={aboutRef}> <About /></div> 
      <Values/>
      <Features />
      <Stats/>
     
    </>
  );
}

export default Home
