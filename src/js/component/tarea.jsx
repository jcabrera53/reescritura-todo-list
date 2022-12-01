//primera paso
import React,{useState} from 'react'

//segundo paso, darle nombre al componente
const Tarea = (props) => {
    //parte logica
	

    //parte template
    //retornar el  html
    return (<>
        <div className="text-center col-12 d-flex flex-row justify-content-between">
			<h5 className="card-title text-start">{ props && props.title }</h5>
            <div>{props && props.children}</div>
		</div>
    </>)
}

//ultimo paso
export default Tarea;
