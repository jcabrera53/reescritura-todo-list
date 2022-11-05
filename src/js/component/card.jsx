//primera paso
import React,{useState} from 'react'



//segundo paso, darle nombre al componente
const Tarea = (props) => {
    //parte logica
	const [mostrarComponente, setMostrarComponente] = useState(true);
    //parte template
    //retornar el  html
    return (<>
        <div className="text-center col-12">
			<div className={mostrarComponente ? "show-element" : "d-none"}>
				<div className="card-body d-flex justify-content-between">
					<h5 className="card-title text-start">{ props && props.title }</h5>
					<button className="bg-white border-0" onClick={() => setMostrarComponente(!mostrarComponente)}>X</button>
				</div>
			</div>
		</div>
    </>)
}

//ultimo paso
export default Tarea;
