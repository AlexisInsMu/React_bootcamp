import './App.css';
//no importa si poner .js en el modulo o no
import Mensaje from './Mensaje.js';

//no metas tus componentes dentro 
//de otros componentes
//O si no te enfrentaras con probelams de rendimiento

const Description = () => {
  return <h1>Curso de react en Bootcamp Youtube</h1>
}

//Los componentes de react inician en uppercase
function App() {
  const mensaje = "hola mundo" 
  return (
    <div className="App">
      {mensaje + " evaluación JSX"}
      <h1>Titulo de mi web</h1>
      <strong>
        Pepe pica papas
      </strong>
      <Mensaje color='red' message='estamos trabajando'/>
      <Mensaje color='blue' message='En curso'/>
      <Mensaje color='cyan' message='de react'/>
	  <Description />
      
    </div>
  );
}

export default App;
