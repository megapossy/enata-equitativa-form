<template>
  <p v-if="props.message" class="mt-2 text-xs text-red-600 dark:text-red-400">
    <!-- <span class="font-medium">Oh, snapp!</span> Some error message. -->
    {{ props.message }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{ message: string }>();
</script>

<style></style>
