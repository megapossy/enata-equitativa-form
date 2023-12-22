<template>
  <div class="p-6 lg:p-8 lg:py-12">
    <!-- <h2 class="mx-auto text-center font-medium tesxt-2xl">Job Openings</h2> -->

    <!-- <div class="flex justify-center items-center text-center my-4 space-x-4">
      <h2 class="cursor-pointer">CNC Operator</h2>
      <div class="h-2 w-2 bg-gray-200 rounded-full" />
      <h2 class="font-extrabold cursor-default">Automation and Robotics Engineer</h2>
      <div class="h-2 w-2 bg-gray-200 rounded-full" />
      <h2 class="group transition duration-300 cursor-pointer ">
        Composite Technician
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-1 bg-gray-950"></span>
      </h2>
    </div> -->
    <!-- <hr class="h-px my-8 w-1/2 mx-auto bg-gray-200 border-0 dark:bg-gray-700"> -->
    <!-- <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"> -->

    <div>
      <div class="flex cursor-pointer relative mb-8">
        <h2 @click="isSelectBoxShown = !isSelectBoxShown" class="font-bold text-2xl flex">
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
      </div>

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

<style></style>
