import React from "react";
import "./header.css";
import { TbSearch } from "react-icons/tb";

const header = () => {
	return (
		<div className="header">
			<div className="head-start">Library</div>
			<div className="head-end">
				<div>Search All Photos</div>
				<TbSearch className="head-icon"/>
			</div>
		</div>
	);
};

export default header;
