import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

//console.log(Header);

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState( false );
  const [colaboradores, setColaboradores] = useState([{
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/rodolfomtzp.png",
      nombre: "Rodolfo Martínez",
      puesto: "Instructor",
      fav: true
    },
  
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
  ]);

  const [equipos, setEquipos] = useState(
    [
      {
        id: uuidv4(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuidv4(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuidv4(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuidv4(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuidv4(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuidv4(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FFBA29",
        colorSecundario: "#FFEEDF"
      }
  ]
  )

  //console.log(uuidv4);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra 


  const cambiarMostrar = () => {
    actualizarMostrar( !mostrarFormulario );
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador);

    //Spread operator
    setColaboradores( [...colaboradores, colaborador] );
  }

  //Eliminar colaborador
  const eliminarColaborador = ( id ) => {
    console.log("Eliminar colaborador: ", id);
    const nuevosColaboradores = 
      colaboradores.filter((colaborador) => {

       return colaborador.id !== id });
    
    console.log(nuevosColaboradores);
    setColaboradores( nuevosColaboradores );
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    //console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo;
    })

    setEquipos(equiposActualizados);
  }

  //Crear Equipo
  const crearEquipo = ( nuevoEquipo ) => {
    console.log( nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuidv4}])
  }

  const like = (id) => {
    console.log("Like: ", id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=> {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })

    setColaboradores(colaboradoresActualizados)
  }

  //Lista de Equipos
  //const equipos =

  return (
    <div>  
      <Header/>
      {/* mostrarFormulario ? <Formulario/> : <></> */}
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          /> 
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />

      { 
        equipos.map( ( equipo ) => {
          //console.log("Equipo: ", equipo)
          return <Equipo 
              datos={equipo} 
              key={equipo.titulo} 
              colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
              eliminarColaborador={eliminarColaborador}
              actualizarColor={actualizarColor}
              like={like}
            />
        })
      }
      <Footer />
      
    </div>
  );
}

export default App;
