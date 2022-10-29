import React, {useEffect, useState} from "react";
import Card from './card.jsx'
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

	const color = {
		color1: 'success',
		color2: 'ligthgrey',
		color3: 'primary',
		color4: 'warning',
	}

	const handleKey = (event) =>{
		if(event.key == 'Escape'){
			setDestinyList( [ ...destinyList, texto ] )
			setTexto('')
		}
	}
	

	//seccion de template
	return (<>
		<h1>Viaja ya mismo a: {texto}</h1>
		<div className="input-group input-group-lg  my-3">
		<span className="input-group-text" id="inputGroup-sizing-lg">Buscar</span>
			<input type="text" className="form-control" value={texto} onChange={(event) => setTexto(event.target.value)} onKeyDown={handleKey}/>
		</div>
		<button className="btn btn-info" >Agregar Card</button>
			
			<div className="d-flex flex-wrap">
				{
					destinyList && destinyList.map((city) => <Card key={city} title={city} description="$999" color={color.color1} />)
				}
			</div>
		</>
	);
};

export default Home;
