import React from 'react'
import { Conth, Fontlora, H2, Ic, /*Image, */ Par } from '../styles/Hero.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Animator, batch, Fade, /* FadeIn, MoveIn, */ MoveOut, ScrollContainer, ScrollPage, Sticky, /* Zoom, ZoomIn */ } from 'react-scroll-motion'
import Logo from './animations/Logo';
import '../styles/Animation.css'


const Hero = () => {

    return (
        <div>
            <div>
                <Conth>
                    <Fontlora>
                        <div>
                            <ScrollContainer>
                                <ScrollPage page={0}>
                                    <Animator animation={batch(Sticky(47.5, 35), Fade(), MoveOut())}>
                                        <Logo />
                                        <center>
                                            <div className='arrow'>
                                                <FontAwesomeIcon icon={faArrowDown} /></div></center>
                                    </Animator>
                                </ScrollPage>
                            </ScrollContainer>
                        </div>
                        <H2>
                            <ScrollContainer>
                                {(window.screen.width) > 900}
                                <ScrollPage page={1}>
                                    <Animator animation={batch(Sticky(37, 60), Fade(), MoveOut())}>
                                        <span className='font-style2'>
                                            ¡Hi there! 👋🏻<br />
                                            <span className='font-style'>My name is</span><br />
                                            Juan Sebastian Suarez <br />I'm a front-end web developer with an emphasis on React.js
                                        </span>
                                    </Animator>
                                </ScrollPage>
                            </ScrollContainer>
                        </H2>
                        <Par>
                            <ScrollContainer>
                                <ScrollPage page={2}>
                                    <Animator animation={batch(Sticky(, 55), Fade(), MoveOut(0, -200))}>

                                        <p className='font-style2'>
                                            My purpose is to contribute to the creative solution of problems and add
                                            value to the world through my knowledge and skills as a developer.
                                        </p>

                                    </Animator>
                                </ScrollPage>
                            </ScrollContainer>
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
