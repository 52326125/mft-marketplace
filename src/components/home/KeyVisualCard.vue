<script setup lang="ts">
import kvPic from '@/assets/images/kv.png'

import CollectionCardDescription from '@/components/home/CollectionCardDescription.vue'
import BaseImg from '@/components/base/BaseImg.vue'
</script>
<template>
  <div class="key-visual-card-wrapper">
    <BaseImg :src="kvPic" :w="5" :h="4" />
    <CollectionCardDescription class="key-visual-card-description" />
  </div>
</template>
<style scoped lang="sass">
.key-visual-card-wrapper
  border-radius: 20px
  overflow: hidden
  background-color: $background-secondary

.key-visual-card-description
  padding: 22px 20px
</style>
