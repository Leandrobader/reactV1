import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Tareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  console.log(tareas);
  return (
    <div>
      <div className="container my-5 py-5 d-flex justify-content-center">
        <Form>
          <Form.Group>
            <Form.Label>Ingrese la tarea a agendar</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                console.log(e.currentTarget.value);
                setTarea(e.currentTarget.value);
              }}
            />
          </Form.Group>

          <Button
            type="button"
            variant="primary"
            className="my-3"
            onClick={() => {
              setTareas([...tareas, tarea]); //operador espred desmenuza y lo que tiene despues de la coma lo agrega como si fuera un push
            }}
          >
            Guardar Tarea
          </Button>
        </Form>
      </div>

      <div className="container">
        <h3>Lista de tareas a realizar</h3>
        <ol>
          {tareas.map((elemento, index) => {
            return (
              <div key={index}>
                <li>{elemento}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Tareas;
