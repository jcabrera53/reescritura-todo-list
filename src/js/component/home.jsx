import React, {useEffect, useState} from "react";
import Tarea from './card.jsx'
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first functional component

const Home = () => {
	//secction de contenido logico
	const [ counter, setCounter ] = useState(0)

	const [texto, setTexto ] = useState('')

	const [destinyList, setDestinyList] = useState([])

	useEffect(()=>{
		console.log('Fui montado en la ventana 🎈')
	},[])

	const handleKey = (event) =>{
		if(event.key == 'Enter'){
			setDestinyList( [ ...destinyList, texto ] )
			setTexto('')
		}
	}	

	//seccion de template
	return (<>
	<div className="row d-flex justify-content-center">
		<div className="col-10">
		<h1 className="text-center">Todos</h1>
		<div className="input-group input-group-lg border border-dark">
		<span className="input-group-text" id="inputGroup-sizing-lg">Tarea:</span>
			<input type="text" className="form-control" value={texto} onChange={(event) => setTexto(event.target.value)} onKeyDown={handleKey}/>
		</div>			
			<div className="d-flex flex-wrap">
				{
					destinyList && destinyList.map((city) => <Tarea key={city} title={city} description="$999" />)
				}
			</div>
			</div>
			</div>
		</>
	);
};

export default Home;
