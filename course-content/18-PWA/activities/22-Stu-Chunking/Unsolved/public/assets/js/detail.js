import { useIndexedDb } from "./indexedDb";
import { loadImage } from './home';
import { createCard } from "./cardCreation";

const id = window.location.pathname.split("/")[2];
const container = document.querySelector(".container");

loadImage(id).then(image => {
    const card = createCard(image);
    const btn = document.createElement("button");

    btn.setAttribute("class", "btn btn-primary mt-5 mx-auto");
    btn.textContent = "Save to favorites";
    btn.onclick = useIndexedDb("favorites", "FavoritesStore", "put", image);

    container.appendChild(card);
    container.appendChild(btn);
});