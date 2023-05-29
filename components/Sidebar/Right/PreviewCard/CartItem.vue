<template>
  <div class="px-3 border-t-2 py-2">
    <h2 class="text-[22px] font-semibold capitalize">
      {{ props.title }}
    </h2>
    <h5 class="text-[18px font-[600] text-slate-400">
      {{ props.subTitle }}
    </h5>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
});
</script>
