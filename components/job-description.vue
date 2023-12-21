<template>
  <div class="p-8">
    <h2 class="mx-auto text-3xl text-center">Job Openings</h2>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700">

    <div class="px-8">
        <component :is="AutomationAndRoboticsEngineer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CompositeTechnician from "@/components/job-description/composite-technician.vue"
import CncOperator from "@/components/job-description/cnc-operator.vue"
import AutomationAndRoboticsEngineer from "@/components/job-description/automation-and-robotics-engineer.vue"


</script>

<style></style>