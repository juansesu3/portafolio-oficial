import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap'
import { Link as LinkReact } from 'react-router-dom'
import { app } from '../fb';
import '../styles/Animation.css'
import '../styles/NavBar.css'


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
    <div>

      {/* <form onSubmit={submitHandler}>
           <input type="file"  onChange={archivoHandler}/>
           <input type="text" name="nombre" placeholder="nombra tu archivo"/>
           <button>Enviar</button>
           
         </form> */}

      {(window.screen.width) > 991
        ? (<Navbar fixed="top" className='style-nav' expand={false}>
          <Container fluid>
          <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" className='btn-cv'>
                Curriculum
              </Dropdown.Toggle>
              <Dropdown.Menu variant="light">
                <Dropdown.Item href="#/action-1" active>
                  <Navbar.Brand ><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-b0d04.appspot.com/o/CV%20Juan%20Sebastian%20Suarez%20Ramirez%20Eng.pdf?alt=media&token=c3f47660-d109-4ab0-9356-558c2e2f04bd" target="_blank" ><Button variant="secondary">English</Button></a></Navbar.Brand>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Navbar.Brand><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-b0d04.appspot.com/o/CV%20Juan%20Sebastian%20Suarez%20Ramirez%20Esp.pdf?alt=media&token=2d79df42-53da-4eca-9545-730d23f8f85d" target="_blank" ><Button variant="secondary">Spanish</Button></a></Navbar.Brand></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>


            <LinkReact to="/" className='link' >Home</LinkReact>
            <LinkReact to="/projects" className='link'>Projects</LinkReact>
            {/* <LinkReact to="/animation" className='link'>Animation</LinkReact> */}
            <LinkReact to="/technologies" className='link'>Stack of Technologies</LinkReact>
            <LinkReact to="/testimonials" className='link'>Testimonials</LinkReact>
            <LinkReact to="/contact" className='link'>Contact Me</LinkReact>
            <LinkReact to="/footer" className='link'>Footer</LinkReact>
           
            <img className='image-logo-selfbrand' src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1643217212/AmazonasSprint3/bqsbcwcmpvmidtceuozr.png" />

          </Container>
        </Navbar>)
        : (<Navbar fixed="top" className='style-nav' expand="lg">
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
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav><center>

                <br />
                <Nav.Link href="#action1"><LinkReact to="/" style={{ textDecoration: 'none', color: 'white' }} ><h1>Home</h1></LinkReact></Nav.Link>
                <Nav.Link href="#action2"><LinkReact to="/projects" style={{ textDecoration: 'none', color: 'white' }}><h1>Projects</h1></LinkReact></Nav.Link>
                {/* <Nav.Link href="#action2"><LinkReact to="/animation" style={{ textDecoration: 'none', color: 'white' }}><h1>Animation</h1></LinkReact></Nav.Link> */}
                <Nav.Link href="#action2"><LinkReact to="/technologies" style={{ textDecoration: 'none', color: 'white' }}><h1>Stack of Technologies</h1></LinkReact></Nav.Link>
                <Nav.Link href="#action2"><LinkReact to="/testimonials" style={{ textDecoration: 'none', color: 'white' }}><h1>Testimonials</h1></LinkReact></Nav.Link>
                <Nav.Link href="#action2"><LinkReact to="/contact" style={{ textDecoration: 'none', color: 'white' }}><h1>Contact Me</h1></LinkReact></Nav.Link>
                <Nav.Link href="#action2"><LinkReact to="/footer" style={{ textDecoration: 'none', color: 'white' }}><h1>Footer</h1></LinkReact></Nav.Link>
              </center>

              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
        )}
    
    </div>
  )
}

export default NavBar
