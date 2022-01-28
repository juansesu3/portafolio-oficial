import React from 'react'
import { Conth, Fontlora, H2, Ic, Image, Par } from '../styles/Hero.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, Zoom, ZoomIn } from 'react-scroll-motion'
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
                                    <Animator animation={batch(Sticky(35, 60), Fade(), MoveOut())}>
                                        <span className='font-style2'>¡Hi there! 👋🏻</span><br /><span className='font-style'>My name is</span><br /><span className='font-style2'> Juan Sebastian Suarez <br />I'm a front-end web developer with an emphasis on React.js</span>
                                    </Animator>
                                </ScrollPage>
                            </ScrollContainer>
                        </H2>
                        <Par>
                            <ScrollContainer>
                                <ScrollPage page={2}>
                                    <Animator animation={batch(Sticky(45, 65), Fade(), MoveOut(0, -200))}>
                                        <p>
                                            <span className='font-style2'>
                                                I have decided to educate myself as a
                                                front-end web designer/developer.
                                                Now I work hard every day to become the
                                                best version of myself and become a full stack web designer and developer.
                                            </span>
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
