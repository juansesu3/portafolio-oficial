
import React, {useState} from "react";
import { Grid1conct, Grid2conct, Grid3conct, Grid4conct, Grid5conct, Grid6conct, Gridabuelo, Gridpapa, Stylebtnn, Styleinput, Styletextaa } from "../styles/FormularioContac.style";



const Formulario = () => {

const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [mensage, setMensage] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
   alert("El formualario se ha enviado ")
}
    return (
        <div>
            <center>
    <Gridabuelo>{/* Grid abuelo  */}
                     <Gridpapa onSubmit={handleSubmit} >{/* Grid papa  */}

                            
                         <Grid1conct>
                             <h1>Contacto</h1>
                         </Grid1conct>



                         <Grid2conct>
                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quod ab excepturi nulla illo. Odit!</p>

                         </Grid2conct>

                        
                         <Grid3conct>
                             
                              <Styleinput 
                              type="text" 
                              id="name"
                              name="nombre"
                              value={nombre}
                              onChange={(e) => setNombre(e.target.value)}
                              placeholder="Nombre Completo" />
                              
                         </Grid3conct>


                         <Grid4conct>
                             <Styleinput 
                             type="text"
                             id="email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                              placeholder="Correo Electronico" />
                         </Grid4conct>


                         <Grid5conct>
                             <Styletextaa 
                             name="mensaje" 
                             id="mensage"
                             value={mensage}
                              cols="30" rows="10" 
                              placeholder="Mensaje"
                              onChange={(e) => setMensage(e.target.value)} 
                              ></Styletextaa>
                         </Grid5conct>


                         <Grid6conct>
                             <Stylebtnn type="submit"/>
                             
                         </Grid6conct>
                         

                     </Gridpapa >
             </Gridabuelo>
             </center>
        </div>
    )
}

export default Formulario
