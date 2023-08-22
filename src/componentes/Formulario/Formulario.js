import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("Programación");

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = ( e ) => {
        e.preventDefault();
        //console.log("Manejar envío", e);

        let datosAEnviar = {
            nombre : nombre,
            puesto : puesto,
            foto : foto,
            equipo : equipo
        }

        registrarColaborador( datosAEnviar );
        //console.log(datosAEnviar);
    }

    const manejarNuevoEquipo = ( e ) => {
        e.preventDefault();
        console.log(titulo, color)

        crearEquipo( { titulo, colorPrimario : color} );
        //console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo = "Nombre" 
                placeholder="Ingresa tu nombre" 
                required 
                valor={nombre} 
                setValor={setNombre} 
            />
            <Campo 
                titulo = "Puesto" 
                placeholder="Ingresa tu puesto" 
                required
                valor={puesto} 
                setValor={setPuesto}  
            />
            <Campo 
                titulo = "Foto" 
                placeholder="Ingresa el enlace de tu foto" 
                required
                valor={foto} 
                setValor={setFoto}  
            />
            <ListaOpciones  
                valor={equipo}
                setEquipo = {setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo = "Titulo" 
                placeholder="Ingresa titulo" 
                required 
                valor={titulo}
                setValor={setTitulo} 
            />
            <Campo 
                titulo = "Color" 
                placeholder="Ingresa el color en hexadecimal" 
                required
                valor={color} 
                setValor={setColor}
                type="color"  
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario;