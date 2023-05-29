<template>
  <div
    class="bg-slate-50 rounded-2xl pt-3 overflow-hidden"
    :class="defaultBorder"
  >
    <h1 class="font-bold text-[25px] px-3 pb-3">
      {{ props.title }}
    </h1>
    <slot></slot>
    <div
      class="font-semibold py-3 border-t-2 mt-3 px-3 hover:bg-cyan-100 cursor-pointer text-[20px]"
      :class="defaultTransition"
    >
      <span>Show More</span>
    </div>
  </div>
</template>
<script setup>
const { defaultBorder, defaultTransition } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
