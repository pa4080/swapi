export interface SwapiCategories {
    people: string;
    planets: string;
    films: string;
    species: string;
    vehicles: string;
    starships: string;
};

export const SwapiEndPoints: SwapiCategories = {
    people: "https://swapi.dev/api/people/",
    planets: "https://swapi.dev/api/planets/",
    films: "https://swapi.dev/api/films/",
    species: "https://swapi.dev/api/species/",
    vehicles: "https://swapi.dev/api/vehicles/",
    starships: "https://swapi.dev/api/starships/"
};

export interface SwapiSearchResult {
    category: string;   // originally doesn't exist
    count: number;
    next: number | null;
    previous: number | null;
    results: Object[];
};
