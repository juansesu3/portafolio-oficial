
import React, { useState } from "react";
import { Grid1conct, Grid2conct, Grid3conct, Grid41conct*/, Grid4conct, Grid5conct, Grid6conct, Gridabuelo, Gridpapa, Stylebtnn, Styleinput, Styletextaa } from "../styles/FormularioContac.style";

import '../styles/Animation.css'
import emailjs from 'emailjs-com'

const Formulario = () => {

   
    function sendEmail(e) {

        e.preventDefault();
        emailjs.sendForm('service_i0ag3i8', 'template_8vchtw9',e.target,'user_OCjVRCIigN0Fd76PDUpv8'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        alert("Your message was sent")
        
    }
    return (
        <div>
            <center>
                <Gridabuelo>
                    <Gridpapa onSubmit={sendEmail} >
                        <Grid1conct>
                            <h1>Contact<br /> Me</h1>
                        </Grid1conct>
                        <Grid2conct>
                            <p>I would love to be part of your development team.
                                Remember it<br/> "<strong className="color">UNION MAKE FORCE</strong>"<br/>
                                contact me and let's talk.</p>
                        </Grid2conct>
                        <Grid3conct>
                            <Styleinput
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Complet Name" />
                        </Grid3conct>
                        <Grid4conct>
                            <Styleinput
                                type="email"
                                id="email"
                                name="user_email"                          
                                placeholder="Email" />
                        </Grid4conct>
                        <Grid5conct>
                            <Styletextaa
                                name="message"
                                id="mensage"
                                cols="30" rows="10"
                                placeholder="Message"
                            ></Styletextaa>
                        </Grid5conct>
                        <Grid6conct>
                            <Stylebtnn type="submit"  />
                        </Grid6conct>
                    </Gridpapa >
                </Gridabuelo>
            </center>
        </div>
    )
}

export default Formulario
