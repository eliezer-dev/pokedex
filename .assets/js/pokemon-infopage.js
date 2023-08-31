const pokemonImage = document.getElementById('pokemon-image')

const pokemonId = sessionStorage.getItem('pokemonId')

const sectionInfo = document.querySelector('.sectionInfo')

pokemonResum(pokemonId)

function pokemonResum(pokemonId) {
    pokeApi.getPokemon(pokemonId).then((pokemon = {}) => showPokemonDetails(pokemon))
    
}





function removeAllPokemons() {
    const pokemonsLi = document.querySelectorAll('.pokemon')
    pokemonsLi.forEach(pokemon => {
        pokemon.remove()
    })
    loadMoreButton.remove()
    document.querySelector('h1').remove() 
}

function showPokemonDetails(pokemon) {
    
    let newHTML =  
        `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="pokemonName">${pokemon.name}</span>
                <div >                      
                        ${pokemon.types.map((type) =>`<span class="pokemonType ${pokemon.types[0]}">${type}</span>`).join('')}                        
                </div>
                <div>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                
        </li>`
    pokemonImage.innerHTML += newHTML
    newHTML = 
    `<div>
        <h2> Detalhes:  </h2
        <ul class="information">
        <li>Tamanho: ${pokemon.height} cm </li>
        <li>Peso: ${pokemon.weight} kg </li>
        <li>Habilidades: 
            <ul>
                ${pokemon.abilities.map((ability) =>`<li>${ability}</li>`).join('')}</li>
            </ul>
        </ul>
    </div>
    
    
    
    `
    sectionInfo.innerHTML += newHTML
}