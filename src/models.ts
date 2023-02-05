export interface People {
    "name": string;
    "height": string;
    "mass": string;
    "hair_color": string;
    "skin_color": string;
    "eye_color": string;
    "birth_year": string;
    "gender": string;
    "homeworld": string;
    "films": string[];
    "species": string[];
    "vehicles": string[];
    "starships": string[];
    "created": string;
    "edited": string;
    "url": string;
};

export interface Planets {
    "name": string;
    "rotation_period": string;
    "orbital_period": string;
    "diameter": string;
    "climate": string;
    "gravity": string;
    "terrain": string;
    "surface_water": string;
    "population": string;
    "residents": string[];
    "films": string[];
    "created": string;
    "edited": string;
    "url": string;
};

export interface Starships {
    "name": string;
    "model": string;
    "manufacturer": string;
    "cost_in_credits": string;
    "length": string;
    "max_atmosphering_speed": string;
    "crew": string;
    "passengers": string;
    "cargo_capacity": string;
    "consumables": string;
    "hyperdrive_rating": string;
    "MGLT": string;
    "starship_class": string;
    "pilots": string[];
    "films": string[];
    "created": string;
    "edited": string;
    "url": string;
};

export interface Films {
    "title": string;
    "episode_id": number;
    "opening_crawl": string;
    "director": string;
    "producer": string;
    "release_date": string;
    "characters": string[];
    "planets": string[];
    "starships": string[];
    "vehicles": string[];
    "species": string[];
    "created": string;
    "edited": string;
    "url": string;
};

export interface Species {
    "name": string;
    "classification": string;
    "designation": string;
    "average_height": string;
    "skin_colors": string;
    "hair_colors": string;
    "eye_colors": string;
    "average_lifespan": string;
    "homeworld": string;
    "language": string;
    "people": string[];
    "films": string[];
    "created": string;
    "edited": string;
    "url": string;
};

export interface Vehicles {
    "name": string;
    "model": string;
    "manufacturer": string;
    "cost_in_credits": string;
    "length": string;
    "max_atmosphering_speed": string;
    "crew": string;
    "passengers": string;
    "cargo_capacity": string;
    "consumables": string;
    "vehicle_class": string;
    "pilots": string[];
    "films": string[];
    "created": string;
    "edited": string;
    "url": string;
};

export type SwapiCategory = People | Starships | Planets | Films | Species | Vehicles;

export interface SwapiCategories {
    people: People;
    planets: Planets;
    films: Films;
    species: Species;
    vehicles: Vehicles;
    starships: Starships;
};

export const SwapiCats: SwapiCategories = {
    people: <People>{},
    planets: <Planets>{},
    films: <Films>{},
    species: <Species>{},
    vehicles: <Vehicles>{},
    starships: <Starships>{},
};

export interface SwapiSearchResult {
    category: string;   // originally doesn't exist
    count: number;
    next: number | null;
    previous: number | null;
    results: Object[];
};