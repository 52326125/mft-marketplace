<script setup lang="ts">
import { SwiperSlide, Swiper } from 'swiper/vue'

import TitleSection from '@/components/home/TitleSection.vue'
import CollectionCard from '@/components/home/CollectionCard.vue'
</script>
<template>
  <TitleSection>
    <template #title>
      <h3 class="section-title__title">Trending Collection</h3>
      <span class="section-title__description">
        Checkout our weekly updated trending collection.
      </span>
    </template>
    <template #default>
      <div style="width: 100%">
        <Swiper slides-per-view="auto" :space-between="30" free-mode>
          <SwiperSlide v-for="(item, index) in 10" :key="index" style="width: fit-content">
            <CollectionCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </template>
  </TitleSection>
</template>
<style scoped lang="sass">
.section-title
  &__title
    font-size: 38px
    line-height: 45px
    font-weight: 600
    margin-top: 0
    margin-bottom: 10px
  &__description
    font-size: 22px
    line-height: 35px

.collection-card-list
  display: flex
  gap: 30px

@media (max-width: 834px)
  .section-title
    &__title
      font-size: 28px
      line-height: 39px
    &__description
      font-size: 16px
      line-height: 22px
</style>
