import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import BannerCarousel from './components/carousel/carousel';
import AboutUs from './components/about/about';
import Services from './components/service/service';
import Programs from './components/program/program';
// import Testimonials from './components/testimonial/testimonial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BannerCarousel />
    <AboutUs />
    <Services />
    <Programs />
    {/* <Testimonials /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
