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
                                            Juan Sebastian Suarez Ramirez <br />
                                        </span>
                                    </Animator>
                                </ScrollPage>
                            </ScrollContainer>
                        </H2>
                        <Par>
                            <ScrollContainer>
                                <ScrollPage page={2}>
                                    <Animator animation={batch(Sticky(44, 55), Fade(), MoveOut(0, -200))}>

                                        <p className='font-style2'>
                                            I am a highly motivated and enthusiastic junior
                                            front-end developer with a strong understanding of
                                            React.js, JavaScript, Python and Django. I am
                                            passionate about developing user-friendly web
                                            applications and have a proven track record of
                                            delivering high-quality projects. I am a quick learner,
                                            comfortable in fast-paced environments, and a team
                                            player. I am eager to continue building my skills and
                                            contributing to innovative solutions as a junior frontend developer.
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
