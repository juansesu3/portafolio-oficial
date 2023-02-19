import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Animator, MoveIn, ScrollPage, ScrollContainer } from 'react-scroll-motion'
import { ContProjetc, Anchor,  Fontlora, Textstyle, Tittle } from '../styles/Projects.styles'
import Animation from './animations/Animation'
import Button from 'react-bootstrap/Button';
import { ASC } from '../styles/StackTechnologies.style'
import '../styles/Animation.css'
import { Ic } from '../styles/Hero.style'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const Projects = () => {


    const proyects = [


        {
            "id": 1,
            "nameProyect": "Cv App",
            "imageProyect": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1636298420/l6wmsgodsiup2wnktjxi.png",
            "shortDescription": " An application with the ability to create professional resume through a practical and friendly intuitive interface. This project was developed together with a development team from the Geek Academy BootCamp.",
            "urlCode": "https://github.com/Juanpabedoyav/Demo-Day.git",
            "urlDeploy": "https://cvapp-573c8.web.app/"

        },

        {
            "id": 2,
            "nameProyect": "Block Master",
            "imageProyect": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1636298420/l6wmsgodsiup2wnktjxi.png",
            "shortDescription": " Block Master is the most recent content platform on the market but at the same time the most powerful. Discover all its functions in this great design project.",
            "urlCode": "https://github.com/juansesu3/Bloack-Master",
            "urlDeploy": "https://juansesu3.github.io/Bloack-Master/"

        },
        {
            "id": 3,
            "nameProyect": "Portfolio",
            "imageProyect": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641676927/AmazonasSprint3/lztkiypzyx4oucvria9o.png",
            "shortDescription": "My portfolio, an intuitive and interactive app that allows showing my most recent projects as a web developer and the technologies I use.",
            "urlCode": "https://github.com/juansesu3/portafolio-oficial",
            "urlDeploy": "https://juanser.netlify.app/"

        },
        {
            "id": 4,
            "nameProyect": "Pokemon Evo",
            "imageProyect": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641676927/AmazonasSprint3/lztkiypzyx4oucvria9o.png",
            "shortDescription": "Here you can see the ovelutions of the pokemons",
            "urlCode": "https://github.com/juansesu3/evoluciones-pokemon",
            "urlDeploy": "https://pokemon-evol.netlify.app"

        }
    ]


    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4)
    };

    return (
        <div>
            <Fontlora>
                <ScrollContainer>
                    <div className='altura'>
                        <ScrollPage style={{ height: "450px" }} page={3}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100%" }} >
                                <span  >
                                    <Animator animation={MoveIn(-1000, 0)}> <Tittle>
                                        <span className='font-style3'>It looks like magic,
                                            works with code.</span>
                                    </Tittle></Animator>
                                    <Animator animation={MoveIn(1000, 0)}>  <Textstyle>
                                        <span className='font-style2' >Throughout my career as Fronted, I have had the privilege of working on incredible and challenging projects.</span >
                                    </Textstyle></Animator>
                                    <Animator animation={MoveIn(-1000, 0)}>  <Textstyle>
                                        <center>
                                            <br /><Animation /><FontAwesomeIcon /></center>
                                    </Textstyle></Animator>
                                    <Animator animation={MoveIn(1000, 0)}>  <Textstyle>
                                        <center>
                                            <Ic>
                                                <FontAwesomeIcon icon={faArrowDown} /></Ic></center>

                                    </Textstyle></Animator>
                                </span>
                            </div>
                        </ScrollPage>
                    </div>
                    {proyects.map((project) => (
                        <Card key={project.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={project.imageProyect} />
                            <Card.Body>
                                <Card.Title>{project.nameProyect}</Card.Title>
                                <Card.Text>
                                {project.shortDescription}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={project.urlCode}>Card Link</Card.Link>
                                <Card.Link href={project.urlDeploy}>Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    ))}
                    <center>
                        <Anchor className='anchor' href='https://github.com/juansesu3?tab=repositories' target="_blank">See More Projects</Anchor><br /><br /><br /><br />
                    </center>
                </ScrollContainer>
            </Fontlora>


        </div>
    )
}

export default Projects





