/** @format */
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Main2 from "./Components/Main2";
import Form from "./Components/Form";

const App = () => {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path={"/"} element={<Main />} />
				<Route path="/productos" element={<Main2 />} />
				<Route path="/Contacto" element={<Form />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
