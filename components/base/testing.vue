<template>
  <div>
    <h1>
      test
      {{ props.show }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ show: boolean }>();

// export default defineComponent({
//   setup() {},
// });
</script>

<style></style>
