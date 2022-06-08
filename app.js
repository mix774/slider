const container = document.querySelector('.container') 
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length //количество слайдов
let activeSlideIndex = 0


sideBar.style.top = `-${(slidesCount - 1) * 100}vh` //сопоставление соответствующего слайда сайдбару при помощи верхнего отступа

//картинки с сайдбара и сами слайды сменяются с разных сторон, поэтому необходимо 
//сопоставить картинки с сайдбара и сами слайды в обратном порядке

//назначение слушателя события, по собатию клик сработает функция
upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

//добаление слушателя события, который вызывает функцию, меняющую слайды, на нажатие стрелок
document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp') {
		changeSlide('up')
	} else if (event.key === 'ArrowDown') {
		changeSlide('down')
	}
})

//функция, меняющая слайды
function changeSlide(direction) { //в аргументы передается направление 
	if (direction === 'up') { //если вверх, то значение активного слайда инкрементируется
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) { //если номер активного слайда равен количеству слайдов, происходит обнуление индекса активного слайда
			activeSlideIndex = 0
		}
	} else if (direction === 'down') { //если вниз, то значение активного слайда декрементируется
		activeSlideIndex--
		if (activeSlideIndex < 0) { //если индекс меньше нуля, то активный слайд будет равен последнему слайду 
			activeSlideIndex = slidesCount - 1 
		}
	}

	const height = container.clientHeight //получение высоты контейнера 

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)` //динамическое вычисление смещения слайда по вертикали
	sideBar.style.transform = `translateY(${activeSlideIndex * height}px)` //динамическое вычисление смещения картинки сайдбара по вертикали

}