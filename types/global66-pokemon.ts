declare module 'global66-pokemon' {
  interface Pokemon {
    name: string
    url: string
    isFavorite?: boolean
  }

  interface PokemonResults {
    count: number
    next: string
    previous: string | null
    results: Array<Pokemon>
  }
}
