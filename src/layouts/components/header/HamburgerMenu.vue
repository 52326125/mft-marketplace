<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import HamburgerSvg from '@/assets/icons/hamburger.svg'

import BaseLink from '@/components/base/BaseLink.vue'

const displayMenu = ref(false)
const refHamburgerWrapper = ref<HTMLDivElement | null>(null)

onClickOutside(refHamburgerWrapper, () => (displayMenu.value = false))

const handleClick = () => {
  displayMenu.value = !displayMenu.value
}
</script>
<template>
  <div class="hamburger-wrapper" ref="refHamburgerWrapper">
    <button class="hamburger-button" @click="handleClick">
      <HamburgerSvg />
    </button>
    <ul class="hamburger-menu" :class="displayMenu ? 'show' : ''">
      <li>
        <BaseLink to="/">Marketplace</BaseLink>
      </li>
      <li>
        <BaseLink to="/">Rankings</BaseLink>
      </li>
      <li>
        <BaseLink to="/">Connect a wallet</BaseLink>
      </li>
      <li>
        <BaseLink to="/">Sign Up</BaseLink>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="sass">
.hamburger-button
  background-color: transparent
  border: none

.hamburger-menu
  position: absolute
  top: 34px
  right: 16px
  width: max-content
  background-color: $background-secondary
  padding: 20px 0
  display: none
  &.show
    display: block
</style>
