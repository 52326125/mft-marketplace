<script setup lang="ts">
import profile1 from '@/assets/images/profile1.png'
</script>
<template>
  <div class="collection-description">
    <h5 class="collection-description__title">DSGN Animals</h5>
    <div class="collection-description__creator">
      <img :src="profile1" :width="24" :height="24" />
      <span>MrFox</span>
    </div>
  </div>
</template>
<style scoped lang="sass">
.collection-description
  display: flex
  flex-direction: column
  gap: 10px
  &__title
    font-size: 22px
    line-height: 35px
    font-weight: 600
    margin: 0
  &__creator
    display: flex
    gap: 12px
    align-items: center
    font-size: 16px
    line-height: 22px
</style>
