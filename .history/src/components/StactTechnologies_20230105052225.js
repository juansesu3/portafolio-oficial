import React from 'react';
//import { Carousel } from 'react-bootstrap';
import { Container, Tiulo } from '../styles/StackTechnologies.style';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const StactTechnologies = () => {

  const technologies = [
    
      {
        "name": "HTML",
        "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641308993/AmazonasSprint3/abkpvydmce9ueodirytv.png",
        "id": 419704,
        "description": "lorem",
        "url": "Ad Astra"
      },
      {
        "name": "CSS",
        "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641308880/AmazonasSprint3/sjrerjrp6vg0yhegt24y.png",
        "id": 419704,
        "description": "lorem",
        "url": "Ad Astra"
      },
      {
        "name": "JavaScript",
        "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641309100/AmazonasSprint3/v3smgy9jro1ilc19cgku.png",
        "id": 419704,
        "description": "Ad Astra",
        "url": "Ad Astra"
      },
      {
        "name": "React.js",
        "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641309917/AmazonasSprint3/fxwdi8nlwzzofrrxjwi7.png",
        "id": 419704,
        "description": "Ad Astra",
        "url": "Ad Astra"
      },
      {
        "name": "React BootsTrap",
        "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310073/AmazonasSprint3/c8vcghcddfthdvprs3m3.png",
        "id": 419704,
        "description": "Ad Astra",
        "url": "Ad Astra"
      },
      {
        "name": "Styled components",
        "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310662/AmazonasSprint3/lfjst1jgnvcztnzekhpq.png",
        "id": 419704,
        "description": "Ad Astra",
        "url": "Ad Astra"
      },
      {
        "name": 605.149,
        "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310894/AmazonasSprint3/kktnoqi53kghsufwzbzr.png",
        "id": 419704,
        "description": "Ad Astra",
        "url": "Ad Astra"
      },
      {
        "name": 605.149,
        "image": 2649,
        "id": 419704,
        "description": "Ad Astra",
        "url": "Ad Astra"
      },
    ]
  
  return (
    <div>
      <Container>
        <hr />

        <Tiulo>  <h1>
          Technologies<br /> in<br />  which <br /> I have experience
        </h1></Tiulo>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1641308993/AmazonasSprint3/abkpvydmce9ueodirytv.png"
              alt="First slide"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    

      </Container>
    </div>
  )
}

export default StactTechnologies
