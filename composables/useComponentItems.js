import {
  BellIcon,
  BookmarkIcon,
  DocumentTextIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";

export default () => {
  return {
    navItems: [
      {
        id: 1,
        title: "Home",
        icon: HomeIcon,
      },
      {
        id: 2,
        title: "Explore",
        icon: HashtagIcon,
      },
      {
        id: 3,
        title: "Notification",
        icon: BellIcon,
      },
      {
        id: 4,
        title: "Message",
        icon: InboxIcon,
      },
      {
        id: 5,
        title: "Bookmarks",
        icon: BookmarkIcon,
      },
      {
        id: 6,
        title: "Lists",
        icon: DocumentTextIcon,
      },
      {
        id: 7,
        title: "Profile",
        icon: UserIcon,
      },
    ],
  };
};
