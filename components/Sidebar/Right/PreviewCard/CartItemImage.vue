<template>
  <div class="px-3 border-t-2 py-3 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <!-- image -->
      <div class="bg-slate-500 h-10 w-10 rounded-full overflow-hidden">
        <img class="h-10 w-10" :src="props.src" alt="image" />
      </div>
      <!-- content -->
      <div class="">
        <h2 class="text-[22px] font-semibold capitalize">
          {{ props.title }}
        </h2>
        <h5 class="text-[18px font-[600] text-slate-400">
          {{ props.subTitle }}
        </h5>
      </div>
    </div>
    <!-- button -->
    <div>
      <span class="py-3 px-8 bg-slate-700 text-white rounded-full">Follow</span>
    </div>
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
  src: {
    type: String,
  },
});
console.log(props.src);
</script>
