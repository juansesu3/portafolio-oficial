import 'bootstrap/dist/css/bootstrap.min.css';
//import Animation from './components/animations/Animation';
import Footer from './components/Footer';
import Formulario from './components/FormularioContac';
import Hero from './components/Hero';
import ButtonFloat from './components/ButtonFloat';
//import NavBar from './components/NavBar';
import Projects from './components/Projects';
//import Servicios from './components/Services';
import StactTechnologies from './components/StactTechnologies';
import Testimonios from './components/Testimonio';


function App() {
  return (
    <div >
      {/*<ButtonFloat/>*/
      <Hero />
      <Projects />
      <StactTechnologies />
      {/* <Servicios/> */}
      <Testimonios />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
