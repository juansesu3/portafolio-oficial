import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap'
import { Link as LinkReact } from 'react-router-dom'
import { app } from '../fb';
import '../styles/Animation.css'
import '../styles/NavBar.css'
import NavScrollExample from '../components/NavbarDos'


import Form from 'react-bootstrap/Form';


import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {

  const [archivoUrl, setArchivoUrl] = useState([]);
  const [docus, setDocus] = useState([]);
  const archivoHandler = async (e) => {
    e.preventDefault()
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("Archivo cargado:", archivo.name)
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const nombreArchivo = e.target.nombre.value;
    if (!nombreArchivo) {
      alert("Coloca un nombre")
      return
    }
    const coleccionRef = app.firestore().collection("archivos");
    const docu = await coleccionRef.doc(nombreArchivo).set({ nombre: nombreArchivo, url: archivoUrl });
    console.info("archivo cargado: :", nombreArchivo, "url: ", archivoUrl)



  }

  useEffect(async () => {
    const docusList = await app.firestore().collection("archivos").get();
    setDocus(docusList.docs.map((doc) => doc.data()));
    // console.log(docusList);
  }, [])
  console.log(window.screen.width);

  return (
    <Navbar style={{ backgroundColor: '#000b53'}}  expand="lg">
      <Container fluid>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" className='btn-cv'>
            Curriculum
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>
              <Navbar.Brand><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-b0d04.appspot.com/o/CV%20Juan%20Sebastian%20Suarez%20Ramirez%20(3).pdf?alt=media&token=8fa06e58-4d9e-427a-9293-0a050da34e05" target="_blank" download="CV Juan Sebastian Suarez Ramirez" ><Button variant="secondary">English</Button></a></Navbar.Brand>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <Navbar.Brand><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-b0d04.appspot.com/o/CV%20Juan%20Sebastian%20Suarez%20Ramirez%20(4).pdf?alt=media&token=d779eac8-360c-4628-9419-077d4d7b74c4" target="_blank" download="CV Juan Sebastian Suarez Ramirez" ><Button variant="secondary">Spanish</Button></a></Navbar.Brand></Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><LinkReact to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</LinkReact></Nav.Link>
            <Nav.Link href="#action2">
          <LinkReact to="/projects" style={{ textDecoration: 'none', color: 'white' }}>Projects</LinkReact>
        </Nav.Link>
        {/* <Nav.Link href="#action2"><LinkReact to="/animation" style={{ textDecoration: 'none', color: 'white' }}><h1>Animation</h1></LinkReact></Nav.Link> */}
        <Nav.Link href="#action2">
          <LinkReact to="/technologies" style={{ textDecoration: 'none', color: 'white' }}>Stack of Technologies</LinkReact>
        </Nav.Link>
        <Nav.Link href="#action2">
          <LinkReact to="/testimonials" style={{ textDecoration: 'none', color: 'white' }}>Testimonials</LinkReact>
        </Nav.Link>
        <Nav.Link href="#action2">
          <LinkReact to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact Me</LinkReact>
        </Nav.Link>
        <Nav.Link href="#action2">
          <LinkReact to="/footer" style={{ textDecoration: 'none', color: 'white' }}>Footer</LinkReact>
        </Nav.Link>
           
          
          </Nav>
         
        </Navbar.Collapse>




   
       

      </Container>
    </Navbar>
  )
}

export default NavBar
