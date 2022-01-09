import React from 'react'
import { Conth, Fontlora, H2, Ic, Image, Par } from '../styles/Hero.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, Zoom, ZoomIn } from 'react-scroll-motion'
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
                                    <Animator animation={batch(Sticky(35, 25), Fade(), MoveOut())}>

                                        <Image src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1640974698/AmazonasSprint3/bmrjpbdupye3b9lwysml.jpg" alt="" />

                                    </Animator>

                                </ScrollPage>

                            </ScrollContainer>

                        </div>

                        <H2>
                            <ScrollContainer>
                                <ScrollPage page={0}>
                                    <Animator animation={batch(Sticky(35, 55), Fade(), MoveOut())}>

                                        <p>¡Hi there! 👋🏻<br />I'm Juan S. Suarez</p>

                                    </Animator>

                                </ScrollPage>

                            </ScrollContainer>
                        </H2>

                        <Par>
                            <ScrollContainer>
                                
                                <ScrollPage  page={1}>
                                    <Animator animation={batch(Sticky(40, 65), Fade(), MoveOut(0, -200))}>

                                        I have decided to educate myself as a
                                            front-end web designer/developer.
                                            Now I work hard every day to become the best version of myself and become a full stack web designer and developer.

                                    </Animator>

                                </ScrollPage>
                                {/* <ScrollPage page={3}>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                                        <span style={{ fontSize: "40px", color: "black" }}>
                                            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                                            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
                                            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                                            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                                        </span>
                                    </div>
                                </ScrollPage> */}

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
