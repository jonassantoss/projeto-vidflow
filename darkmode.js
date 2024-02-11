// DECLARANDO VÁRIAVEIS
// HEADER
const swiper = document.querySelector(".cabecalho__switch-input");
const header = document.querySelector(".cabecalho__container");
const logo = document.querySelector(".logo__item");
const searchbar = document.querySelector(".pesquisar__input");
const keyboardIcon = document.querySelector(".pesquisar__input-teclado");
const searchIcon = document.querySelector(".pesquisar__btn");
const audioIcon = document.querySelector(".pesquisar__audio-img");
const iconsWrapper = document.querySelector(".cabecalho__icones__wrapper");
const headerIcons = iconsWrapper.querySelectorAll("a");
// MENU
const menu = document.querySelector(".menu__container");
const homeIcon = document.querySelector(".icone__inicio");
const exploreIcon = document.querySelector(".icone__explorar");
const shortsIcon = document.querySelector(".icone__shorts");
const subsIcon = document.querySelector(".icone__inscricoes");
const libraryIcon = document.querySelector(".icone__biblioteca");
const historyIcon = document.querySelector(".icone__historico");
const clockIcon = document.querySelector(".icone__relogio");
const likeIcon = document.querySelector(".icone__like");
const showIcon = document.querySelector(".icone__mostrar");
const videosIcon = document.querySelector(".icone__videos");
const moviesIcon = document.querySelector(".icone__filmes");
const gamesIcon = document.querySelector(".icone__jogos");
const icons = [
	homeIcon,
	exploreIcon,
	shortsIcon,
	subsIcon,
	libraryIcon,
	historyIcon,
	clockIcon,
	likeIcon,
	showIcon,
	videosIcon,
	moviesIcon,
	gamesIcon,
];
// SUPERIOR SECTION
const superiorSection = document.querySelector(".superior__secao__container");
const superiorSlider = document.querySelector(".superior__slider");
const sliderImg = document.querySelector(".superior__slider-img");
// VIDEOS SECTION
const videosSection = document.querySelector(".videos__container");

swiper.addEventListener("click", (e) => {
	let key = e.target.checked ? 1 : 0;

	document.body.classList.toggle("dark__mode");
	headerDarkMode(key);
	menuDarkMode();
	superiorDarkMode(key);
	videosDarkMode();
});

function headerDarkMode(key) {
	if (key) {
		audioIcon.src = "./img/darkmode/Mic.png";
		logo.src = "./img/darkmode/Logo.png";
		keyboardIcon.src = "./img/darkmode/keyboard.png";
	} else {
		audioIcon.src = "./img/topbar/Mic.png";
		logo.src = "./img/Logo.png";
		keyboardIcon.src = "./img/topbar/keyboard.png";
	}
	headerIcons.forEach((icon) => icon.classList.toggle("dark__mode"));
	header.classList.toggle("dark__mode");
	searchbar.classList.toggle("dark__mode");
	searchIcon.classList.toggle("dark__mode");
}

function menuDarkMode() {
	menu.classList.toggle("dark__mode");
	icons.forEach((icon) => icon.classList.toggle("dark__mode"));
}

function superiorDarkMode(key) {
	superiorSection.classList.toggle("dark__mode");
	superiorSlider.classList.toggle("dark__mode");
	categoryItems.forEach(option => option.classList.toggle("dark__mode"))

	if (key) {
		sliderImg.src = "img/darkmode/arrow_forward_ios.png";
	} else {
		sliderImg.src = "img/arrow_forward_ios.png";
	}
}

function videosDarkMode() {
	const videosArray = videosSection.querySelectorAll(".videos__item");
	videosSection.classList.toggle("dark__mode");
	videosArray.forEach(video => {
		let description = video.children[1];
		description.classList.toggle("dark__mode");
	});
}