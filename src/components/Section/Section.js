import React from 'react';
import './Section.scss';

const Section = ({children, className}) => (
  <div className={`section ${className}`}>
    {children}
  </div>
)

export default Section