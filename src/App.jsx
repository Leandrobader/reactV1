import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState("") //se declara una variable constante y se declara la funcion con la que se seteara su valor y el useState es el estado inicial de la variable
  //Toda la logica del componente vive aqui antes del return
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{ 
          setCount((count) => count + 1)
          setNombre((nombre)=> nombre + "A-")
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>Hola mundo REACT</h1>

      <p>Valor del estado nombre: {nombre}</p>
    </>
  )
}

export default App
