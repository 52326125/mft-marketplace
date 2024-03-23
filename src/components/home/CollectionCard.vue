<script setup lang="ts">
import collection1Pic from '@/assets/images/collection1.png'
import profile1 from '@/assets/images/profile1.png'

import CollectionCardDescription from '@/components/home/CollectionCardDescription.vue'
import BaseImg from '@/components/base/BaseImg.vue'
</script>
<template>
  <div class="collection-card-wrapper">
    <BaseImg class="collection-card-img" :src="profile1" :w="1" :h="1" />
    <div class="other-image">
      <BaseImg class="collection-card-img" :src="profile1" :w="1" :h="1" />
      <BaseImg class="collection-card-img" :src="profile1" :w="1" :h="1" />
      <div class="total-image-pseudo">1025+</div>
    </div>
    <CollectionCardDescription />
  </div>
</template>
<style scoped lang="sass">
.collection-card-wrapper
  max-width: 330px
  width: 330px
  display: flex
  flex-direction: column
  gap: 15px

.collection-card-img
  border-radius: 20px

.other-image
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 15px

.total-image-pseudo
  border-radius: 20px
  background-color: $primary
  height: 100%
  width: 100%
  max-width: 100px
  font-size: 22px
  line-height: 35px
  display: flex
  align-items: center
  justify-content: center
</style>
