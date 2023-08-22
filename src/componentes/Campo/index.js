//import { useState } from "react";
import "./Campo.css";

const Campo = ( props ) => {
    //const [valor, setValor] = useState("");

    //console.log("Datos: ", props);
    
    console.log(props.type);
    const placeholderModificado = `${props.placeholder}...`;

    //Destructuración
    const {type = "text"} = props;
    //console.log(type);

    const manejarCambio = ( e ) => {
        //console.log("Cambio ", e.target.value);
        props.setValor(e.target.value);
    };

    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo.toUpperCase() }</label>
        <input 
            placeholder={ placeholderModificado } 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;