import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/Intro';
import { Mission } from './components/Mission';
import { useEffect } from 'react';
import { CandoCard } from './components/cando/CandoCard';
import { ServiceCard } from './components/dentalServices/ServiceCard';
import { TestimonialCard } from './components/testimonials/TestimonialCard';
import { OpenHrs } from './components/OpenHrs';
function App() {
  useEffect(() => {
    document.title = "Somerville Dental"; // Set the page title here
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <Header />
      <Intro />
      <Mission />
      <CandoCard />
      <ServiceCard />
      <TestimonialCard />
      <OpenHrs />
      <Footer />
    </>
  );
}

export default App;
