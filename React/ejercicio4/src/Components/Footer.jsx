/** @format */
import { NavLink } from "react-router-dom";
const Footer = () => {
	const links = ["Home", "Productos", "Contacto"];
	let anio = new Date().getFullYear();
	let empresa = "PRINT iara";
	return (
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<p className="col-md-4 mb-0 text-body-secondary">
					&copy; {anio} {empresa}, Inc
				</p>

				<NavLink
					to={"/"}
					className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
				>
					<img src={"/images/logo.png"} width="35px" />
				</NavLink>

				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<NavLink to={"/"} className="nav-link px-2 text-body-secondary">
							{links[0]}
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to={"/productos"}
							className="nav-link px-2 text-body-secondary"
						>
							{links[1]}
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to={"/contacto"}
							className="nav-link px-2 text-body-secondary"
						>
							{links[2]}
						</NavLink>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
