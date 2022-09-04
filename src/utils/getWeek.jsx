const months = {
	0: "January",
	1: "February",
	2: "March",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "August",
	8: "September",
	9: "October",
	10: "November",
	11: "December",
};

const d = new Date();
const year = d.getFullYear();

const startDate = d.getDate > 7 ? d.getDate() - 6 : 24 + d.getDate();
const endDate = startDate + 6 < 31 ? startDate + 6 : startDate + 6 - 30;
const monthIndex = d.getMonth();
const startMonth = startDate > 7 ? months[monthIndex-1] : months[monthIndex];
const endMonth = startDate > 7 ? months[monthIndex] : months[monthIndex+1];
const formatted = `${startDate} ${startMonth} to ${endDate} ${endMonth} ${year}`;

export default formatted;
