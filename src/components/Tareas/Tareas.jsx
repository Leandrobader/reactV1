import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import OtraListaTareas from "./OtraListaTareas";

const Tareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("task")) || []);
  //console.log(tareas);
  return (
    <div>
      <div className="container my-5 py-5 d-flex justify-content-center">
        <Form>
          <Form.Group>
            <Form.Label>Ingrese la tarea a agendar</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                //console.log(e.currentTarget.value);
                setTarea(e.currentTarget.value);
              }}
              value={tarea}
            />
          </Form.Group>

          <Button
            type="button"
            variant="primary"
            className="my-3"
            onClick={() => {
              setTareas([...tareas, tarea]); //operador espred desmenuza y lo que tiene despues de la coma lo agrega como si fuera un push
              setTarea("");
              localStorage.setItem("task", JSON.stringify([...tareas, tarea]))
            }}
          >
            Guardar Tarea
          </Button>
        </Form>
      </div>

            <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>;
            {/* <OtraListaTareas tareas={tareas} setTareas={setTareas}></OtraListaTareas> */}
    </div>
  );
};

export default Tareas;
