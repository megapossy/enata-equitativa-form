<template>
  <section>
    <div
      class="header h-96 w-full top-0 pb-0 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
      style="background-image: url(/carousel/machined.jpg)"
    >
      <ClientOnly>
        <BaseFadeUp>
          <div class="text-center">
            <img class="h-12 sm:h-28 -mt-20" src="/enata-logo-white.svg" />
            <h1 class="text-white text-3xl mt-8">Careers</h1>
          </div>
        </BaseFadeUp>
      </ClientOnly>
    </div>
    <div
      class="container p-2 sm:p-12 -mt-36 mx-auto min-h-screen flex justify-center items-start relative"
    >
      <ClientOnly>
        <BaseFadeUp>
          <div
            class="grid grid-cols-1 lg:grid-cols-1 w-full relative bg-white shadow-md shadow-gray-400/40 rounded-md"
          >
            <JobDescription />

            <button
              type="button"
              @click="isShown = true"
              class="text-lg font-medium rounded-lg p-4 text-white bg-blue-600 border my-12 hover:bg-blue-800 mx-auto min-w-72"
            >
              Apply
            </button>
          </div>
        </BaseFadeUp>
      </ClientOnly>
    </div>

    <FormModal v-model:show="isShown" />
  </section>
</template>

<script lang="ts" setup>
const isShown = ref(false);
</script>
