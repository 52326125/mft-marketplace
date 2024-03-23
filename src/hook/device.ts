import { computed, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

type DeviceType = 'desktop' | 'tablet' | 'mobile'

export function useDevice() {
  const width = ref<number>(0)

  onMounted(() => {
    width.value = document.documentElement.clientWidth
    useEventListener(window, 'resize', () => (width.value = document.documentElement.clientWidth))
  })

  const deviceType = computed<DeviceType>(() => {
    if (width.value <= 375) return 'mobile'
    if (width.value <= 834) return 'tablet'
    return 'desktop'
  })
  return { width, deviceType }
}
