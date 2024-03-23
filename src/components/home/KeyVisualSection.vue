<script setup lang="ts">
import { useDevice } from '@/hook/device'

import RocketLaunchSvg from '@/assets/icons/rocketLaunch.svg?component'

import SectionWrapper from '@/components/home/SectionWrapper.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import KeyVisualCard from '@/components/home/KeyVisualCard.vue'

interface Statistic {
  summary: string
  category: string
}

const { deviceType } = useDevice()

const statistics: Statistic[] = [
  { summary: '240k+ ', category: 'Total Sale' },
  { summary: '100k+ ', category: 'Auctions' },
  { summary: '240k+ ', category: 'Artists' },
]
</script>
<template>
  <SectionWrapper>
    <div class="key-visual-wrapper">
      <div class="key-visual-description">
        <h1 class="key-visual-description__title">Discover digital art & Collect NFTs</h1>
        <p class="key-visual-description__intro">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
          20k NFT artists.
        </p>
      </div>
      <div class="key-visual-card">
        <KeyVisualCard />
      </div>
      <div class="key-visual-bottom">
        <BaseButton class="key-visual-bottom__action">
          <template #prefix>
            <RocketLaunchSvg style="fill: white" />
          </template>
          Get Started
        </BaseButton>
        <div class="key-visual-bottom__statistic">
          <div v-for="(item, index) in statistics" :key="index">
            <h4 class="key-visual-bottom-statistic__summary">{{ item.summary }}</h4>
            <span class="key-visual-bottom-statistic__category">{{ item.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
<style scoped lang="sass">
.key-visual-wrapper
  display: grid
  grid-template: "a b" "c b"
  grid-template-columns: 1fr 1fr
  gap: 30px

.key-visual-description
  grid-area: a
  &__title
    font-size: 67px
    line-height: 73px
    font-weight: 600
    margin: 0
    margin-bottom: 20px
  &__intro
    font-size: 22px
    line-height: 35px
    margin-bottom: 30px

.key-visual-card
  grid-area: b

.key-visual-bottom
  grid-area: c
  &__action
    margin-bottom: 30px
  &__statistic
    display: flex
    gap: 30px
    &__summary
      margin: 0
      font-size: 28px
      line-height: 39px
      font-weight: 700
    &__category
      font-size: 24px
      line-height: 38px

@media (max-width: 834px)
  .key-visual-description
    &__title
      font-size: 38px
      line-height: 45px
    &__intro
      font-size: 16px
      line-height: 22px
  .key-visual-bottom
    &__statistic
      &-summary
        font-size: 22px
        line-height: 35px
      &-category
        font-size: 16px
        line-height: 22px

@media (max-width: 375px)
  .key-visual-wrapper
    display: flex
    flex-direction: column
</style>
