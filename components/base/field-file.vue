<template>
  <div>
    <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
      >Upload Resume *</label
    >
    <div
      class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6"
    >
      <div class="text-center">
        <SVGfile class="" />
        <div class="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            for="file-upload"
            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
          >
            <span>Upload a file</span>
            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
          </label>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs leading-5 text-gray-600">PDF, DOC up to 10MB</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SVGfile from "@/assets/icons/app/file-attachment-01.svg";
</script>

<style lang="scss" scoped>
svg {
  @apply mx-auto h-12 w-12 text-gray-300;
}
</style>
