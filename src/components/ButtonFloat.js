import React from 'react';
import '../styles/ButtomFloat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi, faBrain, faPlus, faInbox } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { github } from '@fortawesome/free-solid-svg-icons'
const ButtonFloat = () => {
  return (
  <div className='btn-container'>
      <input type="checkbox" id='btn-mas' />
      <div className='redes'>
      <a  href='https://www.linkedin.com/in/juan-s-suarez/' target="_blank"> <FontAwesomeIcon icon={faLinkedin} /></a>
      <a   href='https://github.com/juansesu3?tab=repositories' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      <a   href='https://api.whatsapp.com/send?phone=573107437640&text=Hola!%20Juan%20se,%20como%20estas?%20Estamos%20interesados%20en%20tu%20trabajo,%20hablmos%20' target="_blank"><FontAwesomeIcon icon={faWhatsappSquare} /></a>
      <a   href="contact"><FontAwesomeIcon icon={faInbox} /></a>
      </div>
      <div className='btn-mas'>
          <label for='btn-mas' className='icon'><FontAwesomeIcon icon={faPlus} /></label>
      </div>
  </div>
  );
};

export default ButtonFloat;
