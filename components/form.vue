<template>
  <div class="p-8 py-12">
    <!-- <h2 class="mx-auto text-3xl text-center">Job Openings</h2>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700"> -->
    <form>
      <fieldset class="mb-6">
        <label class="block mb-2 font-medium text-gray-500">Title</label>
        <div class="flex items-center mb-4">
          <input id="mr" type="radio" name="title" value="mr" class="w-4 h-4 border-gray-300 ">
          <label for="mr" class="block ms-2 me-8 ">
            <SVGmale class="inline-block text-2xl" />
            Mr.
          </label>

          <input id="miss" type="radio" name="title" value="miss" class="w-4 h-4 border-gray-300 ">
          <label for="miss" class="block ms-2  me-8">
            <SVGfemale class="inline-block text-2xl" />
            Miss
          </label>

          <input id="mrs" type="radio" name="title" value="mrs" class="w-4 h-4 border-gray-300 ">
          <label for="mrs" class="block ms-2 ">
            <SVGfemale class="inline-block text-2xl" />
            Mrs
          </label>
        </div>
      </fieldset>

      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <BaseField name="first_name" type="text" label="First Name" />
        </div>
        <div>
          <BaseField name="last_name" type="text" label="Last Name" />
        </div>
        <div class="">
          <BaseFieldPhone class="" name="phone" type="text" label="Phone number" />
        </div>
        <div>
          <BaseFieldIcon name="email" type="text" label="Email Address">
            <SVGatsign class="w-4 h-4 text-gray-500" />
          </BaseFieldIcon>
        </div>
      </div>

      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   -600 " required>
        </div>
        <label for="remember" class="ms-2">I agree with the <a href="#" class="text-blue-600 hover:underline ">terms
            and conditions</a>.</label>
      </div>

      <div class="col-span-full mb-6">
        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clip-rule="evenodd" />
            </svg>
            <div class="mt-4 flex text-sm leading-6 text-gray-600">
              <label for="file-upload"
                class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600  hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only">
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      

      <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tell us more about yourself</label>
        <textarea id="message" rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""></textarea>

      </div>
      

      <button type="submit"
        class="text-white bg-primary border mt-12 hover:bg-white hover:text-black hover:font-bold hover:border-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center min-w-[10rem]">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import SVGmale from "@/assets/icons/app/gender-male.svg"
import SVGfemale from "@/assets/icons/app/gender-female.svg"
import SVGatsign from "@/assets/icons/app/at-sign.svg"

// const isFormShown = ref(false);
// onMounted(async () => {
//   await helpers.huwaits(500)
//   isFormShown.value = true
// })

</script>


<style lang="scss" scoped>
// div:not(.animated)> {
//   input:not([type="radio"]) {
//     @apply bg-gray-50 border border-transparent text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-3;
//   }

//   label {
//     @apply text-lg font-normal text-gray-900;
//   }
// }

// div.animated> {
// input:not([type="radio"]) {
//   @apply block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600;
// }

// label {
//   @apply absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0];
// }
// }

// input:not([type="radio"]) {
//   @apply block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600;
// }

// label {
//   @apply absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0];
// }</style>