<script setup lang="ts">
import DefaultHeader from '@/layouts/components/header/DefaultHeader.vue'
import DefaultFooter from '@/layouts/components/footer/DefaultFooter.vue'
</script>
<template>
  <div class="layout-wrapper">
    <DefaultHeader />
    <div class="layout-wrapper-inner">
      <main>
        <RouterView />
      </main>
    </div>
    <div class="footer-wrapper">
      <DefaultFooter />
    </div>
  </div>
</template>
<style scoped lang="sass">
.layout-wrapper-inner
  max-width: 1050px
  margin: 0 auto

.footer-wrapper
  background-color: $background-secondary

@media (max-width: 834px)
  .layout-wrapper-inner
    max-width: 690px
    margin: 0 72px

@media (max-width: 375px)
  .layout-wrapper-inner
    max-width: 315px
    margin: 0 30px
</style>
