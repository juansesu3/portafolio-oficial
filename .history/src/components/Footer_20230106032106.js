

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid2foot, Grid3foot, Grid4foot, Grid5foot, Grid6foot, Gridlayoutfooter } from '../styles/Footer.style';
import { faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <Gridlayoutfooter>
                  

                    <Grid2foot>
                        <p>¡Never<br/> Give<br/> Up!</p>
                    </Grid2foot>

                    <Grid3foot>
                        <p>Copyright 2023-All rights reserved</p>
                    </Grid3foot>

                    <Grid4foot> <a style={{color: "#0a66c2"}} href='https://www.linkedin.com/in/juan-s-suarez/' target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a></Grid4foot>

                    <Grid5foot><a  style={{color: "white"}} href='https://github.com/juansesu3?tab=repositories' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a> </Grid5foot>
                    
                    <Grid6foot><a  style={{color: "#38dc57"}}  href='https://api.whatsapp.com/send?phone=41782645121&text=Hi,%20Juan%20Se!%20How%20are%20you?%20We%20are%20interested%20in%20your%20nice%20work,%20lets%20talk%20' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsappSquare} /></a></Grid6foot>

                </Gridlayoutfooter>
        </div>
    )
}

export default Footer

