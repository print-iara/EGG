/** @format */

import "./App.css";
import { useState } from "react";
function App() {
	const [contador, setContador] = useState(0);
	const [frase, setFrase] = useState(null);
	const handleClick = () => {
		setContador(contador + 1);
	};
	const handleChange = (e) => {
		setFrase(e.target.value);
	};
	return (
		<div className="App container text-center ">
			<h2>Ejercicio 5</h2>
			<div className="card p-5 mt-5 d-flex" style={{ width: "400px" }}>
				<div className="card-body">
					<button className="btn btn-warning" onClick={handleClick}>
						contar
					</button>
					<div>{contador}</div>
				</div>
			</div>

			<div className="card p-5 mt-5" style={{ width: "400px" }}>
				<div className="card-body">
					<input placeholder="ingresa una frase" onChange={handleChange} />
					<div>{frase && frase}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
