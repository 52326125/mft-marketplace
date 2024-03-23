<script setup lang="ts">
import type { Component } from 'vue'

interface BaseButtonProps {
  variant?: 'fill' | 'outlined'
  prefix?: Component
}

withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'fill',
})

defineEmits(['click'])

defineSlots<{
  default(): Component
  prefix(): Component
}>()
</script>
<template>
  <button class="base-button-wrapper" :class="variant" @click="$emit('click')">
    <slot name="prefix" v-if="$slots.prefix || prefix">
      <prefix />
    </slot>
    <slot />
  </button>
</template>
<style scoped lang="sass">
.base-button-wrapper
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  padding: 19px 50px
  border-radius: 20px
  border: none
  font-size: 16px
  line-height: 22px
  cursor: pointer
  transition: all .5s
  color: white
  &:hover
    filter: brightness(120%)
  &.fill
    background: $primary
  &.outlined
    border: 2px solid $primary
    background-color: transparent

@media (max-width: 375px)
  .base-button-wrapper
    width: 100%
</style>
