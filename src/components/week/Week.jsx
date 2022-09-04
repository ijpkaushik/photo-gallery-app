import React from "react";
import week from "../../utils/getWeek";
import Image from "../image/Image";
import "./week.css";

const Week = ({images}) => {
	return (
		<div className="week">
			<div className="title">
				<div className="weekHeading">This Week</div>
				<div className="weekDate">{week}</div>
			</div>
			<div className="images">
				{images.map((image) => (
					<Image key={image.id} image={image} />
				))}
			</div>
		</div>
	);
};

export default Week;
