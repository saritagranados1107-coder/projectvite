// import mifuncion, { HELLO } from "./modules/modulo.js";
// import { mostrarUsuarios, agregarListeners, limpiarCampoInput } from "./modules/tasks.js";

// console.log(HELLO);
// console.log(mifuncion());

// //const nuevoArreglo = data.users.filter((user) => user.age > 25);

// agregarListeners();
// mostrarUsuarios();

import "./index.css";
import { getShowData, getEpisodeList } from "./services/tvmaze.js";

const ID = "118";

const $header = document.querySelector("header");
const $episodes = document.querySelector(".episodes");

const createHeaderHTML = ({ name, image }) => `
  <img class="poster" src="${image}" alt="${name}">
  <h1>${name}</h1>
`;

// El rating puede ser null (episodio sin valorar), así que lo redondeamos a 0-10
const createEpisodeHTML = ({ number, rating }) => `
  <div class="episode episode-${number} rating-${Math.round(rating ?? 0)}">${number}</div>
`;

const createSeasonHTML = (data, number) => `
  <article class="season">
    <header class="season-header">T${String(number).padStart(2, "0")}</header>
    ${data.map(createEpisodeHTML).join("")}
  </article>
`;

try {
  const show = await getShowData(ID);
  const seasons = await getEpisodeList(ID);

  $header.setHTMLUnsafe(createHeaderHTML(show));

  const list = Object.values(seasons).map((season, index) =>
    createSeasonHTML(season, index + 1)
  );
  $episodes.setHTMLUnsafe(list.join(""));
} catch (error) {
  console.error("Error al obtener los datos: ", error);
}