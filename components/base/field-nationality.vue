<template>
  <div>
    <label
      :for="props.name"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
      >{{ props.label }}</label
    >

    <div
      @click="isSelectBoxShown = !isSelectBoxShown"
      class="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-pointer relative"
    >
      {{ selected.label }}
      <SVGchevrondown class="ms-2 mt-1 me-0" />

      <BaseFadeUp>
        <div
          v-show="isSelectBoxShown"
          class="z-10 bg-white border rounded-lg shadow-md w-52 absolute top-[calc(100%+10px)] left-0 py-2 px-4"
        >
          <ul class="dropdown-select space-y-2">
            <li v-for="(nation, i) in nations">{{ nation.label }}</li>
          </ul>
        </div>
      </BaseFadeUp>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SVGchevrondown from "@/assets/icons/app/chevron-down.svg";
const props = defineProps<{
  name: string;
  label: string;
}>();

type Nationality = {
  label: string;
  code: string;
};

const nations = [
  {
    label: "USA",
    code: "usa",
  },
  {
    label: "Philippines",
    code: "philippines",
  },
];

const selected = ref<Nationality>({
  label: "USA",
  code: "usa",
});

const isSelectBoxShown = ref(false);
</script>

<style></style>
