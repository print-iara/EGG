/** @format */

const Card = ({ name, image }) => {
	return (
		<div className="card mx-2">
			<img
				src={image}
				className="card-img-top "
				alt="..."
			/>
			<div className="card-body ">
				<h5 className="card-title text-center">{name}</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</p>
			</div>
			<div className="card-footer">
				<small className="text-body-secondary">Last updated 3 mins ago</small>
			</div>
		</div>
	);
};

export default Card;
