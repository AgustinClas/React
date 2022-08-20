import heroes from "../data/heroes";
//import heroes, { owners } from "../data/heroes";

//console.log(heroes);
//console.log(owners);


export const getHeroeById = (id) => {
    return heroes.find((heroe) => {return heroe.id === id});
}

//console.log(getHeroeById(4));

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => {return heroe.owner === owner});
}

//console.log(getHeroesByOwner("DC"));
 