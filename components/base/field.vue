<template>
  <div class="animated relative z-0">
    <input :type="props.type" :name="props.name" :id="props.name"
      class="peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
      placeholder="" required />
    <label :for="props.name" class="peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
      absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
      ">{{ props.placeholder }}</label>



      
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ name: string, placeholder: string; type: 'email' | 'text' }>()
</script>

<style></style>