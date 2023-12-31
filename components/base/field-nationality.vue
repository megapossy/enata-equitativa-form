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
      {{ selected?.name || "Select country..." }}
      <SVGchevrondown class="ms-2 mt-1 me-0" />

      <BaseFadeUp>
        <div
          v-show="isSelectBoxShown"
          class="z-10 bg-white border rounded-lg shadow-md w-72 absolute top-[calc(100%+10px)] left-0 py-2 px-4"
        >
          <input
            type="text"
            v-model="searchCountry"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-2"
            placeholder="Enter country"
            ref="searchRef"
          />
          <ul class="dropdown-select space-y-2 max-h-56 overflow-y-auto">
            <li v-if="!filteredNations.length">
              <p class="text-center">---</p>
            </li>
            <li
              v-for="(nation, i) in filteredNations"
              @click="
                () => {
                  searchCountry = '';
                  selected = nation;
                }
              "
            >
              {{ nation.name }}
            </li>
          </ul>
        </div>
      </BaseFadeUp>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SVGchevrondown from "@/assets/icons/app/chevron-down.svg";
import countryCodes from "@/data/country-codes.json";

const props = defineProps<{
  name: string;
  modelValue: string;
  label: string;
}>();

type Nationality = {
  name: string;
  code: string;
};

const nations = countryCodes.map((el) => ({ name: el.name, code: el.code }));

const selected = ref<Nationality>();
const searchRef = ref<HTMLInputElement>();
const searchCountry = ref("");
const isSelectBoxShown = ref(false);
const filteredNations = computed(() => {
  if (!!searchCountry.value) {
    return nations.filter((el) =>
      el.name.toLowerCase().includes(searchCountry.value.toLowerCase())
    );
  } else {
    return nations;
  }
});

const emits = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

watch(
  () => selected.value?.name,
  (nVal) => {
    if (nVal) emits("update:modelValue", nVal);
  }
);
</script>

<style></style>
