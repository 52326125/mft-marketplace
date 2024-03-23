<script setup lang="ts">
import type { Component } from 'vue'

import LogoSvg from '@/assets/icons/logo.svg?component'
import DiscordSvg from '@/assets/icons/discord.svg?component'
import YoutubeSvg from '@/assets/icons/youtube.svg?component'
import TwitterSvg from '@/assets/icons/twitter.svg?component'
import InstagramSvg from '@/assets/icons/instagram.svg?component'

import DefaultFooterItem from '@/layouts/components/footer/DefaultFooterItem.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

interface SocialMediaLink {
  icon: Component
  href: string
}

const socialMediaLinks: SocialMediaLink[] = [
  { icon: DiscordSvg, href: 'https://www.discord.com/' },
  { icon: YoutubeSvg, href: 'https://www.youtube.com/' },
  { icon: TwitterSvg, href: 'https://www.twitter.com/' },
  { icon: InstagramSvg, href: 'https://www.instagram.com/' },
]
</script>
<template>
  <footer class="footer-wrapper">
    <div class="footer-content">
      <DefaultFooterItem>
        <template #title>
          <LogoSvg />
        </template>
        <template #default>
          <div class="footer-item-content">
            <span>NFT marketplace UI created <br />with Anima for Figma.</span>
            <span>Join our community</span>
            <div class="social-media-link-wrapper">
              <a v-for="item in socialMediaLinks" :key="item.href" :href="item.href">
                <component :is="item.icon" />
              </a>
            </div>
          </div>
        </template>
      </DefaultFooterItem>
      <DefaultFooterItem>
        <template #title> Explore </template>
        <template #default>
          <div class="footer-item-content">
            <RouterLink to="/">Marketplace</RouterLink>
            <RouterLink to="/">Rankings</RouterLink>
            <RouterLink to="/">Connect a wallet</RouterLink>
          </div>
        </template>
      </DefaultFooterItem>
      <DefaultFooterItem>
        <template #title> Join our weekly digest </template>
        <template #default>
          <div class="footer-item-content">
            <span> Get exclusive promotions & updates <br />straight to your inbox. </span>
            <BaseInput placeholder="Enter your email here">
              <template #suffix>
                <BaseButton> Subscribe </BaseButton>
              </template>
            </BaseInput>
          </div>
        </template>
      </DefaultFooterItem>
    </div>
    <div class="footer-copyright-statement">Ⓒ NFT Market. Use this template freely.</div>
  </footer>
</template>
<style scoped lang="sass">
.footer-wrapper
  padding: 40px 0
  max-width: 1050px
  margin: 0 auto

.footer-content
  margin-bottom: 40px
  display: flex
  justify-content: space-between
  flex-wrap: wrap

.footer-item-content
  display: flex
  flex-direction: column
  gap: 20px
  font-size: 16px
  line-height: 22px
  font-weight: 400
  color: $secondary

.social-media-link-wrapper
  display: flex
  gap: 10px

.footer-copyright-statement
  border-top: 1px solid $caption
  padding-top: 20px
  font-size: 12px
  color: $secondary

@media (max-width: 834px)
  .footer-wrapper
    max-width: 690px
    margin: 0 72px

  .footer-content
    flex-direction: column
    gap: 30px

@media (max-width: 375px)
  .footer-wrapper
      max-width: 315px
      margin: 0 30px
</style>
