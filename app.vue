<template>
  <div class="overflow-x-hidden" :class="{ dark: darkMode }">
    <div class="min-h-full dark:bg-dim-900">
      <div
        class="grid grid-cols-12 mx-auto sm:px-5 lg:max-w-7xl lg:scroll-px-8 lg:gap-5"
      >
        <!-- left sidebar -->
        <div class="hidden md:block xs-col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <SidebarLeft />
          </div>
        </div>
        <!-- main content-->
        <div></div>
        <!-- right sidebar -->
        <div class="hidden md:block md:col-span-4 py-5">
          <SidebarRight />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
</script>
