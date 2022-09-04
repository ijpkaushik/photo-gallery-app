export const imagesToday = [
	{ id: 10, src: require("../assets/pic10.jpg"), cat: "Lake View" },
	{ id: 11, src: require("../assets/pic11.jpg"), cat: "Architecture" },
	{ id: 12, src: require("../assets/pic12.jpg"), cat: "Kashmir" },
	{ id: 13, src: require("../assets/pic13.jpg"), cat: "Lake View" },
	{ id: 14, src: require("../assets/pic14.jpg"), cat: "Seaside" },
	{ id: 15, src: require("../assets/pic15.jpg"), cat: "Seaside" },
	{ id: 16, src: require("../assets/pic16.jpg"), cat: "Architecture" },
];

export const imagesWeek = [
	{ id: 1, src: require("../assets/pic1.jpg"), cat: "Architecture" },
	{ id: 2, src: require("../assets/pic2.jpg"), cat: "Seaside" },
	{ id: 3, src: require("../assets/pic3.jpg"), cat: "Kashmir" },
	{ id: 4, src: require("../assets/pic4.jpg"), cat: "Lake View" },
	{ id: 5, src: require("../assets/pic5.jpg"), cat: "Lake View" },
	{ id: 6, src: require("../assets/pic6.jpg"), cat: "Kashmir" },
	{ id: 7, src: require("../assets/pic7.jpg"), cat: "Seaside" },
	{ id: 8, src: require("../assets/pic8.jpg"), cat: "Kashmir" },
	{ id: 9, src: require("../assets/pic9.jpg"), cat: "Architecture" },
	{ id: 10, src: require("../assets/pic10.jpg"), cat: "Lake View" },
	{ id: 11, src: require("../assets/pic11.jpg"), cat: "Architecture" },
	{ id: 12, src: require("../assets/pic12.jpg"), cat: "Kashmir" },
	{ id: 13, src: require("../assets/pic13.jpg"), cat: "Lake View" },
	{ id: 14, src: require("../assets/pic14.jpg"), cat: "Seaside" },
	{ id: 15, src: require("../assets/pic15.jpg"), cat: "Seaside" },
	{ id: 16, src: require("../assets/pic16.jpg"), cat: "Architecture" },
];

export const images = {
	imagesToday,
	imagesWeek,
};

function checkCat(cats) {
	return cats.cat === "Architecture";
}
export const Architecturetodaypics = imagesToday.filter(checkCat);
export const Architectureweekpics = imagesWeek.filter(checkCat);
