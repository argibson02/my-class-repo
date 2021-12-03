import { createCards } from "./cardCreation"
import { useIndexedDb } from "./indexedDb"

useIndexedDb("favorites", "FavoritesStore", "get").then(results => {
    createCards(results);
});