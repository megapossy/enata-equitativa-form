<template>
  <div class="p-6 lg:p-8">
    <div class="">
      <h2 class="mx-auto text-2xl">Job Openings:</h2>
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

      <select
        id="underline_select"
        class="block py-2.5 px-3 mb-10 mt-5 text-xl text-gray-950 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        v-model="component"
      >
        <option disabled value="" selected>Choose a Position</option>
        <option :value="CncOperator">CNC Operator</option>
        <option :value="CompositeTechnician">Composite Technician</option>
        <option :value="AutomationAndRoboticsEngineer">
          Automation and Robotics Engineer
        </option>
      </select>
    </div>
    <!-- <hr class="h-px my-8 w-1/2 mx-auto bg-gray-200 border-0 dark:bg-gray-700"> -->
    <!-- <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"> -->

    <div class="px-4 lg:px-4">
      <BaseFadeUp>
        <component :is="component" />
      </BaseFadeUp>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Component } from "vue";

import CncOperator from "@/components/job-description/cnc-operator.vue";
import CompositeTechnician from "@/components/job-description/composite-technician.vue";
import AutomationAndRoboticsEngineer from "@/components/job-description/automation-and-robotics-engineer.vue";

const component = ref<Component>(CncOperator);
const selected = ref("");
</script>

<style></style>
