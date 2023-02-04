import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, NavigationDots, SocialMedia } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <NavigationDots />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <SocialMedia />
    <Footer />
  </div>
);

export default App;
