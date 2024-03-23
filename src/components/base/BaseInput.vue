<script setup lang="ts">
import { useDevice } from '@/hook/device'
import type { Component } from 'vue'

defineOptions({
  inheritAttrs: false,
})

defineSlots<{
  default(): Component
  suffix(): Component
}>()

const { deviceType } = useDevice()
</script>
<template>
  <div class="base-input-wrapper">
    <input v-bind="$attrs" />
    <div v-if="$slots.suffix && deviceType !== 'mobile'" class="base-input-suffix-wrapper">
      <slot name="suffix" />
    </div>
    <slot name="suffix" v-else />
  </div>
</template>
<style scoped lang="sass">
.base-input-wrapper
  display: flex
  background-color: white
  border-radius: 20px
  overflow: hidden
  width: max-content
  input
    padding: 19px 20px
    font-size: 16px
    color: $background
    outline: none
    width: 209px
    line-height: 22px
    border: none
    border-radius: 20px

@media (max-width: 375px)
  .base-input-wrapper
    flex-direction: column
    gap: 16px
    background-color: unset
    input
      padding: 12px 20px
</style>
