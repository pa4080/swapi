export type OutputData = {
    people: {
        [key: string]: any;
    };
    planets: {
        [key: string]: any;
    };
    starships: {
        [key: string]: any;
    };
    species: {
        [key: string]: any;
    };
    vehicles: {
        [key: string]: any;
    };
    films: {
        [key: string]: any;
    };
    [key: string]: any;
};

export default <OutputData>{
    people: {
        "category": false, //
        "name": true,
        "height": true,
        "mass": true,
        "hair_color": true,
        "skin_color": true,
        "eye_color": true,
        "birth_year": true,
        "gender": true,
        "homeworld": true,
        "species": false, //
        "vehicles": false, //
        "starships": false, //
        "films": true,
    },
    planets: {
        "category": false, //
        "name": true,
        "diameter": true,
        "climate": true,
        "gravity": true,
        "terrain": true,
        "population": true,
        "surface_water": true,
        "rotation_period": true,
        "orbital_period": true,
        "residents": false, //
        "films": true,
    },
    starships: {
        "category": false, //
        "name": true,
        "model": true,
        "manufacturer": true,
        "cost_in_credits": true,
        "length": true,
        "max_atmosphering_speed": true,
        "crew": true,
        "passengers": true,
        "cargo_capacity": true,
        "consumables": true,
        "hyperdrive_rating": true,
        "MGLT": true,
        "starship_class": true,
        "pilots": false, //
        "films": true,
    },
    species: {
        "category": false, //
        "name": true,
        "classification": true,
        "designation": true,
        "average_height": true,
        "skin_colors": true,
        "hair_colors": true,
        "eye_colors": true,
        "average_lifespan": true,
        "homeworld": true,
        "language": true,
        "people": false, //
        "films": true,
    },
    vehicles: {
        "category": false, //
        "name": true,
        "model": true,
        "manufacturer": true,
        "cost_in_credits": true,
        "length": true,
        "max_atmosphering_speed": true,
        "crew": true,
        "passengers": true,
        "cargo_capacity": true,
        "consumables": true,
        "vehicle_class": true,
        "pilots": false, //
        "films": true,
    },
    films: {
        "category": false, //
        "title": true,
        "episode_id": true,
        "release_date": true,
        "director": true,
        "producer": true,
        "opening_crawl": true,
        "characters": false, //    
        "planets": false, //
        "starships": false, //
        "vehicles": false, //
        "species": false, //
    },
};