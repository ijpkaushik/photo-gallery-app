import React, { useEffect, useState } from "react";
import "./image.css";
import { AiFillHeart } from "react-icons/ai";
import reactImageSize from "react-image-size";

const Image = ({ image }) => {
	// console.log(image);
	// console.log(typeof(image.cat));
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [fileName, setFileName] = useState("");

	const [fav, setFav] = useState(false);
	const getDimentions = async () => {
		try {
			const { width, height } = await reactImageSize(image.src);
			const fullname = image.src;
			const filenameArr = fullname.split("/");
			const fullFileName = filenameArr[3].split(".");
			setFileName(fullFileName[0] + "." + fullFileName[2]);
			setWidth(width);
			setHeight(height);
		} catch (err) {
			console.log(err);
		}
	};

	const changeColor = () => {
		setFav(!fav);
	};

	useEffect(() => {
		getDimentions();
	}, []);

	return (
		<div className="image-container">
			{fav ? (
				<AiFillHeart className="image-icon-fav" onClick={changeColor} />
			) : (
				<AiFillHeart className="image-icon-nofav" onClick={changeColor} />
			)}
			<img
				src={image.src}
				alt={image.title}
				className="pic"
				height={height / 25}
				width={width / 25}
			/>
			<label className="text">{fileName}</label>
		</div>
	);
};

export default Image;
