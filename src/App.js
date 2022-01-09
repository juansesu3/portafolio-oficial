import 'bootstrap/dist/css/bootstrap.min.css';  
import Footer from './components/Footer';
import Formulario from './components/FormularioContac';
import Hero from './components/Hero';

import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Servicios from './components/Services';
import StactTechnologies from './components/StactTechnologies';
import Testimonios from './components/Testimonio';


function App() {
  return (
    <div >
      
      {/* <NavBar/> */}
      <Hero/>
      <Projects/>
      <StactTechnologies/>
      {/* <Servicios/> */}
      <Testimonios/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
