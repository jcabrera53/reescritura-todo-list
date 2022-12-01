import React, { useEffect, useState } from "react";
import Tarea from "./tarea.jsx";

//create your first functional component

const Home = () => {
  //secction de contenido logico
  const [tarea, setTarea] = useState("");

  const [listaTareas, setListaTareas] = useState([]);

  const handleKey = (event) => {
    if (event.key == "Enter") {
      setListaTareas([...listaTareas, tarea]);
      setTarea("");
    }
  };
  function deleteTask(index) {
    setListaTareas(listaTareas.filter((task, ind) => ind != index));
  }
  //seccion de template
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <h1 className="text-center">Lista de Pendientes:</h1>
          <div className="input-group input-group-lg border border-dark">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Tarea:
            </span>
            <input
              type="text"
              className="form-control"
              value={tarea}
              onChange={(event) => setTarea(event.target.value)}
              onKeyDown={handleKey}
            />
          </div>
          <div className="d-flex flex-column justify-content-between">
            {listaTareas &&
              listaTareas.map((task, index) => (
                <div
                  className="d-flex flex-row justify-content-between"
                  key={task}
                >
                  <Tarea
                    key={task}
                    title={task}
                    children={
                      <button
                        type="button"
                        className="bg-white border-0"
                        onClick={() => deleteTask(index)}
                      >
                        X
                      </button>
                    }
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
