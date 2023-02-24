import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import People from './components/People/People';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import Work from './components/Work/Work';
import css from './styles/App.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Service />
      <Work />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
