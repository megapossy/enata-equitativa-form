<template>
  <div>
    <label
      :for="props.name"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
      >{{ props.label }}</label
    >
    <div
      @click="
        async () => {
          isSelectBoxShown = !isSelectBoxShown;
          await nextTick();
          searchRef?.focus();
        }
      "
      class="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-pointer relative"
    >
      {{ selected?.name || "Select here.." }}
      <SVGchevrondown class="ms-2 mt-1 me-0" />

      <BaseFadeUp>
        <div
          v-show="isSelectBoxShown"
          class="z-10 bg-white border rounded-lg shadow-md w-72 absolute top-[calc(100%+10px)] left-0 py-2 px-4"
        >
          <input
            type="text"
            v-model="searchText"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2 mb-2"
            :placeholder="`Search here...`"
            ref="searchRef"
          />
          <ul class="dropdown-select space-y-2 max-h-56 overflow-y-auto">
            <li v-if="!filteredData.length">
              <p class="text-center">---</p>
            </li>
            <li
              v-for="(dd, i) in filteredData"
              @click="
                () => {
                  searchText = '';
                  selected = dd;
                  emits('update:modelValue', dd.value);
                }
              "
            >
              {{ dd.name }}
            </li>
          </ul>
        </div>
      </BaseFadeUp>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SVGchevrondown from "@/assets/icons/app/chevron-down.svg";

type DataType = {
  name: string;
  value: string | string;
};

const props = defineProps<{
  name: string;
  label: string;
  modelValue: string;
  data: DataType[];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

const selected = ref<DataType>();
const searchRef = ref<HTMLInputElement>();
const searchText = ref("");
const isSelectBoxShown = ref(false);
const filteredData = computed(() => {
  if (!!searchText.value) {
    return props.data.filter((el) =>
      el.name.toLowerCase().includes(searchText.value.toLowerCase())
    );
  } else {
    return props.data;
  }
});
</script>

<style></style>
