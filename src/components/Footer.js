import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi, faBrain} from '@fortawesome/free-solid-svg-icons';
import { Grid1foot, Grid2foot, Grid3foot, Grid4foot, Grid5foot, Grid6foot, Gridlayoutfooter } from '../styles/Footer.style';




const Footer = () => {
    return (
        <div>
            <Gridlayoutfooter>
                  

                    <Grid2foot>
                        <p>¡Never<br/> Give<br/> Up!</p>
                    </Grid2foot>

                    <Grid3foot>
                        <p>Copyright 2021-Todos los derechos reservados</p>
                    </Grid3foot>

                    <Grid4foot><FontAwesomeIcon icon={faBrain} /></Grid4foot>

                    <Grid5foot><FontAwesomeIcon icon={faBrain} /></Grid5foot>

                   

                </Gridlayoutfooter>
        </div>
    )
}

export default Footer

