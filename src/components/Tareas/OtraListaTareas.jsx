import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const OtraListaTareas = ({ tareas, setTareas }) => {
  //En lugar de poner la palabra props directamente se puede pasar el nombre de la variable o propiedad
  //console.log("PROPS ==>>", props);
  //const {tareas} = props;
  const [task, setTask] = useState([]);
    //Efecto solo en el montaje
//   useEffect(() => {//tiene tres efectos de cambio (montaje, actualizacion o desmontaje)
//     console.log("Efecto desde el montaje del componente");//Se le pasa una callback (la funcion flecha) y un array que en el inicio sera vacio
//   }, []);

  //Efecto con actualizaciones

  useEffect(()=>{
    console.log("Desde efecto de actualizacion de tareas", tareas);
    setTask(tareas)
  },[tareas])

  const eliminarTarea = (index) => {
    let nuevasTareas = tareas;
    nuevasTareas.splice(index, 1);
    setTareas([...nuevasTareas]);
  };
  return (
    <div className="border border-2 border-danger">
      <div className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <h3>Otra lista de tareas a realizar</h3>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              //console.log("Desde el boton eliminar todo");
              setTareas([]);
            }}
          >
            Eliminar todas las tareas
          </Button>
        </div>

        <ol>
          {task.map((elemento, index) => {
            return (
              <div key={index} className="my-2">
                <li>
                  <div className="d-flex justify-content-between">
                    <p>{elemento}</p>
                    <Button
                      type="button"
                      variant="warning"
                      onClick={() => {
                        console.log(
                          "Desde el boton realizado correspondiente a la tarea: ",
                          index
                        );
                        eliminarTarea(index);
                      }}
                    >
                      Realizado
                    </Button>
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

export default OtraListaTareas;
