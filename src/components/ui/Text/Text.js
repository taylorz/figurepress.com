import React from 'react';
import './Text.scss';

const Text = ({
  children, 
  bold,
  paragraph,
  light
}) => (
  <span 
    className={`
      text
      ${bold && "bold"}
      ${paragraph && "paragraph"}
      ${light && "light"}
    `}
  >
    {children}
  </span>
)

export default Text