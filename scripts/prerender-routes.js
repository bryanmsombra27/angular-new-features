(async () => {
  const TOTAL_POKEMONS = 10;
  const TOTAL_PAGES_POKEMONS = 5;

  const fs = require("fs");

  const pokemonsIds = Array.from(
    {
      length: TOTAL_POKEMONS,
    },
    (_, i) => i + 1
  );
  const pokemonsPagesIds = Array.from(
    {
      length: TOTAL_PAGES_POKEMONS,
    },
    (_, i) => i + 1
  );

  let fileContent = pokemonsIds.map((item) => `/pokemons/${item}`).join("\n");
  let fileContentPages = pokemonsPagesIds
    .map((item) => `/pokemons/page/${item}`)
    .join("\n");

  fileContent = fileContent.concat("\n", fileContentPages);

  const pokemonList = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`
  ).then((res) => res.json());

  fileContent += "\n";
  fileContent += pokemonList.results
    .map((pokemon) => `/pokemons/${pokemon.name}`)
    .join("\n");

  fs.writeFileSync("routes.txt", fileContent);

  console.log("Routes Generado");
  process.exit(0);
})();
