<template>
  <component :is="dynamicComponent" />
</template>
<script lang="ts">
import type { Component } from "vue";
import { defineAsyncComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const dynamicComponent = ref<Component>();
    onMounted(async () => {
      dynamicComponent.value = await defineAsyncComponent(
        () => import(`@/assets/icons/app/${props.name}.svg`)
      );
    });
    return {
      dynamicComponent,
    };
  },
});
</script>
