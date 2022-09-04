import React from "react";
import './allphotos.css'
import { imagesToday, imagesWeek } from "../../assets/images";

import Today from '../../components/today/Today'
import Week from '../../components/week/Week' 

const AllPhotos = () => {
	return (
		<div className="allphotos">
			<Today images={imagesToday}/>
			<Week images={imagesWeek}/>
		</div>
	);
};

export default AllPhotos;
