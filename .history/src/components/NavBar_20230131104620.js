import React, { /* useEffect, useState */ } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap'
import { Link as LinkReact } from 'react-router-dom'
//import { app } from '../fb';
import '../styles/Animation.css'
import '../styles/NavBar.css'
//import NavScrollExample from '../components/NavbarDos'
//import Form from 'react-bootstrap/Form';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
//import CloseButton from 'react-bootstrap/CloseButton'


function OffcanvasExample() {
  //const [archivoUrl, setArchivoUrl] = useState([]);
  //const [docus, setDocus] = useState([]);
  /*const archivoHandler = async (e) => {
    e.preventDefault()
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("Archivo cargado:", archivo.name)
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl)
  }*/

  /*const submitHandler = async (e) => {
    e.preventDefault()
    const nombreArchivo = e.target.nombre.value;
    if (!nombreArchivo) {
      alert("Coloca un nombre")
      return
    }
    const coleccionRef = app.firestore().collection("archivos");
    const docu = await coleccionRef.doc(nombreArchivo).set({ nombre: nombreArchivo, url: archivoUrl });
    console.info("archivo cargado: :", nombreArchivo, "url: ", archivoUrl)
  }*/
  /*
  useEffect(async () => {
    const docusList = await app.firestore().collection("archivos").get();
    setDocus(docusList.docs.map((doc) => doc.data()));
    // console.log(docusList);
  }, [])
  console.log(window.screen.width);
  */

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} style={{ backgroundColor: '#181818' }} expand={expand} className="mb-3">
          <Container fluid>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" className='btn-cv'>
                Curriculum
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  <Navbar.Brand><a target="_blank" rel="noreferrer" href="https://firebasestorage.googleapis.com/v0/b/portafolio-b0d04.appspot.com/o/CV%20Juan%20Sebastian%20Suarez%20Ramirez%20Eng.pdf?alt=media&token=45cc9ae3-50cf-41ad-aa52-23f2f3932f99" download="CV Juan Sebastian Suarez Ramirez" ><Button variant="secondary">English</Button></a></Navbar.Brand>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Navbar.Brand><a target="_blank" rel="noreferrer" href="d2c65-a2b8-4ff1-b42a-278df9d2f8ea" download="CV Juan Sebastian Suarez Ramirez" ><Button variant="secondary">Spanish</Button></a></Navbar.Brand></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
            
              <Offcanvas.Header style={{  backgroundColor: '#181818', color: 'white' }} closeButton closeVariant='white'>
                
              <Offcanvas.Title style={{ textAlign: 'center', color: '#08fdd8' }} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1>MENU</h1>
                </Offcanvas.Title>

              </Offcanvas.Header>
              <Offcanvas.Body style={{ textAlign: 'center', backgroundColor: '#1d1d1d' }}  >
                <Nav className=" flex-grow-1 pe-3">
                  <Nav.Link href="#action1" ><LinkReact to="/" class="nav-text" >Home</LinkReact></Nav.Link>
                  <br />
                  <Nav.Link href="#action2">
                    <LinkReact to="/projects" class="nav-text">Projects</LinkReact>
                  </Nav.Link>
                  {/* <Nav.Link href="#action2"><LinkReact to="/animation" style={{ textDecoration: 'none', color: 'white' }}><h1>Animation</h1></LinkReact></Nav.Link> */}
                  <br />
                  <Nav.Link href="#action2" >
                    <LinkReact to="/technologies" class="nav-text">Stack of Technologies</LinkReact>
                  </Nav.Link>
                  <br />
                  <Nav.Link href="#action2">
                    <LinkReact to="/testimonials" class="nav-text">Testimonials</LinkReact>
                  </Nav.Link>
                  <br />
                  <Nav.Link href="#action2">
                    <LinkReact to="/contact" class="nav-text">Contact Me</LinkReact>
                  </Nav.Link>
                  <br />
                  <Nav.Link href="#action2">
                    <LinkReact to="/footer" class="nav-text">Footer</LinkReact>
                  </Nav.Link>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;



