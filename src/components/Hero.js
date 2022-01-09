import React from 'react'
import { Conth, Fontlora, H2, Ic, Image, Par } from '../styles/Hero.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        <div>
             <div>
             <Conth>
                <Fontlora>
                    <div>
                    <Image src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1640974698/AmazonasSprint3/bmrjpbdupye3b9lwysml.jpg" alt="" />
                    </div>

                    <H2>
                        <p>¡Hi there! <br/>I'm Juan S. Suarez</p>
                    </H2>

                    <Par>
                        <p>I have decided to educate myself as a
front-end web designer/developer. 
Now I work hard every day to become the best version of myself and become a full stack web designer and developer.</p>
                    </Par>
                    
                    <Ic>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </Ic>
                
                </Fontlora>
            </Conth>
        </div>
        </div>
    )
}

export default Hero
