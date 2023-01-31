import React, { useState } from 'react';
//import { Carousel } from 'react-bootstrap';
import { Container, Tiulo, SubContainer, ASC } from '../styles/StackTechnologies.style';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const StactTechnologies = () => {

  const technologies = [

    {
      "name": "HTML",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641308993/AmazonasSprint3/abkpvydmce9ueodirytv.png",
      "idTech": 12,
      "description": "lorem",
      "urlToLearning": "https://www.w3schools.com/html/"
    },
    {
      "name": "CSS",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641308880/AmazonasSprint3/sjrerjrp6vg0yhegt24y.png",
      "idTech": 123,
      "description": "lorem",
      "urlToLearning": "https://www.w3schools.com/css/default.asp"
    },
    {
      "name": "JavaScript",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672923022/AmazonasSprint3/v3smgy9jro1ilc19cgku_1_m5lk8q.png",
      "idTech": 1235,
      "description": "Ad Astra",
      "urlToLearning": "https://www.w3schools.com/js/default.asp"
    },
    {
      "name": "React.js",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641309917/AmazonasSprint3/fxwdi8nlwzzofrrxjwi7.png",
      "idTech": 12358,
      "description": "Ad Astra",
      "urlToLearning": "https://www.w3schools.com/react/default.asp"
    },
    {
      "name": "React Router",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641311438/AmazonasSprint3/ngkuxlxzafatotsanp22.jpg",
      "idTech": 123581321345589,
      "description": "Ad Astra",
      "urlToLearning": "https://reactrouter.com/en/main"
    },
    {
      "name": "Redux",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641313364/AmazonasSprint3/okpa5a7e4s1c5ztakzmb.png",
      "idTech": 123581321345589144,
      "description": "Ad Astra",
      "urlToLearning": "https://redux.js.org/introduction/getting-started"
    },
    {
      "name": "Git",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1673004448/AmazonasSprint3/logo_git_icon_loi4nm.png",
      "idTech": 123581321345589144233377610,
      "description": "Ad Astra",
      "urlToLearning": "https://git-scm.com/doc"
    },
    {
      "name": "GitHub",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1673004529/AmazonasSprint3/Octicons-mark-github.svg_mjbbsn.png",
      "idTech": 123581321345589144233377610987,
      "description": "Ad Astra",
      "urlToLearning": "https://skills.github.com/"
    },
    {
      "name": "React BootsTrap",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310073/AmazonasSprint3/c8vcghcddfthdvprs3m3.png",
      "idTech": 1235813,
      "description": "Ad Astra",
      "urlToLearning": "https://react-bootstrap.github.io/getting-started/introduction"
    },
    {
      "name": "Styled components",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310662/AmazonasSprint3/lfjst1jgnvcztnzekhpq.png",
      "idTech": 123581321,
      "description": "Ad Astra",
      "urlToLearning": "https://styled-components.com/docs"
    },

    {
      "name": "Chakra",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641310894/AmazonasSprint3/kktnoqi53kghsufwzbzr.png",
      "idTech": 12358132134,
      "description": "Ad Astra",
      "urlToLearning": "https://chakra-ui.com/getting-started"
    },
    {
      "name": "Material UI",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672920762/mu_bkqqon.png",
      "idTech": 1235813213455,
      "description": "Ad Astra",
      "urlToLearning": "https://mui.com/material-ui/material-icons/"
    },

    {
      "name": "Jest",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672920646/jest2_smmq3z.jpg",
      "idTech": 123581321345589144233,
      "description": "Ad Astra",
      "urlToLearning": "https://jestjs.io/docs/getting-started"
    },
    {
      "name": "FireBase",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1672920994/firebaseVer_wamu01.png",
      "idTech": 123581321345589144233377,
      "description": "Ad Astra",
      "urlToLearning": "https://firebase.google.com/docs?authuser=1&hl=es"
    },

    {
      "name": "Cloudinary",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1673004922/AmazonasSprint3/1_7CrSGB37vYF6kWga4PbJGA_vgsdlc.png",
      "idTech": 1235813213455891442333776109871597,
      "description": "Ad Astra",
      "urlToLearning": "https://cloudinary.com/documentation/tutorial_screencasts"
    },
    {
      "name": "Waka Time",
      "image": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1673008480/AmazonasSprint3/image_processing20210621-16554-qk81sp_v6ogz4.png",
      "idTech": 12358132134558914423337761098715972584,
      "description": "Ad Astra",
      "urlToLearning": "https://wakatime.com/education"
    },

  ]

  const [visible, setVisible] = useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4)
  };

  /*  useEffect(() => {
 
       console.log("fase de montage")
 
   }, []);
 */

  return (
    <div style={{ backgroundColor: "#1d1d1d" }}>
      <Container>
        <hr />
        <Tiulo style={{ backgroundColor: "#1d1d1d" }}>  <h1>
          Technologies<br /> in<br />  which <br /> I have experience
        </h1></Tiulo>

        <SubContainer>
          {
            technologies.slice(0, visible).map((tech) => {
              return (

                <Card key={tech.idTech} style={{ width: '18rem', margin: '1rem' }}>
                  <Card.Img variant="top" src={tech.image}
                    alt="First slide" />
                  <Card.Body style={{
                    backgroundColor: "#181818",
                    borderLeft: "#08fdd8 1px solid",
                    borderRight: "#08fdd8 1px solid",
                    borderBottom: "#08fdd8 1px solid",
                    borderBottomLeftRadius: " 6px",
                    borderBottomRightRadius: " 6px"

                  }}>
                    <Card.Title style={{ color: "white", }}>{tech.name}</Card.Title>

                    <Button style={{ backgroundColor: "#08fdd8",  }}  ><ASC href={tech.urlToLearning} target="_blank" >Learn it</ASC></Button>
                  </Card.Body>
                </Card>
              );
            })}


        </SubContainer>

      </Container>
      <br /><br /><br />
      <center><Button style={{ backgroundColor: "#08fdd8", }} onClick={showMoreItems}><ASC  target="_blank" >Show More Technologies</ASC></Button></center>
    </div>
  )
}

export default StactTechnologies
