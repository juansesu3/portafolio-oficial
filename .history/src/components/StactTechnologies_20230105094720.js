import React from 'react';
//import { Carousel } from 'react-bootstrap';
import { Container, Tiulo, SubContainer, ASC } from '../styles/StackTechnologies.style';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const StactTechnologies = () => {

  const technologies = [

    {
      "name": "HTML",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641308993/AmazonasSprint3/abkpvydmce9ueodirytv.png",
      "id": 419704,
      "description": "lorem",
      "urlToLearning": "https://www.w3schools.com/html/"
    },
    {
      "name": "CSS",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641308880/AmazonasSprint3/sjrerjrp6vg0yhegt24y.png",
      "id": 419704,
      "description": "lorem",
      "urlToLearning": "https://www.w3schools.com/css/default.asp"
    },
    {
      "name": "JavaScript",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672923022/AmazonasSprint3/v3smgy9jro1ilc19cgku_1_m5lk8q.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "https://www.w3schools.com/js/default.asp"
    },
    {
      "name": "React.js",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641309917/AmazonasSprint3/fxwdi8nlwzzofrrxjwi7.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "Ad Astra"
    },
    {
      "name": "React BootsTrap",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310073/AmazonasSprint3/c8vcghcddfthdvprs3m3.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "https://www.w3schools.com/react/default.asp"
    },
    {
      "name": "Styled components",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310662/AmazonasSprint3/lfjst1jgnvcztnzekhpq.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "https://styled-components.com/docs"
    },
    {
      "name": "Chakra",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310894/AmazonasSprint3/kktnoqi53kghsufwzbzr.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "https://chakra-ui.com/getting-started"
    },
    {
      "name": "Material UI",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672920762/mu_bkqqon.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "Ad Astra"
    },
    {
      "name": "React Router",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641311438/AmazonasSprint3/ngkuxlxzafatotsanp22.jpg",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "Ad Astra"
    },
    {
      "name": "Redux",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641313364/AmazonasSprint3/okpa5a7e4s1c5ztakzmb.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "Ad Astra"
    },
    {
      "name": "Jest",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672920646/jest2_smmq3z.jpg",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "Ad Astra"
    },
    {
      "name": "FireBase",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672920994/firebaseVer_wamu01.png",
      "id": 419704,
      "description": "Ad Astra",
      "urlToLearning": "Ad Astra"
    },

  ]

  return (
    <div>
      <Container>
        <hr />
        <Tiulo>  <h1>
          Technologies<br /> in<br />  which <br /> I have experience
        </h1></Tiulo>

        <SubContainer>
          {
            technologies.map((tech) => {
              return (

                <Card style={{ width: '18rem', margin:'1rem' }}>
                  <Card.Img variant="top" src={tech.image}
                    alt="First slide" />
                  <Card.Body>
                    <Card.Title>{tech.name}</Card.Title>
              
                    <Button><ASC href={tech.urlToLearning} >Learn it</ASC></Button>
                  </Card.Body>
                </Card>
              );          })}
        </SubContainer>

      </Container>
    </div>
  )
}

export default StactTechnologies
