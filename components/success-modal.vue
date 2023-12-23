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

    <div class="flex flex-col justify-center items-center">
      <h1 class="text-5xl font-medium sm:text-6xl my-4 text-center">THANK YOU!</h1>
      <SVGcheck class="text-green-500 text-8xl" />
      <p class="text-center px-8 py-4 mb-6">
        Thanks a bunch for filling that out. It means a lot to us, just like you do! We
        really appreciate you giving us a moment of your time today. Thanks for being you.
      </p>
    </div>
  </BaseModal>
</template>

<script lang="ts" setup>
import SVGcheck from "@/assets/icons/app/check.svg";

const props = defineProps<{ show: boolean }>();
const emits = defineEmits<{
  (e: "update:show", v: boolean): void;
}>();
</script>

<style></style>
