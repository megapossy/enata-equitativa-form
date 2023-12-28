<template>
  <BaseModal
    :show="props.show"
    @update:show="emits('update:show', $event)"
    size="max-w-[900px]"
  >
    <template #title>
      <div class="flex flex-col items-center w-full">
        <img
          class="h-12 sm:h-18 bg-slate-950 rounded-md p-3 mx-auto ms-0"
          src="/enata-logo-white.svg"
        />
        <h1
          v-if="cfs.fieldHasErrors"
          class="mx-auto my-4 mb-0 text-left sm:text-center text-red-600"
        >
          There are items missing. Please check below.
        </h1>
      </div>
    </template>
    <Form />
    <template #footer>
      <div class="p-4 md:p-5 mt-0 border-t w-full">
        <button
          data-testid="submit-form"
          :disabled="!cfs.fields.acknowledge || isLoading"
          @click="submit()"
          type="button"
          class="text-lg font-medium rounded-lg p-2 text-white bg-blue-600 border hover:bg-blue-800 mx-auto min-w-56 disabled:bg-blue-400 flex justify-center items-center"
        >
          Submit
          <div v-if="isLoading" class="ms-3" role="status">
            <BaseSpinner class="h-4 w-4" />
            <span class="sr-only">Loading...</span>
          </div>
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
const cfs = useCareerFormStore();
const props = defineProps<{ show: boolean }>();
const emits = defineEmits<{
  (e: "update:show", v: boolean): void;
  (e: "form-submitted"): void;
}>();

const isLoading = ref(false);

const submit = async () => {
  isLoading.value = true;
  try {
    cfs.validateFields();
    if (cfs.fieldHasErrors) return;

    await cfs.submitForm();
    await helpers.huwaits(200);
    emits("form-submitted");
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style></style>
