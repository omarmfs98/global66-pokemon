<template>
  <div class="h-screen">
    <div class="container">
      <LazyDashboardSearch
        :pokemons="data"
        :set-data="setData"
        :is-show-all="isShowAll"
        :handle-show-data="handleShowData"
      />
    </div>
    <LazyDashboardList
      :pokemons="data"
      :set-data="setData"
      :is-show-all="isShowAll"
      :handle-show-data="handleShowData"
    />
  </div>
</template>

<script lang="ts">
import { Pokemon } from 'global66-pokemon'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  async asyncData({ $axios }) {
    const { results } = await $axios.$get('/pokemon')
    results.forEach((pokemon: Pokemon) => (pokemon.isFavorite = false))
    return { data: results }
  },
  layout: 'dashboard',
})
export default class ListPokemons extends Vue {
  data?: Array<Pokemon>
  isShowAll: Boolean = true
  setData(values: Array<Pokemon>): void {
    this.data = values
  }

  handleShowData(value: Boolean): void {
    this.isShowAll = value
  }

  head() {
    return {
      title: 'Dashboard | Global 66',
    }
  }
}
</script>

<style lang="scss">
.h-screen {
  min-height: calc(100vh - 35px);
}
</style>
