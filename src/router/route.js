import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const routes = [
  // yuvog routes
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/identity/login"),
  },
  {
    path: "/signup-agent",
    name: "Signup",
    component: () => import("@/views/identity/register"),
  },
  {
    path: "/signup-member",
    name: "Signup-Member",
    component: () => import("@/views/identity/normal"),
  },
  {
    path: "/yuvog-agent",
    name: "Layout",
    redirect: "/yuvog-agent/admin",
    component: () => import("@/Layout/index.vue"),
    
    children: [
      {
        path: "pending",
        name: "等待確認",
        component: () => import("../views/identity/pending/index.vue"),
      },
      {
        path: "level",
        name: "選擇代理級別",
        component: () => import("../views/identity/level/index.vue"),
      },
    ]},


  {
    path: "/yuvog-agent",
    name: "LayoutYuvog",
    redirect: "/yuvog-agent/admin",
    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: "blank-page",
        name: "blank-page",
        component: () => import("@/views/blank-page.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("@/views/notifications.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "personalinfo",
        name: "個人檔案",
        component: () => import("@/views/personalinfo/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "review",
        name: "review",
        component: () => import("@/views/review/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "admin",
        name: "admin",
        component: () => import("@/views/admin/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "pendingAgent",
        name: "入代訂單審核",
        component: () => import("@/views/pendingAgent/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "order",
        name: "訂單出貨維護",
        component: () => import("@/views/invoice"),
        meta: {
          groupParent: "訂單查詢",
        },
      },
      {
        path: "order-view",
        name: "訂單詳細內容",
        component: () => import("@/views/invoice/order/order-view"),
        meta: {
          hide: true,
        },
      },
      {
        path: "order-edit",
        name: "訂單出貨編輯",
        component: () => import("@/views/invoice/order/order-edit"),
        meta: {
          hide: true,
        },
      },

      {
        path: "agent-price",
        name: "代理商金額維護",
        component: () => import("@/views/setting/basic"),
        meta: {
          groupParent: "獎金基本設定",
        },
      },
      {
        path: "agent-role",
        name: "代理商角色維護",
        component: () => import("@/views/setting/basic"),
        meta: {
          groupParent: "獎金基本設定",
        },
      },
      {
        path: "agent-bonus",
        name: "代理商分潤維護",
        component: () => import("@/views/setting/bonus"),
        meta: {
          groupParent: "獎金基本設定",
        },
      },
      {
        path: "productsingletype",
        name: "productsingletype",
        component: () => import("@/views/product/singletype.vue"),

      },
      {
        path: "agent-dashboard",
        name: "我的儀表板",
        component: () => import("@/views/agent/dashboard"),
        meta: {
          hide: true,
        },
      },

      {
        path: "agent-office",
        name: "我的辦公室",
        component: () => import("@/views/agent/office"),
        meta: {
          hide: true,
        },
      },
      {
        path: "certificate",
        name: "獎狀證書製作",
        component: () => import("@/views/agent/certificate"),
        meta: {
          hide: true,
        },
      },

      {
        path: "agent-purchase",
        name: "進貨訂單查詢",
        component: () => import("@/views/agent/purchase"),
        meta: {
          groupParent: "商品進貨功能",
        },
      },

      {
        path: "agent-purchase-add",
        name: "新增進貨訂單",
        component: () => import("@/views/agent/purchase/purchase/purchase-add"),
        meta: {
          groupParent: "商品進貨功能",
        },
      },

      {
        path: "agent-notifications",
        name: "agent-notifications",
        component: () => import("@/views/notifications.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "agent-messages",
        name: "agent-messages",
        component: () => import("@/views/messages.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "agent-faq",
        name: "agent-faq",
        component: () => import("@/views/faq.vue"),
        meta: {
          hide: true,
        },
      },
    ],
  },

  // {
  //   path: "/",
  //   name: "Login",
  //   component: () => import("@/views/auth/login/index.vue"),
  // },
  {
    path: "/register",
    name: "reg",
    component: () => import("@/views/auth/register"),
  },
  
  {
    path: "/otpval",
    name: "otpval",
    component: () => import("@/views/identity/register/otpval.vue"),
  },
  {
    path: "/otpcon",
    name: "otpcon",
    component: () => import("@/views/identity/register/otpcon.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/views/identity/register/forgot-password.vue"),
  },
  {
    path: "/reset",
    name: "resetpassword",
    component: () => import("@/views/identity/common/resetPassword.vue"),
  },
  {
    path: "/success-500",
    name: "success-500",
    component: () => import("@/views/auth/success.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    component: () => import("@/views/utility/comming-soon"),
  },
  {
    path: "/under-construction",
    name: "under-construction",
    component: () => import("@/views/utility/under-construction"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/error.vue"),
  },
];

export default routes;
