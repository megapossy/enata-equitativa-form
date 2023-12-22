<template>
  <Teleport to="#modal-section">
    <BaseFadeUp>
      <div
        v-if="props.show"
        tabindex="-1"
        aria-hidden="true"
        class="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen"
      >
        <!-- Modal backdrop  -->
        <div
          @click.self="close()"
          class="modal-backdrop relative p-4 w-full h-full flex justify-center items-center bg-secondary/30"
        >
          <!-- Modal content -->
          <div
            ref="modalContent"
            class="modal-content container mx-auto relative rounded-lg shadow-xl bg-white max-h-full"
            :class="[props.size]"
          >
            <!-- Modal header -->
            <div class="modal-title flex items-center justify-between p-4 md:p-5">
              <slot name="title" />
              <button
                @click="close()"
                type="button"
                class="text-white bg-primary rounded-full text-sm w-10 h-10 ms-auto inline-flex justify-center items-center hover:bg-secondary hover:text-white"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="modal-body p-4 md:p-5 max-h-[65svh] overflow-y-auto me-1">
              <slot />
            </div>
            <!-- Modal footer -->
            <div class="modal-footer flex items-center p-4 md:p-5">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </BaseFadeUp>
  </Teleport>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const modalContent = ref<HTMLElement>();
onClickOutside(modalContent, (event) => {
  close();
});

const emits = defineEmits<{
  (e: "update:show", v: boolean): void;
}>();
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
});

const close = () => {
  emits("update:show", false);
};
</script>

<style scoped></style>
