import Navbarr from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Tareas from "./components/Tareas/Tareas"

function App() {

  
  //Toda la logica del componente vive aqui antes del return
  return (
    <>
        <Navbarr></Navbarr>;
        <Tareas></Tareas>
        <Footer></Footer>;
    </>
  )
}

export default App
