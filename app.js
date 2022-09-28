const URL = "https://pokeapi.co/api/v2/pokemon/"
const imageUrl = "http://pokeapi.co/media/sprites/pokemon/"
const ABI = "https://pokeapi.co/api/v2/move/"

const form = document.querySelector('form')
const titleDiv= document.querySelector('#titleDiv')
const imgDiv = document.querySelector('#imgDiv')
const Img = document.querySelector('#pokemonimg')

//random select 3 pokemons
// needs a button
// you are those three pokemons

async function fetchFrom() {
    const input = document.querySelector('#input')
    try {
        let response = await fetch(`${URL}${input.value}/`, {
            method:"GET",
            body:JSON.stringify()
        })
        if ( response.ok) {
            const pokemon = await response.json()
            createPokemon(pokemon)
            
        }
    } catch (e) {
        console.log(e)
    }



}

function createPokemon(pokemon) {
    const h3 =  document.querySelector('h3')
    const title = pokemon.name.toUpperCase()
    h3.innerText = `You've got ${title}!`
    const id = pokemon.sprites.front_default
    Img.src = id
    Img.width = 130
    Img.height= 130
    imgDiv.appendChild(Img)

}

function clearImg() {
    
    Img.src = ""
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetchFrom()
    clearImg()

})