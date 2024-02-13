"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/";
let pokemon;
window.onload = init;

async function init() {
    try {

    // fetchanrop
    const response = await fetch(url);
    pokemon = await response.json();

    displayPokemon(pokemon);
    console.log("hej");
    
} catch {
    // catch om något går fel
    document.getElementById("error").innerHTML = "<p>Något gick fel!</p>";
}
}

function displayPokemon(pokemon) {
    const pokemonEl = document.getElementById("display");
    pokemonEl.innerHTML = ``;
    pokemon.forEach((pokemon) => {
        pokemonEl.innerHTML += `

            <h2>${pokemon.name}</h2>
            `;
        
    });
}
