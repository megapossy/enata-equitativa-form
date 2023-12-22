<template>
  <div class="p-6 md:px-10 lg:px-16 lg:py-12">
    <div>
      <!-- <h2 class="mx-auto text-center font-medium text-2xl">Job Openings</h2> -->

      <div
        class="flex justify-center items-center flex-col sm:flex-row text-center my-4 space-y-3 sm:space-x-4 sm:space-y-0 text-xl positions"
      >
        <h2
          class="group"
          @click="selectComponent(comps[0])"
          :class="{
            selected: selected.code === comps[0].code,
          }"
        >
          CNC Operator
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-gray-950"
          ></span>
        </h2>
        <div class="h-2 w-2 hidden sm:block bg-gray-300 rounded-full" />
        <h2
          class="group"
          @click="selectComponent(comps[1])"
          :class="{
            selected: selected.code === comps[1].code,
          }"
        >
          Composite Technician
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-gray-950"
          ></span>
        </h2>
        <div class="h-2 w-2 hidden sm:block bg-gray-300 rounded-full" />
        <h2
          class="group"
          @click="selectComponent(comps[2])"
          :class="{
            selected: selected.code === comps[2].code,
          }"
        >
          Automation and Robotics Engineer
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-gray-950"
          ></span>
        </h2>
      </div>

      <hr class="h-px my-14 mb-16 w-1/2 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
      <!-- <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"> -->

      <!-- <div class="flex cursor-pointer relative mb-8">
        <h2
          @click="isSelectBoxShown = !isSelectBoxShown"
          class="font-bold text-2xl flex mx-auto"
        >
          {{ selected.title }}
          <SVGchevronup v-show="isSelectBoxShown" class="ms-3 mt-1 me-0" />
          <SVGchevrondown v-show="!isSelectBoxShown" class="ms-3 mt-1 me-0" />
        </h2>

        <div
          v-show="isSelectBoxShown"
          class="flex flex-col absolute top-[calc(100%+10px)] space-y-3 border bg-white p-4 px-6 shadow-md rounded-md"
        >
          <h2 v-for="(comp, i) in comps" @click="selectComponent(comp)">
            {{ comp.title }}
          </h2>
        </div>
      </div> -->
      <!-- <hr
        class="w-48 h-1 mx-auto my-8 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700"
      /> -->
      <BaseFadeUp>
        <component :is="selected.component" />
      </BaseFadeUp>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Component } from "vue";

import CncOperator from "@/components/job-description/cnc-operator.vue";
import CompositeTechnician from "@/components/job-description/composite-technician.vue";
import AutomationAndRoboticsEngineer from "@/components/job-description/automation-and-robotics-engineer.vue";

import SVGchevrondown from "@/assets/icons/app/chevron-down.svg";
import SVGchevronup from "@/assets/icons/app/chevron-up.svg";

type CompType = {
  code: string;
  title: string;
  component: Component;
};

const comps = [
  { code: "cncoperator", title: "CNC Operator", component: CncOperator },
  {
    code: "compositetechnician",
    title: "Composite Technician",
    component: CompositeTechnician,
  },
  {
    code: "automationandroboticsengineer",
    title: "Automation and RoboticsEngineer",
    component: AutomationAndRoboticsEngineer,
  },
];

const selected = ref<CompType>(comps[0]);
const isSelectBoxShown = ref(false);

const selectComponent = (data: CompType) => {
  isSelectBoxShown.value = false;
  selected.value = data;

  if (data.code) {
    csf.position = data.code;
  }
};

const csf = useCareerFormStore();

watch(
  () => csf.position,
  (nVal) => {
    if (nVal) {
      const sel = comps.find((el) => el.code === nVal);
      if (sel) {
        selected.value = sel;
      }
    }
  }
);
</script>

<style lang="scss" scoped>
.positions {
  h2:not(.selected) {
    @apply font-bold cursor-pointer transition duration-300 opacity-40;
  }

  h2.selected {
    @apply font-bold cursor-default;
  }
}
</style>
