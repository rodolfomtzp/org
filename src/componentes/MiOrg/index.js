import { useState } from "react";
import "./MiOrg.css";

const MiOrg = ( props ) => {
    //Estado - hooks
    //usestate
    //useState()

    console.log(useState());

    console.log( props );

    //const [nombreVariable, funcionActualiza] = useState(valorInicial);
    //const [nombre, actualizarNombre] = useState("Rodolfo");

//    const [mostrar, actualizarMostrar] = useState( true )

//    const manejarClic = () => {
//        console.log("Mostrar/Ocultar elemento", !mostrar);
//        actualizarMostrar( !mostrar );
//    }

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/boton-add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;