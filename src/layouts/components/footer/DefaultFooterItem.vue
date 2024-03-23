<script setup lang="ts"></script>
<template>
  <div class="footer-item-wrapper">
    <div class="footer-item-title">
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
<style scoped lang="sass">
.footer-item-title
  font-size: 22px
  line-height: 35px
  font-weight: 700
  margin-bottom: 25px

.footer-item-description
  display: flex
  flex-direction: column
  gap: 20px
  font-size: 16px
  line-height: 22px
  font-weight: 400
  color: $secondary
</style>
