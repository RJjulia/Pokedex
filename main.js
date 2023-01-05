function Pokemon(){
    // procurar na api os pokemons e retornar lista de nomes e url
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

    //transformar em obj (json)
    .then(response => response.json())
    .then((Pokemons) => {

        //loop e chamada da função data enviando cada um dos pokemos 
        Pokemons.results.forEach((pokemon) => fetchData(pokemon)); // fetch entrou como nome da função
    });
}

function fetchData(pokemon){
    // recebe o pokemon e guarda a  url em uma variavel 
    const url = pokemon.url;

    // faz requisição da url
    fetch(url)

    // transforma em obj (json)
    .then(response => response.json())

    // pega as info do pokemon e manda para função tela
    .then((pokeData) => {
        Todospokemons.push(pokeData)
        Tela(pokeData)
    });
}   

function Tela(pokemonData){ 
    // string template
    const template = ` <li class="card"> 
    <img class="card-image" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <section class="card-text">
      <div>
        <p>#${pokemonData.id}</p>
        <h2>${pokemonData.name}</h2>
      </div>
      <div>
        <h3>Tipo</h3>
        <p>${pokeTypes(pokemonData.types)}</p>
      </div>
    </section>
    </li>
    `;

    // seleciona a lista e insere a li dentro dela
    const pokedex = document.querySelector('.pokedex');
    pokedex.insertAdjacentHTML("beforeend", template);

}

function pokeTypes(Types){
    let template = '';

    Types.forEach(function(type) {
        template += `<li>${type.type.name}</li>`;
    });

    return template;

}

function Vazia(){
    //troca o conteudo da ul por uma string vazia
    documento.ul.innerHTML = "";
}
Pokemon()

 var Todospokemons = [];

 function buscarPokemon(name){
    debugger; // pausa
    var resultado = Todospokemons.find((pokemon) => {
        return pokemon.name == name;
    })
    console.log(resultado);
    Tela(resultado);
 }


        

   

    

