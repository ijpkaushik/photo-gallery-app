import React from "react";
import Today from "../../components/today/Today";
import Week from "../../components/week/Week";
import {
	Architecturetodaypics,
	Architectureweekpics,
} from "../../assets/images";
import "./architecture.css";

const Architecture = () => {
	return (
		<div className="architecture">
			<Today images={Architecturetodaypics} />
			<Week images={Architectureweekpics} />
		</div>
	);
};

export default Architecture;
