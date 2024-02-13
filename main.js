"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/";
let pokemon;
window.onload = init;

async function init() {
    try {
    // fetchanrop
    const response = await fetch(url);
    pokemon = await response.json();
    console.table(pokemon);
    displayPokemon(pokemon.results);

    
    
} catch {
    // catch om något går fel
    document.getElementById("error").innerHTML = "<p>Något gick fel!</p>";
}
}

function displayPokemon(pokemon) {
    const pokemonEl = document.getElementById("display");
    pokemonEl.innerHTML = ``;
    pokemon.forEach((results) => {
        pokemonEl.innerHTML += `

            <h2>${results.name}</h2>
            `;
        
    });
}
