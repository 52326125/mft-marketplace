<script setup lang="ts">
import { type Component } from 'vue'
import { useDevice } from '@/hook/device'

import SectionWrapper from '@/components/home/SectionWrapper.vue'

const { deviceType } = useDevice()

defineSlots<{
  default(): Component
  title(): Component
  action(): Component
}>()
</script>
<template>
  <SectionWrapper class="section-wrapper">
    <div class="section-title-wrapper">
      <div class="section-title-wrapper__title">
        <slot name="title" />
      </div>
      <slot name="action" v-if="deviceType !== 'mobile' && $slots.action" />
    </div>
    <slot />
    <div class="section-title-action__mobile">
      <slot name="action" v-if="deviceType === 'mobile' && $slots.action" />
    </div>
  </SectionWrapper>
</template>
<style scoped lang="sass">
.section-wrapper
  display: flex
  flex-direction: column
  gap:60px

.section-title-wrapper
  display: flex
  align-items: end
  justify-content: space-between
  margin-bottom: 60px
  &__title
    flex-basis: 50%

@media (max-width: 874px)
  .section-wrapper
    gap: 40px

  .section-title-action__mobile
    width: 100%

@media (max-width: 375px)
  .section-title-wrapper__title
    flex-basis: 100%
</style>
