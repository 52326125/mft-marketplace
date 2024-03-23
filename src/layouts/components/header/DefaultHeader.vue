<script setup lang="ts">
import UserSvg from '@/assets/icons/user.svg?component'
import LogoSvg from '@/assets/icons/logo.svg?component'
import LogoMobileSvg from '@/assets/icons/logo.mobile.svg?component'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseLink from '@/components/base/BaseLink.vue'
import HamburgerMenu from '@/layouts/components/header/HamburgerMenu.vue'
import { useDevice } from '@/hook/device'

const { deviceType } = useDevice()
</script>
<template>
  <header class="header-wrapper">
    <RouterLink to="/">
      <LogoSvg v-if="deviceType === 'desktop'" />
      <LogoMobileSvg v-else />
    </RouterLink>
    <div v-if="deviceType === 'desktop'" class="header-action-wrapper">
      <BaseLink to="/">Marketplace</BaseLink>
      <BaseLink to="/">Rankings</BaseLink>
      <BaseLink to="/">Connect a wallet</BaseLink>
      <BaseButton :prefix="UserSvg" class="header-action-sign-up-button">Sign Up</BaseButton>
    </div>
    <HamburgerMenu v-else class="header-action-wrapper__mobile" />
  </header>
</template>
<style scoped lang="sass">
.header-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  padding: 20px 50px

.header-action-wrapper
  display: flex
  align-items: center
  gap:10px
  &__mobile
    justify-content: end

.header-action-sign-up-button
  padding: 19px 30px

@media (max-width: 834px)
  .header-wrapper
    padding: 15px 30px
</style>
