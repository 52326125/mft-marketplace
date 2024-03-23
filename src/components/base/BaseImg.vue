<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'

interface BaseImageProps {
  w: number
  h: number
}

const props = defineProps<BaseImageProps>()
const { w, h } = toRefs(props)

defineOptions({
  inheritAttrs: false,
})

const isLoaded = ref(false)

const paddingBottom = computed(() => `${(h.value / w.value) * 100}%`)

function handleLoad() {
  isLoaded.value = true
}
</script>
<template>
  <div
    class="base-image-wrapper"
    :style="{ paddingBottom: paddingBottom }"
    :class="[isLoaded ? 'clear' : '', $attrs.class]"
  >
    <div class="loading-icon-wrapper" :class="isLoaded ? 'hide' : ''" />
    <img
      v-bind="$attrs"
      @load="handleLoad"
      :style="{ aspectRatio: `${w}/${h}` }"
      :class="!isLoaded ? 'hide' : ''"
    />
  </div>
</template>
<style scoped lang="sass">
.base-image-wrapper
  height: 0
  background-color: $background
  width: 100%
  overflow: hidden
  position: relative
  img
    position: absolute
    top: 0
    left: 0
    max-width: 100%
    width: 100%
    height: 100%
    object-fit: cover
    transition: opacity .3s linear

.loading-icon-wrapper
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)

  .loading-icon
    font-size: 2.5rem

.hide
  opacity: 0

.clear
  background-color: transparent
</style>
