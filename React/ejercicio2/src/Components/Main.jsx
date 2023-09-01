/** @format */

const Main = () => {
	const titulos = ["titulo 1", "titulo 2", "titulo 3"];
	return (
		<div className="container">
			<div className="card-group mt-5 ">
				<div className="card mx-2">
					<img
						src={"/images/Rectangle 1.png"}
						className="card-img-top "
						alt="..."
					/>
					<div className="card-body ">
						<h5 className="card-title text-center">{titulos[0]}</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-body-secondary">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
				<div className="card">
					<img
						src={"/images/Rectangle 2.png"}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-center">{titulos[1]}</h5>
						<p className="card-text">
							This card has supporting text below as a natural lead-in to
							additional content.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-body-secondary">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
				<div className="card mx-2">
					<img
						src={"/images/Rectangle 3.png"}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-center">{titulos[2]}</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-body-secondary">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
