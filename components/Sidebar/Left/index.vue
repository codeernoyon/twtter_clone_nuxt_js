<template>
  <div class="flex flex-col h-screen py-5">
    <!-- logo -->
    <div
      class="hover:bg-cyan-50 dark:hover:bg-slate-700 h-12 w-12 flex items-center justify-center rounded-full cursor-pointer"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="h-8 w-8">
          <IconsLogo />
        </div>
      </nuxt-link>
    </div>
    <div class="mt-5 flex flex-col gap-3 w-full">
      <SidebarLeftTab active>
        <template v-slot:icon> <HomeIcon /> </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon> <HashtagIcon /> </template>
        <template v-slot:name> Explore </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon> <BellIcon /> </template>
        <template v-slot:name> Notification </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon> <InboxIcon /> </template>
        <template v-slot:name> Message </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon> <BookmarkIcon /> </template>
        <template v-slot:name> Bookmarks </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon> <DocumentTextIcon /> </template>
        <template v-slot:name> Lists </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon> <UserIcon /> </template>
        <template v-slot:name> Profile </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>
<script setup>
import {
  BellIcon,
  BookmarkIcon,
  DocumentTextIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";
const { defaultTransition } = useTailwindConfig();
</script>
