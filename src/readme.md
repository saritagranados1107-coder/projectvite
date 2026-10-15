Proyecto hecho con Vite y JavaScript que muestra los datos de una serie de televisión y sus episodios agrupados por temporada, coloreados según su valoración.

Los datos se obtienen de la API pública de TVMaze.

- Muestra el póster y el nombre de la serie.
- Muestra todas las temporadas y sus episodios.
- Cada episodio tiene un color según su valoración (rojo = baja, verde = alta).

Cambiar de serie

En src/index.js cambia el valor de ID por el ID de otra serie:

js
const ID = "2993";

Para buscar el ID de una serie por nombre, abre en el navegador:

https://api.tvmaze.com/search/shows?q=nombre-de-la-serie