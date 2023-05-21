// // get current date and time
// function getDateAndTime() {
// 	const date = new Date();
// 	const options = {
// 		weekday: 'long',
// 		year: 'numeric',
// 		month: 'long',
// 		day: 'numeric',
// 		hour: 'numeric',
// 		minute: 'numeric',
// 		second: 'numeric',
// 		hour12: true,
// 		timeZoneName: 'short'
// 	};

// 	return date.toLocaleDateString('en-NG', options);
// }

// // update ticker with current date and time every second
// function updateTicker() {
// 	const datetimeElement = document.getElementsByClassName('datetime');
// 	datetimeElement.innerHTML = getDateAndTime();

// 	setTimeout(updateTicker, 1000);
// }

// // call updateTicker function when page is loaded
// window.onload = function() {
// 	updateTicker();
// };