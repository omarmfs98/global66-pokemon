<template>
  <div class="search-pokemon">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
    >
      <path
        d="M17.7552 15.5622L14.2499 12.0574C14.0917 11.8992 13.8772 11.8113 13.6522 11.8113H13.0791C14.0495 10.5705 14.6261 9.00967 14.6261 7.31179C14.6261 3.27273 11.3528 0 7.31304 0C3.27329 0 0 3.27273 0 7.31179C0 11.3508 3.27329 14.6236 7.31304 14.6236C9.01121 14.6236 10.5723 14.0471 11.8134 13.0768V13.6498C11.8134 13.8748 11.9013 14.0892 12.0595 14.2474L15.5648 17.7522C15.8953 18.0826 16.4297 18.0826 16.7567 17.7522L17.7517 16.7573C18.0822 16.4269 18.0822 15.8926 17.7552 15.5622ZM7.31304 11.8113C4.82731 11.8113 2.81271 9.80061 2.81271 7.31179C2.81271 4.82648 4.82379 2.81223 7.31304 2.81223C9.79876 2.81223 11.8134 4.82297 11.8134 7.31179C11.8134 9.79709 9.80228 11.8113 7.31304 11.8113Z"
        fill="#BFBFBF"
      />
    </svg>
    <input v-model="query" type="text" placeholder="Search" @keyup="search" />
  </div>
</template>

<script lang="ts">
import { Pokemon } from 'global66-pokemon'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Search extends Vue {
  @Prop({ required: true }) readonly pokemons!: Array<Pokemon>
  @Prop({ required: true }) readonly setData!: Function
  @Prop({ required: true }) readonly isShowAll!: Boolean
  @Prop({ required: true }) readonly handleShowData!: Function

  query: string = ''
  initialResult: Array<Pokemon> = this.pokemons

  search(): void {
    if (this.query !== '') {
      this.setData(
        this.isShowAll
          ? this.initialResult.filter(({ name }) => name.includes(this.query))
          : this.initialResult.filter(
              ({ name, isFavorite }) => name.includes(this.query) && isFavorite
            )
      )
    } else {
      this.setData(
        this.isShowAll
          ? this.initialResult
          : this.initialResult.filter(({ isFavorite }) => isFavorite)
      )
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.search-pokemon {
  background: $white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  margin-bottom: 40px;
  .icon {
    padding: 16px 15px;
  }
  input {
    height: 100%;
    display: block;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    color: $color-input;
    font-family: 'Montserrat', sans-serif;
  }
}
</style>
