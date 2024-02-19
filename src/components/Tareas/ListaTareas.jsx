import { Button } from "react-bootstrap";

const ListaTareas = ({ tareas, setTareas }) => {
  //En lugar de poner la palabra props directamente se puede pasar el nombre de la variable o propiedad
  //console.log("PROPS ==>>", props);
  //const {tareas} = props;
  
  const eliminarTarea=(index)=>{
    let nuevasTareas =tareas;
    nuevasTareas.splice(index,1);
    setTareas([...nuevasTareas]);
    localStorage.setItem("task", JSON.stringify([...nuevasTareas]));
  }
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <h3>Lista de tareas a realizar</h3>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              //console.log("Desde el boton eliminar todo");
              setTareas([]);
              localStorage.setItem("task", JSON.stringify([]));
            }}
          >
            Eliminar todas las tareas
          </Button>
        </div>

        <ol>
          {tareas.map((elemento, index) => {
            return (
              <div key={index} className="my-2">
                <li>
                  <div className="d-flex justify-content-between">
                  <p>{elemento}</p>
                  <Button type="button" variant="warning" onClick={()=>{
                    console.log("Desde el boton realizado correspondiente a la tarea: ", index);
                    eliminarTarea(index);
                  }}>Realizado</Button>
                  </div>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ListaTareas;
