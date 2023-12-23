<template>
  <div>
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="file_input"
    >
      {{ props.label || "UploadFile" }}
    </label>
    <input
      :disabled="isLoading"
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg pe-10 cursor-pointer bg-gray-50 focus:outline-none file:p-3 file:bg-primary file:text-white file:me-4 file:shadow-none file:border-0 disabled:opacity-30 disabled:cursor-default"
      :accept="
        props.fileType === 'doc'
          ? '.pdf, .doc, .docx'
          : 'image/png, image/jpeg, , image/jpg'
      "
      type="file"
      ref="inputFileRef"
      @change="handleFile"
    />
    <div class="flex justify-between items-center">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
        {{ props.fileType === "doc" ? "PDF, DOC" : "JPG, PNG" }} (max 5mb)
      </p>
      <div>
        <div
          v-show="!isLoading"
          class="cursor-pointer me-3 -mt-[45px] text-sm bg-red-600 text-white rounded-full w-5 h-5 flex justify-center items-center hover:bg-red-800"
          @click="clear()"
        >
          <SVGclear class="relative top-[1px]" />
        </div>
        <BaseSpinner v-show="isLoading" class="h-5 w-5 me-3 -mt-[45px]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SVGclear from "@/assets/icons/app/x-close.svg";

const { upload } = useFileUpload();

const props = defineProps<{
  label?: string;
  modelValue: string;
  fileType: "photo" | "doc";
}>();

const emits = defineEmits<{
  (e: "update:modelValue", v: string): void;
  (e: "error", v: string): void;
}>();

const inputFileRef = ref<HTMLInputElement>();
const error = ref("");
const isLoading = ref(false);
const handleFile = async (event: Event) => {
  if ((event.target as any).value && inputFileRef.value?.files?.length) {
    const file = inputFileRef.value?.files[0];

    // check file size max 5mb
    if (file.size < 5242880) {
      error.value = "";
      emits("error", "");
      try {
        isLoading.value = true;
        // const fType =
        const fileName = await upload(file.name, file);
        emits("update:modelValue", fileName);
      } catch (err) {
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    } else {
      inputFileRef.value.value = "";
      emits("update:modelValue", "");
      error.value = "Max Size: 5mb";
      emits("error", "Max Size: 5mb");
    }
  }
};

const clear = () => {
  if (inputFileRef.value) inputFileRef.value.value = "";
  emits("update:modelValue", "");
  error.value = "";
};
</script>

<style></style>
