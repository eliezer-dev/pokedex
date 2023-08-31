const pokemonList = document.getElementById('pokemonList')

const loadMoreButton = document.getElementById('loadMore')

const pageInfo = document.querySelector('title')

const limit = 10
let offset = 0

const maxRecord = 151

if (pageInfo.dataset.page === "initialPage") {
    loadPokemonsItens(offset,limit)
    loadMoreButton.addEventListener('click', () => {
        offset += limit
        const qteRecordNextPage = offset + limit
        if (qteRecordNextPage >= maxRecord) {
            const newLimit = maxRecord - offset
            loadPokemonsItens(offset,newLimit)
            loadMoreButton.parentElement.removeChild(loadMoreButton)
        
        }else{      
            loadPokemonsItens(offset,limit)
        }
    })
}


function loadPokemonsItens(offset,limit) {
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => { 
        const newHTML =  pokemons.map((pokemon) => 
            `<li class="pokemon ${pokemon.type}">
                    <span class="number" name="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">                      
                            ${pokemon.types.map((type) =>`<li class="type ${type}">${type}</li>`).join('')}                        
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
        </li>     
        `
        ).join('')
        pokemonList.innerHTML += newHTML
        AddClickPokemon()
        
    })
    
    
}



function AddClickPokemon() {
    
    const pokemonsLi = document.querySelectorAll('.pokemon')
    pokemonsLi.forEach(pokemon => {
        pokemon.addEventListener('click', function () {
            const pokemonId = (pokemon.children.namedItem('number')).innerText[1]
            sessionStorage.setItem('pokemonId', pokemonId)
            window.location.href="pokemon.html"
            //removeAllPokemons()
            
        })
    })

}






