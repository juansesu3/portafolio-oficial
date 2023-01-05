import React from 'react';
import '../styles/ButtomFloat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faInbox } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

const ButtonFloat = () => {
  return (
  <div className='btn-container'>
      <input type="checkbox" id='btn-mas' />
      <div className='redes'>
      <a  href='https://www.linkedin.com/in/juan-s-suarez/' target="_blank"> <FontAwesomeIcon icon={faLinkedin} /></a>
      <a   href='https://github.com/juansesu3?tab=repositories' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      <a   href='https://api.whatsapp.com/send?phone=41782645121&text=hi!%20Juan%20Se,%20how%20are%20you?%20we%20are%20interested%20in%20your%20work,%20lets%20talk%20' target="_blank"><FontAwesomeIcon icon={faWhatsappSquare} /></a>
      <a   href="contact"><FontAwesomeIcon icon={faInbox} /></a>
      </div>
      <div className='btn-mas'>
          <label for='btn-mas' className='icon'><FontAwesomeIcon icon={faPlus} /></label>
      </div>
  </div>
  );
};

export default ButtonFloat;
