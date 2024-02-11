const videosContainer = document.querySelector(".videos__container");
const searchBar = document.querySelector(".pesquisar__input");
const categoryItems = document.querySelectorAll(".superior__item");

async function searchShowVideos() {
	try {
		const search = await fetch("http://localhost:3000/videos");
		const videos = await search.json();

		videos.forEach((video) => {
            if (video.categoria === "") {
                throw new Error("Vídeo não possui categoria.");
            }
			videosContainer.innerHTML += `
            <li class="videos__item ${video.categoria}">
                <iframe class="iframe-video"
                    src="${video.url}" 
                    title="${video.titulo}"
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
        `;
		});
	} catch (error) {
		videosContainer.innerHTML += `<p>Houve um erro ao carregar os vídeos: ${error}</p>`;
	}
}

searchShowVideos();

searchBar.addEventListener("input", searchFilter);
categoryItems.forEach(item => item.addEventListener("click", categoryFilter));

function searchFilter() {
    const videos = document.querySelectorAll(".videos__item");

    if (searchBar.value !== "") {
        videos.forEach(video => {
            let title = video.querySelector(".titulo-video").textContent.toLowerCase();
            let filter = searchBar.value.toLowerCase();

            if (!title.includes(filter)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        })
    }
}

function categoryFilter() {
    const videos = document.querySelectorAll(".videos__item");
    let categoryName = this.getAttribute("name");

    videos.forEach(video => {
        if (categoryName !== "Tudo") {
            if (!video.classList.contains(categoryName)) {
                video.style.display = "none"
            } else {
                video.style.display = "block"
            }
        } else {
            video.style.display = "block";
        }
    })

    selectTask(categoryName);
}

function selectTask(categoryName) {
    categoryItems.forEach(item => {
        let name = item.getAttribute("name");
        if (name === categoryName) {
            item.classList.add("selected");
        } else {
            item.classList.remove("selected");
        }
    })
}