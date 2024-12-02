import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/Intro';
import { Mission } from './components/Mission';
import { useEffect } from 'react';
import { Cando } from './components/cando/Cando';
import { Service } from './components/Service';
import { Testimonial } from './components/testimonials/Testimonial';
import { OpenHrs } from './components/OpenHrs';
import FadeInComponent from './components/FadeInComponent';


function App() {
  useEffect(() => {
    document.title = "Somerville Dental"; // Set the page title here
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <FadeInComponent>
        <Header />
      </FadeInComponent>
      <FadeInComponent>
        <Intro />
      </FadeInComponent>
      <FadeInComponent>
        <Mission />
      </FadeInComponent>
      <FadeInComponent >
        <Cando />
      </FadeInComponent>
      <FadeInComponent >
        <Service />
      </FadeInComponent>
      <FadeInComponent>
        <Testimonial />
      </FadeInComponent>
      <FadeInComponent>
        <OpenHrs />
      </FadeInComponent>
      <FadeInComponent >
        <Footer />
      </FadeInComponent>
    </>
  );
}


export default App;
