<template>
  <div
    :class="`mobile-sidebar bg-white dark:bg-slate-800  ${
      this.$store.themeSettingsStore.theme === 'bordered'
        ? 'border border-gray-5002'
        : 'shadow-base'
    }   `"
  >
    <div class="logo-segment flex justify-between items-center px-4 py-6">
      <router-link :to="{ name: 'admin' }">
        <img
          src="@/assets/images/logo/logo-yuvog.svg"
          alt=""
          v-if="!this.$store.themeSettingsStore.isDark"
        />

        <img
          src="@/assets/images/logo/logo-white-yuvog.svg"
          alt=""
          v-if="this.$store.themeSettingsStore.isDark"
        />
      </router-link>
      <span
        class="cursor-pointer text-slate-900 dark:text-white text-2xl"
        @click="toggleMsidebar"
        ><Icon icon="heroicons:x-mark"
      /></span>
    </div>

    <div class="sidebar-menu px-4 h-[calc(100%-100px)]" data-simplebar>
      <Navmenu :items="menu" />
      <!-- <div
        class="bg-slate-900 mb-[100px] mt-14 p-4 relative text-center rounded-2xl text-white"
        v-if="!this.$store.themeSettingsStore.sidebarCollasp"
      >
        <img
          src="@/assets/images/svg/rabit.svg"
          alt=""
          class="mx-auto relative -mt-[73px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-light">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
// import { menuItems } from "../../constant/main-data";
import Navmenu from "./Navmenu";
import { menuItems1 } from "../../constant/menuItems1";
import { menuItems2 } from "../../constant/menuItems2";
import { menuItems3 } from "../../constant/menuItems3";
import { menuItems4 } from "../../constant/menuItems4";
import { menuItems5 } from "../../constant/menuItems5";
import { ref, onMounted } from "vue";
import { useThemeSettingsStore } from "@/store/themeSettings";
const themeSettingsStore = useThemeSettingsStore();

export default defineComponent({
  components: {
    Icon,
    Navmenu,
  },
  data() {
    return {
      // menuItems,
      menuItems1,
      menuItems2,
      menuItems3,
      menuItems4,
      menuItems5,
      openClass: "w-[248px]",
      closeClass: "w-[72px] close_sidebar",
    };
  },




  setup() {
    const x = JSON.parse(localStorage.getItem("login-info"));
    console.log(x.level);
    
    const shadowbase = ref(false);
    const simplebarInstance = ref(null);
    const menu = ref([]);
    // menu.value = menu.value.concat(menuItems1);
    
    if (x.level == 1) {
      menu.value = menu.value.concat(menuItems1);
    } else if (x.level > 1 && x.level < 6) {
      menu.value = menu.value.concat(menuItems2);
    } else if (x.level == 6) {
      menu.value = menu.value.concat(menuItems3);
    }else if (x.level == 7) {
      menu.value = menu.value.concat(menuItems4);
    } else {
      menu.value = menu.value.concat(menuItems5);
    }

    // onMounted(() => {
    //   simplebarInstance.value
    //     .getScrollElement()
    //     .addEventListener("scroll", () => {
    //       if (simplebarInstance.value.getScrollElement().scrollTop > 50) {
    //         simplebarInstance.value.getScrollElement().classList.add("scroll");
    //         shadowbase.value = true;
    //       } else {
    //         simplebarInstance.value
    //           .getScrollElement()
    //           .classList.remove("scroll");
    //         shadowbase.value = false;
    //       }
    //     });
    // });

    const enterWidget = (el) => {
      gsap.fromTo(
        el,
        { x: 0, opacity: 0, scale: 0.5 },
        { x: 0, opacity: 1, duration: 0.3, scale: 1 }
      );
    };
    const leaveWidget = (el) => {
      gsap.fromTo(
        el,
        { x: 0, opacity: 1, scale: 1 },
        { x: 0, opacity: 0, duration: 0.3, scale: 0.5 }
      );
    };

    return {
      enterWidget,
      leaveWidget,
      simplebarInstance,
      shadowbase,
      menu,
    };
  },
  methods: {
    toggleMsidebar() {
      themeSettingsStore.toggleMsidebar()
    },
  },
});
</script>
<style lang="scss" scoped>
.mobile-sidebar {
  @apply fixed ltr:left-0 rtl:right-0 top-0   h-full   z-[9999]  w-[280px];
}
</style>
