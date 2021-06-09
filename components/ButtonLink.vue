<template>
  <div>
    <NuxtLink v-if="!isButton" :to="to" class="btn" :class="'btn--' + variant">
      <img v-if="icon !== ''" :src="icon" alt="Icon" class="btn--icon" />
      {{ title }}</NuxtLink
    >
    <button
      v-else
      class="btn is-button"
      :class="'btn--' + variant"
      @click="action()"
    >
      <img v-if="icon !== 0" :src="icon" alt="Icon" class="btn--icon" />
      {{ title }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String,
    },
    to: {
      default: '',
      required: false,
      type: String,
    },
    variant: {
      default: 'default',
      required: false,
      type: String,
    },
    icon: {
      default: '',
      required: false,
      type: String,
    },
    isButton: {
      default: false,
      required: false,
      type: Boolean,
    },
    action: {
      default: () => undefined,
      required: false,
      type: Function,
    },
  },
})
</script>
