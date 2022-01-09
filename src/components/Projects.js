import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Anchor, Butt1, Butt2, Contbu, Fontlora, Grid1, Grid2, Grid3, Grid4, Grid5, Grid6, Gridstyle, Sth2, Stp, Textstyle, Tittle } from '../styles/Projects.styles'






const Projects = () => {
    return (
        <div>

            <Fontlora>

                <Tittle>
                    <p >It looks like magic<br />
                        works with code.</p>
                </Tittle>

                <Textstyle>
                    <p>Throughout my career as Fronted, I have had the privilege of working on incredible and challenging projects.</p>
                </Textstyle>

                <Gridstyle>

                    <Grid1 />
                    <Grid2>

                        <div>
                            <Sth2>
                                Cv App
                            </Sth2>
                            <Stp>
                                Una aplicacion con la capacidad de crear curriculum vitae atravez de una interfaz intuitiva practica y amigable.
                                este proyecto fue desarrollado como proyecto final del bootcamo de academia Geek
                            </Stp>
                            <Contbu>
                            <Anchor href='https://github.com/Juanpabedoyav/Demo-Day.git' target="_blank">Ver codigo</ Anchor>
                            <Anchor  href='https://cvapp-573c8.web.app/' target="_blank">Ver proyecto completo </Anchor>
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
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minima nihil vitae sit dolorum natus iste fugit aliquam dicta. Eveniet officiis officia fugit! Nemo dolore natus itaque minima, aliquam inventore.
                            </Stp>

                            <Contbu>
                            <Anchor  href='https://github.com/juansesu3/Block-master-.git' target="_blank">Ver codigo</ Anchor>
                            <Anchor  href='https://juansesu3.github.io/Block-master-/' target="_blank">Ver proyecto completo</Anchor>
                            </Contbu>

                        </div>
                    </Grid4>

                    

                    {/* <Anchor className='anchor' href='https://juansesu3.github.io/Block-master-/' target="_blank">Ver Mas Proyectos</Anchor> */}

                    <Grid5/>

                     <Grid6>
                     <div>
                            <Sth2>
                                Portafolio
                            </Sth2>
                            <Stp>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minima nihil vitae sit dolorum natus iste fugit aliquam dicta. Eveniet officiis officia fugit! Nemo dolore natus itaque minima, aliquam inventore.
                            </Stp>

                            <Contbu>
                            <Anchor  href='https://github.com/juansesu3/Block-master-.git' target="_blank">Ver codigo</ Anchor>
                            <Anchor  href='https://portafolio-b0d04.web.app/' target="_blank">Ver proyecto completo</Anchor>
                            </Contbu>

                        </div>
                         </Grid6> 

                </Gridstyle>
                <center>
                <Anchor className='anchor' href='https://github.com/juansesu3?tab=repositories' target="_blank">Ver Mas Proyectos</Anchor><br/><br/><br/><br/>
                </center>
            </Fontlora>


        </div>
    )
}

export default Projects



