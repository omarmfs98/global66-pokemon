declare module 'global66-pokemon' {
  interface Pokemon {
    name: string
    url: string
    isFavorite?: boolean
  }
  interface Type {
    slot: number
    type: {
      name: string
      url: string
    }
  }
  interface PokemonResult {
    abilities: Array<any>
    forms: Array<any>
    height: number
    id: number
    moves: Array<any>
    name: string
    order: number
    species: object
    sprites: object
    stats: Array<any>
    types: Array<Type>
    weight: number
  }
}
