import React from 'react';
import './Text.scss';

const Text = ({
  children, 
  bold,
  paragraph,
  light,
  italic,
  center
}) => (
  <span 
    className={`
      text
      ${bold && "bold"}
      ${paragraph && "paragraph"}
      ${light && "light"}
      ${italic && "italic"}
      ${center && "center"}
    `}
  >
    {children}
  </span>
)

export default Text