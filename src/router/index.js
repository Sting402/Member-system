import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./route";

const router = createRouter({
  history: createWebHashHistory(import.meta.BASE_URL),
  base: import.meta.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  function checkLoginStatus() {
    const loginInfo = JSON.parse(localStorage.getItem("login-info"));
    const isLoggedIn = !!loginInfo;
    const status = isLoggedIn ? loginInfo.status : 0;
    return { isLoggedIn, status };
  }

  const { isLoggedIn, status, lvl } = checkLoginStatus();
  // console.log("status", status);

  const requiresAuth = to.matched.some(
    (record) =>
      record.meta.middleware && record.meta.middleware.includes("auth")
  );

  if (requiresAuth && (!isLoggedIn || status === 0)) {
    next("/login");
  } else if (isLoggedIn && status === 3) {
    next();
  } else if (isLoggedIn && status === 2 && to.path !== "/yuvog-agent/pending") {
    next("/yuvog-agent/pending");
  } else if (isLoggedIn && status === 1 && to.path == "/yuvog-agent/pending") {
    next();
  } else if (isLoggedIn && status === 1 && to.path !== "/yuvog-agent/level") {
    next("/yuvog-agent/level");
  } else if (
    isLoggedIn &&
    status === 0 &&
    (to.path === "/login" || to.path === "/otpcon" || to.path === "/otpval" || to.path === "/signup-agent" || to.path === "/signup-member")
  ) {
    next();
  } else {
    next();
  }

  window.addEventListener("storage", (event) => {
    if (event.key === "login-info") {
      const { status } = checkLoginStatus();
      // console.log("status", status);
    }
  });
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
