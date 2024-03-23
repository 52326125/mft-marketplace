<script setup lang="ts">
import RocketLaunchSvg from '@/assets/icons/rocketLaunch.svg?component'
import profile1 from '@/assets/images/profile1.png'

import TitleSection from '@/components/home/TitleSection.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import CreatorCard from '@/components/home/CreatorCard.vue'

interface Creator {
  name: string
  profile: string
  revenue: number
}

const creators: Creator[] = Array(12).fill({
  name: 'Keepitreal',
  profile: profile1,
  revenue: 34.53,
})
</script>
<template>
  <TitleSection>
    <template #title>
      <h3 class="section-title__title">Top creators</h3>
      <span class="section-title__description">
        Checkout Top Rated Creators on the NFT Marketplace
      </span>
    </template>
    <template #action>
      <RouterLink to="/">
        <BaseButton variant="outlined">
          <template #prefix>
            <RocketLaunchSvg class="section-action-icon" />
          </template>
          View Rankings
        </BaseButton>
      </RouterLink>
    </template>
    <template #default>
      <div class="creator-card-list">
        <CreatorCard
          v-for="(creator, index) in creators"
          :key="index"
          :name="creator.name"
          :profile="creator.profile"
          :revenue="creator.revenue"
          :number="index + 1"
        />
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

.section-action-icon
  fill: $primary

.creator-card-list
  display: flex
  flex-wrap: wrap
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
