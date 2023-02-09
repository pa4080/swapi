export interface People {
    category: string;   // originally doesn't exist
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string | JSX.Element;
    films: string[] | JSX.Element[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
    [key: string]: any;
};

export interface Planets {
    category: string;   // originally doesn't exist
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[] | JSX.Element[];
    films: string[] | JSX.Element[];
    created: string;
    edited: string;
    url: string;
    [key: string]: any;
};

export interface Starships {
    category: string;   // originally doesn't exist
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[] | JSX.Element[];
    created: string;
    edited: string;
    url: string;
    [key: string]: any;
};

export interface Species {
    category: string;   // originally doesn't exist
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string | JSX.Element;
    language: string;
    people: string[];
    films: string[] | JSX.Element[];
    created: string;
    edited: string;
    url: string;
    [key: string]: any;
};

export interface Vehicles {
    category: string;   // originally doesn't exist
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[] | JSX.Element[];
    created: string;
    edited: string;
    url: string;
    [key: string]: any;
};

export interface Films {
    category: string;   // originally doesn't exist
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
    [key: string]: any;
};

// This is a workaround (see: {result?.title ?? result?.name} in SearchResultsCats.tsx),
// probably we need to assign proper type for each category when query the API?!?
export type SwapiTypes = People & Starships & Planets & Films & Species & Vehicles;

export interface SwapiCategories {
    people: People;
    planets: Planets;
    species: Species;
    vehicles: Vehicles;
    starships: Starships;
    films: Films;
};

export const SwapiCats: SwapiCategories = {
    people: <People>{},
    planets: <Planets>{},
    species: <Species>{},
    vehicles: <Vehicles>{},
    starships: <Starships>{},
    films: <Films>{},
};

export interface SwapiSearchResult {
    category: string;   // originally doesn't exist
    count: number;
    next: number | null;
    previous: number | null;
    results: SwapiTypes[];
};