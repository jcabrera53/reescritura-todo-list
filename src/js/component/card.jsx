//primera paso
import React from 'react'

//segundo paso, darle nombre al componente
const Card = (props) => {
    //parte logica

    //parte template
    //retornar el  html
    return (<>
        <div className="text-center col-3">
			<div className="card">
			<img className="card-img-top" src="https://picsum.photos/200" alt="Card image cap"/>
				<div className="card-body">
					<h5 className="card-title">{ props && props.title }</h5>
					<p className="card-text">{props && props.description}</p>
					<button className={`btn btn-${props.color ? props.color : 'info' }`} >Go somewhere</button>
				</div>
			</div>
		</div>
    </>)
}

//ultimo paso
export default Card;
