<script setup lang="ts">
import { type RouterLinkProps } from 'vue-router'

interface BaseLinkProps extends RouterLinkProps {}

const props = defineProps<BaseLinkProps>()
</script>
<template>
  <RouterLink v-bind="props" class="">
    <div class="content-wrapper">
      <slot />
    </div>
  </RouterLink>
</template>
<style scoped lang="sass">
.content-wrapper
  padding: 12px 20px
  font-weight: 600
</style>
