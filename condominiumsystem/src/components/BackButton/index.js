import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const BackButton = () => (
  <div className="area-button">
    <Link className="button-back" to='/'>Back</Link>
  </div>
);

export default BackButton;