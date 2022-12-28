import React from 'react';
import './style.css';

function Header() {
  return (
    <header>
      <div className='limit'>
        <h1>CondominiumSystem</h1>
        <div>
          <a href='teste'>Link1</a>
          <a href='teste'>Link2</a>
          <a href='teste'>Link3</a>
        </div>
      </div>
    </header>
  );
}

export default Header;