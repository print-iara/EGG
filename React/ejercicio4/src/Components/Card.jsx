/** @format */

const Card = ({ name, image }) => {
	const estilos = {
		texto: {
			color: "#462181",
		},
	};
	return (
		<div className="card mx-2">
			<img src={image} className="card-img-top " alt="..." />
			<div className="card-body ">
				<h5 className="card-title text-center" style={estilos.texto}>
					{name}
				</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</p>
				<div className="text-center">
					<button type="button" className="btn btn-warning">
						Visitar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
