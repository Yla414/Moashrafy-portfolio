import React from 'react';
import { LinearGradient } from 'react-text-gradients';

import { RiSearch2Line as LensIcon } from 'react-icons/ri';

import './errorpage.css';

const Errorpage = () => {
  return (
    <div className='project__error__container container__large'>
        <span className="error__icon">
            <LensIcon color='var(--secondary-color)' size={50}/>
        </span>
        <h1 className='text__center'>
        <LinearGradient
            gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
            fallbackColor="var(--text-color)"
          >
            Oops! The page you're looking for does not exist
          </LinearGradient>
        </h1>
    </div>
  )
}

export default Errorpage