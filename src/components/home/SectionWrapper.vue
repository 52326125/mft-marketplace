<script setup lang="ts"></script>
<template>
  <section class="section-wrapper">
    <slot />
  </section>
</template>
<style scoped lang="sass">
.section-wrapper
  padding: 80px 0

@media (max-width: 375px)
  .section-wrapper
    padding: 40px 0
</style>
