<template>
  <BaseModal
    :show="props.show"
    @update:show="emits('update:show', $event)"
    size="max-w-[900px]"
  >
    <template #title>
      <div class="flex flex-col items-center">
        <img
          class="h-12 sm:h-18 bg-slate-950 rounded-md p-3 mx-auto"
          src="/enata-logo-white.svg"
        />
      </div>
    </template>
    <Form />
    <template #footer>
      <button
        type="button"
        class="text-lg font-medium rounded-lg p-3 text-white bg-blue-600 border hover:bg-blue-800 mx-auto min-w-56"
      >
        Submit
      </button>
    </template>
  </BaseModal>
</template>

<script lang="ts" setup>
const props = defineProps<{ show: boolean }>();
const emits = defineEmits<{
  (e: "update:show", v: boolean): void;
}>();
</script>

<style></style>
