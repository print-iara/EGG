/** @format */
import { NavLink } from "react-router-dom";
const Nav = () => {
	const secciones = ["Home", "Productos", "contacto"];
	return (
		<>
			<header className="p-3 text-bg-dark">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<a
							href="/"
							class="d-flex align-items-center link-body-emphasis text-decoration-none me-3"
						>
							<img src={"/images/logo2.png"} width="35px" />
						</a>

						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<NavLink to={"/"} className="nav-link px-2 text-secondary">
									{secciones[0]}
								</NavLink>
							</li>
							<li>
								<NavLink to={"/productos"} className="nav-link px-2 text-white">
									{secciones[1]}
								</NavLink>
							</li>
							<li>
								<NavLink to={"/contacto"} className="nav-link px-2 text-white">
									{secciones[2]}
								</NavLink>
							</li>
						</ul>

						<form
							className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
							role="search"
						>
							<input
								type="search"
								className="form-control form-control-dark text-bg-dark"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>

						<div className="text-end">
							<NavLink to={"/contacto"}>
								<button type="button" className="btn btn-outline-light me-2">
									Login
								</button>
							</NavLink>
							<NavLink to={"/contacto"}>
								<button type="button" className="btn btn-warning">
									Sign-up
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Nav;
