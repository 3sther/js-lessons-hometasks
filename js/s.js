'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const START = document.getElementById('start');
	START.addEventListener('click', () => {
		START.style.backgroundColor = 'red';
		setTimeout(() => {
			START.style.backgroundColor = 'green';
		}, 300);
	});
});