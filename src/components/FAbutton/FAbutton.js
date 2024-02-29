// FAbutton.js

import React from 'react';
import './FAbutton.css';

const FAbutton = (props) => {
  const { onClick, disabled, name, type, img: Icon } = props;

  return (
    <div className='faButton'>
      <div className={`button-name ${disabled ? 'closed' : 'open'}`} style={{ opacity: name ? '1' : '0' }}>
        {name}
      </div>
      <button onClick={onClick} className={`FAbutton ${disabled ? 'closed' : 'open'} ${type}`}>
        <Icon size={25} color='#0F0F0F'/>
      </button>
    </div>
  );
};

export default FAbutton;
