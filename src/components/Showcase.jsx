import React from 'react';
import Articles from './Articles';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Contact from './Contact';

export default function Showcase() {
  return (
    <div>
      <Articles />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}
