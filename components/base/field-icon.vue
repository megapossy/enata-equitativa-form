<template>
  <div class="">
    <label
      :for="props.name"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
      >{{ props.label }}</label
    >

    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
      >
        <slot />
      </div>
      <input
        type="text"
        @input="emits('update:modelValue', ($event.target as any).value)"
        :id="props.name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-10"
        :placeholder="props.placeholder"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  modelValue: string;
  label: string;
  placeholder?: string;
  type: "email" | "text";
}>();

const emits = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();
</script>
