<template>
  <div>
    <label
      :for="props.name"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
      >{{ props.label }}</label
    >

    <div class="mx-auto flex relative">
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
        </div>
        <input
          v-model="numberInput"
          type="number"
          id="currency-input"
          class="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Enter amount"
        />
      </div>
      <button
        @click="isSelectBoxShown = !isSelectBoxShown"
        id="dropdown-currency-button"
        data-dropdown-toggle="dropdown-currency"
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        {{ selectedCurrency }}
        <SVGchevrondown class="ms-2 mt-1 me-0" />
      </button>
      <BaseFadeUp>
        <div
          id="dropdown-currency"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md border w-36 absolute top-[calc(100%+10px)] right-0"
          v-show="isSelectBoxShown"
        >
          <ul
            class="py-2 text-sm text-gray-700 dropdown-select"
            aria-labelledby="dropdown-currency-button"
          >
            <li v-for="curr in currencies">
              <button
                @click="
                  () => {
                    selectedCurrency = curr;
                    isSelectBoxShown = false;
                  }
                "
                type="button"
                class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="inline-flex items-center">{{ curr }}</div>
              </button>
            </li>
          </ul>
        </div>
      </BaseFadeUp>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SVGchevrondown from "@/assets/icons/app/chevron-down.svg";
const props = defineProps<{ name: string; label: string; modelValue: string }>();
const isSelectBoxShown = ref(false);

const selectedCurrency = ref("USD");
const numberInput = ref("");
const currencies = ["USD", "EUR", "AED"];

const emits = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

watchEffect(() => {
  if (selectedCurrency.value && numberInput.value) {
    emits("update:modelValue", `${selectedCurrency.value}-${numberInput.value}`);
  }
});
</script>

<style></style>
