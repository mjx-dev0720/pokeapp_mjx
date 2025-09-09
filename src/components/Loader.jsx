import React from 'react';
import './Loader.css';

const Loader = ({ text = 'Loading...' }) => (
  <div className="loader-outer">
    <div className="loader-spinner"></div>
    <div className="loader-text">{text}</div>
  </div>
);

export default Loader;
