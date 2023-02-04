export interface swapiResources {
    people: string;
    planets: string;
    films: string;
    species: string;
    vehicles: string;
    starships: string;
};

export const swapiEndPoints: swapiResources = {
    people: "https://swapi.dev/api/people/",
    planets: "https://swapi.dev/api/planets/",
    films: "https://swapi.dev/api/films/",
    species: "https://swapi.dev/api/species/",
    vehicles: "https://swapi.dev/api/vehicles/",
    starships: "https://swapi.dev/api/starships/"
};