<template>
  <BaseFadeUp>
  <slot :isShown="isShown"  />
  </BaseFadeUp>
</template>

<script lang="ts" setup>
const isShown = ref(false);
onMounted(async () => {
  await helpers.huwaits(500)
  isShown.value = true
})
</script>

<style>

</style>