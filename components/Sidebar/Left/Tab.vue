<template>
  <nuxt-link
    to="#"
    class="flex items-center gap-3 hover:bg-cyan-50 dark:hover:bg-slate-700 cursor-pointer px-5 py-1 rounded-full w-full dark:text-white dark:bg-transparent"
    :class="(defaultTransition, bgActive)"
  >
    <div class="h-6 w-6">
      <slot name="icon"></slot>
    </div>
    <div class="font-[600] text-[20px] hidden xl:block" :class="textActive">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textActive = computed(() =>
  props.active ? "font-[700] " : "font-[600]"
);
const bgActive = computed(() =>
  props.active ? "bg-cyan-50 dark:bg-slate-700" : "bg-white"
);
</script>
