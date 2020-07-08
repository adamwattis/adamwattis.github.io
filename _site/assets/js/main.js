function loadSections() {
	return document.querySelectorAll('section')
}
function loadTexts() {
	return document.querySelectorAll('.title')
}
function loadIcons(){
	return document.querySelectorAll('.tool__icon')
}
function toggleHidden(element) {
	element.classList.toggle('hidden')
}

function showAll() {
	let s = loadSections()
	s.forEach(section => {
		toggleHidden(section)
	})
}
function wait(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {resolve()}, seconds * 1000)
	})
	
}
async function renderWithDelay(items, delay) {
	for (let i=0; i<items.length; i++) {
		await wait(delay)
		toggleHidden(items[i])
	}
}

async function onPageLoad() {
	showAll()
	let titleTexts = loadTexts()
	let icons = loadIcons()
	console.log(titleTexts)
	await renderWithDelay(titleTexts, 0.5)
	await wait(0.5)
	toggleHidden(document.querySelector('.title__group'))
	await renderWithDelay(icons, 0.1)
}
