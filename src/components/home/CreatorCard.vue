<script setup lang="ts">
import BaseImg from '@/components/base/BaseImg.vue'

interface CreatorCardProps {
  number: number
  name: string
  profile: string
  revenue: number
}

defineProps<CreatorCardProps>()
</script>
<template>
  <div class="creator-card-wrapper">
    <div class="creator-card-profile">
      <BaseImg :src="profile" :w="1" :h="1" />
    </div>
    <div class="creator-card-description">
      <span class="creator-card-description__name">{{ name }}</span>
      <br />
      <span class="creator-card-description__revenue-prefix">Total Sales: </span>
      <span class="creator-card-description__revenue">{{ revenue }} ETH</span>
    </div>
    <div class="creator-card-counter">
      {{ number }}
    </div>
  </div>
</template>
<style scoped lang="sass">
.creator-card-wrapper
  box-sizing: border-box
  display: flex
  flex-direction: column
  align-items: center
  gap: 20px
  position: relative
  padding: 20px
  width: 240px
  background-color: $background-secondary
  border-radius: 20px

.creator-card-profile
  border-radius: 50%
  overflow: hidden
  width: 100%
  max-width: 120px

.creator-card-description
  text-align: center
  font-size: 16px
  line-height: 22px
  &__name
    font-size: 22px
    line-height: 30px
    font-weight: 600
    margin-bottom: 5px
  &__revenue-prefix
    color: $caption


.creator-card-counter
  position: absolute
  top: 20px
  left: 20px
  width: 30px
  height: 30px
  background-color: $background
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  color: $caption

@media (max-width: 834px)
  .creator-card-wrapper
    flex-direction: row
    width: 100%
    max-width: 330px

  .creator-card-profile
    max-width: 60px

  .creator-card-counter
    top: 12px
    left: 12px
</style>
