class PokemonList {
  constructor(pokemons) {
    this.pokemons = pokemons.map(function(pokemon) {
      return new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)
    })
  }

  filter(searchTerm) {
    return searchTerm
      ? this.pokemons.filter(function(pokemon) {
          return pokemon.name.includes(searchTerm)
        })
      : []
  }

  static render(pokemons) {
    return pokemons.map(function(pokemon) {
      return pokemon.render()
    }).join('')
  }

  findByName(pokemonName) {
    return this.pokemons.find(function(pokemon) {
      return pokemon.name === pokemonName
    })
  }
}
