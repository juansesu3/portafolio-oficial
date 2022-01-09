import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Animator, MoveIn, MoveOut, ScrollPage, ScrollContainer } from 'react-scroll-motion'
import { Anchor, Butt1, Butt2, Contbu, Fontlora, Grid1, Grid2, Grid3, Grid4, Grid5, Grid6, Gridstyle, Sth2, Stp, Textstyle, Tittle } from '../styles/Projects.styles'
import Animation from './Animation'

import '../styles/Animation.css'
import { Ic } from '../styles/Hero.style'



const Projects = () => {
    return (
        <div>
            <Fontlora>
                <ScrollContainer>
                    <div className='altura'>
                    <ScrollPage style={{height:"450px"}} page={3}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100%" }} >
                            <span >
                                <Animator animation={MoveIn(-1000, 0)}> <Tittle>
                                    It looks like magic,<br />
                                    works with code.
                                </Tittle></Animator>
                                <Animator animation={MoveIn(1000, 0)}>  <Textstyle>
                                    <p>Throughout my career as Fronted, I have had the privilege of working on incredible and challenging projects.</p>
                                </Textstyle></Animator>
                                <Animator animation={MoveIn(-1000, 0)}>  <Textstyle>
                                    <center>
                                    <br/> <br/> <br/><h1>PPROJECTS</h1><FontAwesomeIcon/></center>
                                </Textstyle></Animator>
                                <Animator animation={MoveIn(1000, 0)}>  <Textstyle>
                                    <center>
                                        <Ic>
                                    <FontAwesomeIcon icon={faArrowDown} /></Ic></center>
                                </Textstyle></Animator>
                                {/* <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                                <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator> */}
                            </span>
                        </div>
                    </ScrollPage>
                    </div>

                    <Gridstyle>

                        <Grid1 />
                        <Grid2>

                            <div>
                                <Sth2>
                                    Cv App
                                </Sth2>
                                <Stp>
                                An application with the ability to create professional resume through a practical and friendly intuitive interface.
                                    This project was developed together with a development team from the Geek Academy BootCamp.
                                </Stp><br/><br/>  <br/><br/>
                                <Contbu>
                                    <Anchor href='https://github.com/Juanpabedoyav/Demo-Day.git' target="_blank">See Code</ Anchor>
                                    <Anchor href='https://cvapp-573c8.web.app/' target="_blank">See Complete Project </Anchor>
                                </Contbu>
                            </div>
                        </Grid2>

                        <Grid3 />

                        <Grid4>
                            <div>
                                <Sth2>
                                    Block Master
                                </Sth2>
                                <Stp>
                                Block Master is the most recent content platform on the market but at the same time the most powerful. Discover all its functions in this great design project.
                                </Stp>
                                <br/><br/>  <br/><br/><br/>
                                <Contbu>
                                    <Anchor href='https://github.com/juansesu3/Block-master-.git' target="_blank">See Code</ Anchor>
                                    <Anchor href='https://juansesu3.github.io/Block-master-/' target="_blank">See Complete Project</Anchor>
                                </Contbu>

                            </div>
                        </Grid4>



                        {/* <Anchor className='anchor' href='https://juansesu3.github.io/Block-master-/' target="_blank">Ver Mas Proyectos</Anchor> */}

                        <Grid5 />
                        <br /><br /><br /><br />
                        <Grid6>
                            <div>
                                <Sth2>
                                    Portafolio
                                </Sth2>
                                <Stp>
                                My portfolio,
an intuitive and interactive app that allows showing my most recent projects as a web developer and the technologies I use.
                                </Stp>
                                <br/><br/>  <br/><br/><br/>

                                <Contbu>
                                    <Anchor href='https://github.com/juansesu3/portafolio-oficial' target="_blank">See Code</ Anchor>
                                    <Anchor href='https://portafolio-b0d04.web.app/' target="_blank">See Complete Project</Anchor>
                                </Contbu>

                            </div>
                        </Grid6>

                    </Gridstyle>
                    <center>
                        <Anchor className='anchor' href='https://github.com/juansesu3?tab=repositories' target="_blank">See More Projects</Anchor><br /><br /><br /><br />
                    </center>
                </ScrollContainer>
            </Fontlora>


        </div>
    )
}

export default Projects



