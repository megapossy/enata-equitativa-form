<template>
  <div>
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="file_input"
      >{{ props.label || "Upload File" }}</label
    >
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:p-3 file:bg-primary file:text-white file:me-4 file:bottom-0"
      aria-describedby="file_input_help"
      id="file_input"
      type="file"
    />
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
      PDF, DOC (max 5mb)
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label?: string;
}>();
</script>

<style></style>
