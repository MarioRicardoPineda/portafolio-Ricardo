

/* 

<article class="por__content">
            <img src="assets/img/Animaker.png" alt="Animaker" title="Animaker">
            <a href="https://github.com/MarioRicardoPineda/Animaiker.git" target="_blank">Ver repositorio</a>
</article>
<article class="por__content">
    <img src="assets/img/Power-sync.png" alt="Power sync" title="Power Sync">
    <a href="https://github.com/MarioRicardoPineda/power-sync.git" target="_blank">Ver repositorio</a>
</article>
<article class="por__content">
    <img src="assets/img/Cotizacion.png" alt="cotización" title="contización">
    <a href="https://github.com/MarioRicardoPineda/sistema_cotizaciones.git" target="_blank">Ver repositorio</a>
</article>

            */

let url = [
    {
        name: "Landing-page",
        repositorio: "https://github.com/MarioRicardoPineda/landing-page.git",
        img: "assets/img/landing-page.png"
    },
    {
        name: "TODO-List",
        repositorio: "https://github.com/MarioRicardoPineda/TODO-List.git",
        img: "assets/img/TODO-List.png"
    },
    {
        name: "Animeker",
        repositorio: "https://github.com/MarioRicardoPineda/Animaiker.git",
        img: "assets/img/Animaker.png"
    },
    {
        name: "Power-Sync",
        repositorio: 'https://github.com/MarioRicardoPineda/power-sync.git',
        img: "assets/img/Power-sync.png"
    },
    {
        name: "Sistema-cotizacion",
        repositorio: "https://github.com/MarioRicardoPineda/sistema_cotizaciones.git",
        img: "assets/img/Cotizacion.png"
    },
    {
        name: "MaterializeCss",
        repositorio: "https://github.com/MarioRicardoPineda/materialize_web.git",
        img: "assets/img/materialize.png"
    }
]

let portafolio = document.querySelector('#portafolio');

const repositorios = () => {
    portafolio.innerHTML = "";

    for (let i of url) {

        portafolio.innerHTML +=
            `
    <article class="por__content">
        <img src="${i.img}" alt="${i.name}" title="${i.name}">
        <a href="${i.repositorio}" target="_blank">Ver repositorio</a>
    </article>
    `
    }
}

window.addEventListener('load', repositorios);
