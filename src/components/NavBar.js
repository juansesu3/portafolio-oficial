import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button, Dropdown, DropdownButton, NavDropdown, } from 'react-bootstrap'
import { Link as LinkReact } from 'react-router-dom'
import { app } from '../fb';

import '../styles/Animation.css'

const NavBar = () => {


  const [archivoUrl, setArchivoUrl] = useState([]);

  const [docus, setDocus] = useState([]);

  const archivoHandler = async (e)=> {
    
    e.preventDefault()
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("Archivo cargado:", archivo.name )
    const enlaceUrl = await archivoPath.getDownloadURL(); 
    
    setArchivoUrl(enlaceUrl)

  }
  
  const submitHandler = async (e) => {
    e.preventDefault()

    const nombreArchivo = e.target.nombre.value;
    if(!nombreArchivo){
      alert("Coloca un nombre" )
      return
    }
    const coleccionRef =  app.firestore().collection("archivos");
    const docu = await coleccionRef.doc(nombreArchivo).set({nombre: nombreArchivo, url: archivoUrl});
    console.info("archivo cargado: :", nombreArchivo, "url: ", archivoUrl)



  }

  useEffect(async () =>{
    
    const docusList = await app.firestore().collection("archivos").get();
    setDocus(docusList.docs.map((doc)=> doc.data()));
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

         {(window.screen.width) > 900
         ?(<Navbar bg="dark" expand={false}>
         <Container fluid>
         <Dropdown>
     <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
       Curriculum
     </Dropdown.Toggle>
 
     <Dropdown.Menu  variant="light">
       <Dropdown.Item href="#/action-1" active>
       <Navbar.Brand ><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-b0d04.appspot.com/o/CV%20Juan%20Sebastian%20Suarez%20Ramirez%20Eng.pdf?alt=media&token=49da4a5e-66d3-414e-8f10-e58e17c80455" target="_blank" ><Button variant="secondary">English</Button></a></Navbar.Brand>
       </Dropdown.Item>
       <Dropdown.Item href="#/action-2"> 
       <Navbar.Brand><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-b0d04.appspot.com/o/CV%20Juan%20Sebastian%20Suarez%20Ramirez%20Spa.pdf?alt=media&token=89168263-38c4-4cfa-9cef-f3b33b26d489" target="_blank" ><Button variant="secondary">Spanish</Button></a></Navbar.Brand></Dropdown.Item>
      
     </Dropdown.Menu>
   </Dropdown>
 
           <Navbar.Toggle aria-controls="offcanvasNavbar" />
           <Navbar.Offcanvas
             id="offcanvasNavbar"
             aria-labelledby="offcanvasNavbarLabel"
             placement="end"
           >
             <Offcanvas.Header className="bg-dark"  closeButton>
            
             </Offcanvas.Header>
            
             <Offcanvas.Body className="bg-dark"   >
 
               <Nav   className="justify-content-end flex-grow-1 pe-3 bg-dark">
                 <center>
                   <Nav.Link href="#action1"><LinkReact to="/" style={{ textDecoration: 'none', color:'white'  }} ><h1>Home</h1></LinkReact></Nav.Link>
                   <Nav.Link href="#action2"><LinkReact to="/projects" style={{ textDecoration: 'none', color:'white'  }}><h1>Projects</h1></LinkReact></Nav.Link>
                   <Nav.Link href="#action2"><LinkReact to="/technologies" style={{ textDecoration: 'none', color:'white'  }}><h1>Stack of Technologies</h1></LinkReact></Nav.Link>
                   <Nav.Link href="#action2"><LinkReact to="/testimonials" style={{ textDecoration: 'none', color:'white'  }}><h1>Testimonials</h1></LinkReact></Nav.Link>
                   <Nav.Link href="#action2"><LinkReact to="/contact" style={{ textDecoration: 'none', color:'white' }}><h1>Contact Me</h1></LinkReact></Nav.Link>
                 <Nav.Link href="#action2"><LinkReact to="/footer" style={{ textDecoration: 'none', color:'white' }}><h1>Footer</h1></LinkReact></Nav.Link>
                 </center>

            
               </Nav>
 
             </Offcanvas.Body>
           </Navbar.Offcanvas>
 
         </Container>
       </Navbar>)
         :(<Navbar fixed="top" variant="dark" bg="dark" expand="lg">
         <Container fluid>
         <Dropdown>
         <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
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
             
                  <br/>
                         <Nav.Link href="#action1"><LinkReact to="/" style={{ textDecoration: 'none', color:'white'  }} ><h1>Home</h1></LinkReact></Nav.Link>
                         <Nav.Link href="#action2"><LinkReact to="/projects" style={{ textDecoration: 'none', color:'white'  }}><h1>Projects</h1></LinkReact></Nav.Link>
                         <Nav.Link href="#action2"><LinkReact to="/technologies" style={{ textDecoration: 'none', color:'white'  }}><h1>Stack of Technologies</h1></LinkReact></Nav.Link>
                         <Nav.Link href="#action2"><LinkReact to="/testimonials" style={{ textDecoration: 'none', color:'white'  }}><h1>Testimonials</h1></LinkReact></Nav.Link>
                         <Nav.Link href="#action2"><LinkReact to="/contact" style={{ textDecoration: 'none', color:'white' }}><h1>Contact Me</h1></LinkReact></Nav.Link>
                         <Nav.Link href="#action2"><LinkReact to="/footer" style={{ textDecoration: 'none', color:'white' }}><h1>Footer</h1></LinkReact></Nav.Link>
                         </center>
               
             </Nav>
           </Navbar.Collapse>
         
         </Container>
       </Navbar>
       )}
{/* <Navbar fixed="top" variant="dark" bg="dark" expand="lg">
  <Container fluid>
  <Dropdown>
  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
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
      
           <br/>
                  <Nav.Link href="#action1"><LinkReact to="/" style={{ textDecoration: 'none', color:'white'  }} ><h1>Home</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/projects" style={{ textDecoration: 'none', color:'white'  }}><h1>Projects</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/technologies" style={{ textDecoration: 'none', color:'white'  }}><h1>Stack of Technologies</h1></LinkReact></Nav.Link>

                  <Nav.Link href="#action2"><LinkReact to="/testimonials" style={{ textDecoration: 'none', color:'white'  }}><h1>Testimonials</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/animation" style={{ textDecoration: 'none', color:'white' }}><h1>Animation</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/contact" style={{ textDecoration: 'none', color:'white' }}><h1>Contact Me</h1></LinkReact></Nav.Link>
                  </center>
        
      </Nav>
    </Navbar.Collapse>
  
  </Container>
</Navbar> */}

{/* 
      <Navbar bg="light" expand={false}>
        <Container fluid>
        <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
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

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header className="bg-dark"  closeButton>
           
            </Offcanvas.Header>
           
            <Offcanvas.Body className="bg-dark"   >

              <Nav   className="justify-content-end flex-grow-1 pe-3 bg-dark">
                <center>
                  <Nav.Link href="#action1"><LinkReact to="/" style={{ textDecoration: 'none', color:'white'  }} ><h1>Home</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/projects" style={{ textDecoration: 'none', color:'white'  }}><h1>Projects</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/technologies" style={{ textDecoration: 'none', color:'white'  }}><h1>Stack of Technologies</h1></LinkReact></Nav.Link>

                  <Nav.Link href="#action2"><LinkReact to="/testimonials" style={{ textDecoration: 'none', color:'white'  }}><h1>Testimonials</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/animation" style={{ textDecoration: 'none', color:'white' }}><h1>Animation</h1></LinkReact></Nav.Link>
                  <Nav.Link href="#action2"><LinkReact to="/contact" style={{ textDecoration: 'none', color:'white' }}><h1>Contact Me</h1></LinkReact></Nav.Link>
                </center>
           
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar> */}
    </div>
  )
}

export default NavBar
