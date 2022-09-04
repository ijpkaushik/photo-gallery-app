import React from "react";
import date from "../../utils/getDate";
import Image from "../image/Image";
import "./today.css";

const Today = ({ images }) => {
	return (
		<div className="today">
			<div className="title">
				<div className="todayHeading">Today</div>
				<div className="todayDate">{date}</div>
			</div>
			<div className="images">
				{images.map((image) => (
					<Image key={image.id} image={image} />
				))}
			</div>
		</div>
	);
};

export default Today;
