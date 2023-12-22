<template>
  <div class="animated relative z-0">
    <label
      :for="props.name"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
      >{{ props.label }}</label
    >

    <div class="flex relative">
      <button
        id="dropdown-phone-button"
        @click="isSelectBoxShown = !isSelectBoxShown"
        data-dropdown-toggle="dropdown-phone"
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        +1
        <SVGchevrondown class="ms-2 mt-1 me-0" />
      </button>
      <BaseFadeUp>
        <div
          id="dropdown-phone"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-52 absolute top-[calc(100%+10px)]"
          v-show="isSelectBoxShown"
        >
          <ul
            class="py-2 text-sm text-gray-700 dropdown-select"
            aria-labelledby="dropdown-phone-button"
          >
            <li v-for="i in 10">
              <button
                type="button"
                class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="inline-flex items-center">United States (+1)</div>
              </button>
            </li>
          </ul>
        </div>
      </BaseFadeUp>
      <label
        for="phone-input"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Phone number:</label
      >
      <div class="relative w-full">
        <input
          type="phone"
          id="phone-input"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          required
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SVGchevrondown from "@/assets/icons/app/chevron-down.svg";

const props = defineProps<{
  name: string;
  label: string;
  placeholder?: string;
  type: "email" | "text";
}>();

const isSelectBoxShown = ref(false);
</script>

<style lang="scss" scoped></style>
