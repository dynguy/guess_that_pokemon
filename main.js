let apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "marshtomp",
};

// destructuring
const { url, type, id } = apiData;

const apiUrl = `${url}${type}/${id}`;

const searchPokemon = () => {
  
}

fetch(apiUrl)
  .then((data) => data.json())
  .then((pokemon) => generateHtml(pokemon));

const typings = (data) => {
  if (data.types.length == 1) {
    return data.types[0].type.name;
  } else {
    return data.types[0].type.name + " - " + data.types[1].type.name;
  }
};

const generateHtml = (data) => {
  console.log(data);
  const html = `
  <div class = "pokedex_container"> 
  <div class = "name">Pokédex</div>       
  <div class = "name">Num ${data.id}. ${data.name}</div> 
        <img src=${data.sprites.front_default}>
        <img src=${data.sprites.back_default}>
        <div class = "details_box">
            <span class = "tag_details">
            Type: ${typings(data)}
            </span>    
            <span class = "tag_details">Height: ${data.height / 10} m</span>
            <span class = "tag_details">Weight: ${data.weight / 10} kg</span>
            <span class = "tag_details">Generation: ${data.generation}</span>
        </div>
</div>
    `;
  const pokemonDiv = document.querySelector(".pokemon");
  pokemonDiv.innerHTML = html;
};
