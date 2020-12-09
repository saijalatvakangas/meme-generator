import React from 'react';
import picture from '../pictures/trollface.png';

function Header() {
  return (
    <header>
      <img
        src={picture}
        alt="trollface"
      />
      <p>Meme Generator</p>
    </header>
  )
}

export default Header;
