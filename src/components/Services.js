import { Contser, Gridb1, Gridb2, Gridb3, Gridb4, Stlh4, Stlh5, Stylbt, Stylpr } from "../styles/Services.style"



const Servicios = () => {
    return (
        <div>
             <Contser>{/* -start Contenedor */}
                    <Gridb1>
                        <Stlh4>Servicios</Stlh4>
                    </Gridb1>

                    <Gridb2>                    
                        <Stlh5>Diseño</Stlh5>
                        <Stylpr>Experiencia de Usuario</Stylpr>
                        <Stylpr>Interfaz de Usuario </Stylpr>
                        <Stylpr>Aplicaciones Web</Stylpr>
                        <Stylpr>Prueba de Concepto</Stylpr>
                        <Stylbt>Ver servicios de diseño</Stylbt>
                    </Gridb2>

                    <Gridb3>
                    <Stlh5>Desarrollo</Stlh5>
                        <Stylpr>Aplicaciones Moviles</Stylpr>
                        <Stylpr>Sitios Web</Stylpr>
                        <Stylpr>Aplicaciones Web Progresivas</Stylpr>
                        <Stylbt>Ver servicios de desarrollo</Stylbt>
                    </Gridb3>

                    <Gridb4>
                        {/* <Stlh5>Marca</Stlh5>
                        <Stylpr>Identidad de la Marca</Stylpr>
                        <Stylpr>Estrategia de Marca</Stylpr>
                        <Stylbt>Ver servicios de Marca</Stylbt> */}
                    </Gridb4>
                
                </Contser>{/* Contenedor  end-*/}

        </div>
    )
}

export default Servicios