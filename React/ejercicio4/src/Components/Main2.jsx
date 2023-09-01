/** @format */

const Main2 = () => {
	const estilos = {
		texto: {
			color: "#462181",
			fontFamily: "sans-serif",
			fontWeight: "bold",
		},
		liviana: {
			fontFamily: "sans-serif",
			fontWeight: "lighter",
			color: "#9366DA",
		},
		bajada: {
			color: "#ccc",
			fontSize: "1.3rem",
			fontWeight: "lighter",
            color: "#9366DA"
		},
	};
	return (
		<div className="container">
			<div>
				<div className="row">
					<div className="col-4 pt-5 ">
						<h5 style={estilos.liviana}>VENDE TUS PRODUCTOS EN LINEA</h5>
						<h2 style={estilos.texto}>Tienda virtual en linea</h2>
						<p style={estilos.bajada} className="mt-4">
							Diseño de tiendas online. Porque conocemos las necesidades de cada
							empresa a la hora de emprender un proyecto web seremos su aliado,
							su asesor web y nuestra agencia de páginas Online, le ayudara a
							diseñar y desarrollar la Página web que tanto has deseado tener en
							internet.
						</p>
					</div>
					<div className="col-8">
						<img src={"/images/banner-image.png"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main2;
