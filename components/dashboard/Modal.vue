<template>
  <div class="modal">
    <div class="modal__overlay" @click="handleModal()"></div>
    <div class="modal__content">
      <div class="modal__close" @click="handleModal()">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 0C5.81855 0 0 5.81855 0 13C0 20.1815 5.81855 26 13 26C20.1815 26 26 20.1815 26 13C26 5.81855 20.1815 0 13 0ZM19.3742 16.4125C19.6206 16.6589 19.6206 17.0573 19.3742 17.3036L17.2984 19.3742C17.052 19.6206 16.6536 19.6206 16.4073 19.3742L13 15.9355L9.5875 19.3742C9.34113 19.6206 8.94274 19.6206 8.69637 19.3742L6.62581 17.2984C6.37944 17.052 6.37944 16.6536 6.62581 16.4073L10.0645 13L6.62581 9.5875C6.37944 9.34113 6.37944 8.94274 6.62581 8.69637L8.70161 6.62056C8.94798 6.37419 9.34637 6.37419 9.59274 6.62056L13 10.0645L16.4125 6.62581C16.6589 6.37944 17.0573 6.37944 17.3036 6.62581L19.3794 8.70161C19.6258 8.94798 19.6258 9.34637 19.3794 9.59274L15.9355 13L19.3742 16.4125Z"
            fill="white"
          />
        </svg>
      </div>
      <span v-if="loading" class="modal__loading">Loading...</span>
      <div v-else>
        <div class="modal__header">
          <div class="character">
            <img
              :src="
                dataPokemon.sprites.other['official-artwork']['front_default']
              "
            />
          </div>
        </div>
        <div class="modal__body">
          <div class="stats">
            <span class="stats__item">
              <span class="stats__title">Name: </span
              ><span class="stats__value">{{ dataPokemon.name }}</span>
            </span>
            <span class="stats__item">
              <span class="stats__title">Weight: </span
              ><span class="stats__value">{{ dataPokemon.weight }}</span>
            </span>
            <span class="stats__item">
              <span class="stats__title">Height: </span
              ><span class="stats__value">{{ dataPokemon.height }}</span>
            </span>
            <span class="stats__item">
              <span class="stats__title">Types: </span
              ><span class="stats__value">{{ formatTypes }}</span>
            </span>
          </div>
        </div>
        <div class="modal__footer">
          <ButtonLink
            variant="primary"
            :title="!isCopied ? 'Share to my friends' : 'Copied to clipboard!'"
            :is-button="true"
            :action="shareWithFriends"
          />
          <span
            class="is-fav"
            :class="{ active: pokemon.isFavorite }"
            @click="markFavorite(pokemon)"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6052 0.904438L8.43178 7.62704L1.33161 8.70855C0.0583408 8.9015 -0.451939 10.5415 0.471424 11.4809L5.60824 16.7107L4.39329 24.0984C4.1746 25.4338 5.52076 26.4341 6.64824 25.8096L13 22.3213L19.3518 25.8096C20.4792 26.429 21.8254 25.4338 21.6067 24.0984L20.3918 16.7107L25.5286 11.4809C26.4519 10.5415 25.9417 8.9015 24.6684 8.70855L17.5682 7.62704L14.3948 0.904438C13.8262 -0.293851 12.1787 -0.309084 11.6052 0.904438Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Pokemon, PokemonResult } from 'global66-pokemon'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop({ required: true }) readonly pokemon!: Pokemon
  @Prop({ required: true }) readonly handleModal!: Function
  @Prop({ required: true }) readonly markFavorite!: Function

  loading: Boolean = true
  dataPokemon?: PokemonResult
  isCopied: Boolean = false

  async getPokemon(): Promise<void> {
    const { data } = await this.$axios.get(`/pokemon/${this.pokemon?.name}`)
    this.loading = false
    this.dataPokemon = data
  }

  copyClipboard(data: string): void {
    this.isCopied = true
    const listener = (e: ClipboardEvent) => {
      if (e !== undefined && e?.clipboardData !== null) {
        e.clipboardData.setData('text/plain', data)
        e.preventDefault()
        document.removeEventListener('copy', listener)
      }
    }
    document.addEventListener('copy', listener)
    document.execCommand('copy')
    setTimeout(() => {
      this.isCopied = false
    }, 3000)
  }

  shareWithFriends(): void {
    this.copyClipboard(
      `${this.dataPokemon?.name}, ${this.dataPokemon?.weight}, ${this.dataPokemon?.height}, ${this.formatTypes}`
    )
  }

  get formatTypes(): string {
    let format = ''
    this.dataPokemon?.types.forEach((type, index) => {
      if (this.dataPokemon !== undefined) {
        format +=
          type.type.name +
          (index === this.dataPokemon.types.length - 1 ? '' : ', ')
      }
    })
    return format
  }

  mounted() {
    this.getPokemon()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
.modal {
  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.59);
  }
  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    background-color: $white;
    border-radius: 5px;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  &__loading {
    padding: 20px;
    text-align: center;
    display: block;
  }
  &__header {
    background-image: url('/characters/cover.png');
  }
  &__body {
    padding: 20px 40px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  &__footer {
    padding: 0 40px 30px 40px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      padding: 0 20px 20px 20px;
    }
  }
  &__close {
    position: absolute;
    top: 13px;
    right: 13px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    &__content {
      width: 570px;
    }
  }
}
.character {
  width: 180px;
  height: 180px;
  margin: auto;
  img {
    max-width: 100%;
  }
}

.stats {
  display: flex;
  flex-direction: column;
  &__item {
    padding: 10px 0;
    border-bottom: 1px solid $border-color-stat;
    font-weight: bold;
    font-size: 18px;
    color: $color-stat;
  }
  &__value {
    text-transform: capitalize;
  }
}

.is-fav {
  background-color: $star-bg;
  width: 44px;
  height: 44px;
  color: $star-inactive;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    color: $star-active;
  }
}
</style>
