const button = document.getElementById("btn")
const pokemonDiv = document.getElementById("pokemonDiv")

const handlePick = () => {
    const apiData = {
        api: "https://pokeapi.co/api/v2/",
        type: "pokemon",
        id: Math.floor(Math.random() * 500)
    }
    
    const {api, type, id} = apiData
    const apiURL = `${api}${type}/${id}`

    fetch(apiURL)
        .then(res => res.json())
        .then(data => createPokemon(data))
        .catch(e => e)
pokemonDiv.innerHTML = "";
}

const createPokemon = (poke) => {

    console.log(poke)

    const title = document.createElement("h1")
    const localPokemon = document.createElement("div")
    const localName = document.createElement("h4")
    const img = document.createElement("img")
    const weight = document.createElement("span")
    const height = document.createElement("span")
    const ability = document.createElement("span")

    localPokemon.classList.add("localPokemon")
    title.classList.add("title")
    localName.classList.add("localName")
    img.classList.add("img")
    weight.classList.add("other")
    height.classList.add("other")
    ability.classList.add("other")

    pokemonDiv.appendChild(title)
    pokemonDiv.appendChild(localPokemon)
    localPokemon.appendChild(localName)
    localPokemon.appendChild(img)
    localPokemon.appendChild(weight)
    localPokemon.appendChild(height)
    localPokemon.appendChild(ability)

    title.innerHTML = "You are a:"
    localName.innerHTML = poke.name
    img.src = poke.sprites.front_default
    weight.innerHTML = `Weight: ${poke.weight}`
    height.innerHTML = `Height: ${poke.height}`
    ability.innerHTML = `Superpower: ${poke.abilities[0].ability.name}`
}

button.onclick = handlePick