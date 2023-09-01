/** @format */

const Form = () => {
	return (
		<div className="w-25 mx-auto mt-5">
			<h4 className="mb-3">Registrate!</h4>
			<form className="needs-validation" noValidate>
				<div className="row g-3">
					<div className="col-12">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="you@example.com"
							name="email"
						/>
						<div className="invalid-feedback">
							Please enter a valid email address for shipping updates.
						</div>
					</div>

					<div className="col-12">
						<label htmlFor="address" className="form-label">
							Clave
						</label>
						<input
							type="password"
							className="form-control"
							id="address"
							placeholder="Clave"
							name="password"
							required
						/>
						<div className="invalid-feedback">
							Please enter your shipping address.
						</div>
					</div>

					<div className="col-12">
						<label htmlFor="password2" className="form-label">
							Repetir Clave
						</label>
						<input
							// no le ponemos name porque no nos interesa mandarla a la api, la contraseña se manda del primer input
							type="password"
							className="form-control"
							id="password2"
							placeholder="Repetir clave"
						/>
					</div>
					<button className="w-100 btn btn-primary btn-lg" type="submit">
						Registrarme
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
