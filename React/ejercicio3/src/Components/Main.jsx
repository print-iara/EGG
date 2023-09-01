/** @format */

import Card from "./Card";

const Main = () => {
	const titulos = ["titulo 1", "titulo 2", "titulo 3"];
	return (
		<div className="container">
			<div className="card-group mt-5 ">
				<Card name="Chiquito" image="/images/Rectangle 1.png" />
				<Card name="Filomena" image="/images/Rectangle 2.png" />
			</div>
		</div>
	);
};

export default Main;
