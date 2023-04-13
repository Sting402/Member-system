import userImg from "@/assets/images/all-img/user.png";
import user2Img from "@/assets/images/all-img/user2.png";
import user3Img from "@/assets/images/all-img/user3.png";
import user4Img from "@/assets/images/all-img/user4.png";

export const menuItems5 = [
  
  {
    title: "即時業績戰情表",
    icon: "heroicons:arrow-trending-up",
    isOpen: true,
    child: [
      {
        childtitle: "代理人數統計",
        childlink: "admin",
      },
      {
        childtitle: "銷售業績比較",
        childlink: "admin2",
      },
      {
        childtitle: "產品銷售數據",
        childlink: "admin3",
      },
      {
        childtitle: "獎金發放統計",
        childlink: "admin4",
      },
      {
        childtitle: "即時庫存數量",
        childlink: "admin5",
      },
    ],
  },

  {
    isHeadr: true,
    title: "ORDER",
  },
  {
    title: "訂單出貨維護",
    icon: "heroicons:newspaper",
    link: "order",
    badge: "8",
  },

  {
    isHeadr: true,
    title: "PRODUCT",
  },
  // {
  //   title: "銷售商品維護",
  //   icon: "heroicons:shopping-bag",
  //   child: [
  //     {
  //       childtitle: "單一商品類別維護",
  //       childlink: "admin",
  //     },
  //     {
  //       childtitle: "單一商品內容維護",
  //       childlink: "product-singletype",
  //     },
  //     {
  //       childtitle: "組合商品類別維護",
  //       childlink: "admin",
  //     },
  //     {
  //       childtitle: "組合商品內容維護",
  //       childlink: "admin",
  //     },
  //   ],
  // },
  {
    title: "銷售商品維護",
    icon: "heroicons:shopping-bag",
    // isOpen: true,
    child: [
      {
        childtitle: "單一商品類別維護",
        childlink: "productsingletype",
      },
      {
        childtitle: "銷售業績比較",
        childlink: "admin2",
      },
      {
        childtitle: "產品銷售數據",
        childlink: "admin3",
      },
      {
        childtitle: "獎金發放統計",
        childlink: "admin4",
      },
      {
        childtitle: "即時庫存數量",
        childlink: "admin5",
      },
    ],
  },
  {
    title: "商品庫存維護",
    icon: "heroicons:cube",
    child: [
      {
        childtitle: "商品入庫維護",
        childlink: " ",
      },
      {
        childtitle: "商品入庫查詢",
        childlink: " ",
      },
      {
        childtitle: "安全庫存量設定",
        childlink: " ",
      },
    ],
  },
 
  {
    isHeadr: true,
    title: "NEWS",
  },
  {
    title: "最新消息維護",
    icon: "heroicons:newspaper",
    link: " ",
    badge: "on",
  },
  {
    title: "公告訊息功能",
    icon: "heroicons:clipboard-document-list",
    child: [
      {
        childtitle: "公告訊息類別維護",
        childlink: " ",
      },
      {
        childtitle: "公告訊息內容維護",
        childlink: " ",
      },
    ],
  },
  {
    title: "活動報名功能",
    icon: "heroicons:calendar-days",
    child: [
      {
        childtitle: "活動報名類別維護",
        childlink: " ",
      },
      {
        childtitle: "活動報名內容維護",
        childlink: " ",
      },
      {
        childtitle: "活動報名審核維護",
        childlink: " ",
      },
      {
        childtitle: "活動報名人員維護",
        childlink: " ",
      },
      {
        childtitle: "活動報名簽到維護",
        childlink: " ",
      },
    ],
  },

  {
    isHeadr: true,
    title: "SETTINGS",
  },
  {
    title: "經營工具維護",
    icon: "heroicons:swatch",
    link: " ",
  },
  {
    title: "獎金基本設定",
    icon: "heroicons:banknotes",
    child: [
      {
        childtitle: "代理商金額維護",
        childlink: "agent-price",
      },
      {
        childtitle: "代理商角色維護",
        childlink: "agent-role",
      },
      {
        childtitle: "代理商證書維護",
        childlink: " ",
      },
      {
        childtitle: "代理商分潤維護",
        childlink: "agent-bonus",
      },
    ],
  },

  {
    isHeadr: true,
    title: "AGENT",
  },
  {
    title: "我的儀表板",
    icon: "heroicons:presentation-chart-bar",
    link: "agent-dashboard",
  },
  {
    title: "我的辦公室",
    icon: "heroicons:computer-desktop",
    link: "agent-office",
  },
  {
    title: "證書獎狀製作",
    icon: "heroicons:computer-desktop",
    link: "certificate",
  },
  {
    title: "商品進貨功能",
    icon: "heroicons:shopping-cart",
    child: [
      {
        childtitle: "進貨訂單建立",
        childlink: "agent-purchase-add",
      },
      {
        childtitle: "進貨訂單查詢",
        childlink: "agent-purchase",
      },
    ],
  },
  {
    title: "商品出貨功能",
    icon: "heroicons:truck",
    child: [
      {
        childtitle: "出貨訂單維護",
        childlink: " ",
      },
      {
        childtitle: "出貨訂單查詢",
        childlink: " ",
      },
    ],
  },
  {
    title: "業績查詢功能",
    icon: "heroicons:chart-pie",
    child: [
      {
        childtitle: "我的業績查詢",
        childlink: " ",
      },
      {
        childtitle: "下線業績查詢",
        childlink: " ",
      },
      {
        childtitle: "銷售分析圖表",
        childlink: " ",
      },
    ],
  },
  {
    title: "公告訊息",
    icon: "heroicons:clipboard-document-list",
    link: " ",
    badge: "2",
  },
  {
    title: "活動課程",
    icon: "heroicons:calendar-days",
    link: " ",
    badge: "1",
  },
  {
    title: "經營輔助",
    icon: "heroicons:swatch",
    child: [
      {
        childtitle: "代理商工具",
        childlink: " ",
      },
      {
        childtitle: "配貨試算表",
        childlink: " ",
      },
    ],
  },

  {
    isHeadr: true,
    title: "menu",
  },

  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    isOpen: false,
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "home",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
      },
      {
        childtitle: "Project  Dashbaord",
        childlink: "project",
      },
      {
        childtitle: " CRM Dashbaord",
        childlink: "crm",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
      },
    ],
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    badge: "2.0.1",
  },
  

  //original links below
  {
    isHeadr: true,
    title: "apps",
  },

  {
    title: "Chat",
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "Email",
    icon: "heroicons-outline:mail",
    link: "email",
  },

  {
    title: "Kanban",
    icon: "heroicons-outline:view-boards",
    link: "kanban",
  },
  {
    title: "Calender",
    icon: "heroicons-outline:calendar",
    link: "calender",
  },

  {
    title: "Todo",
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    title: "Projects",
    icon: "heroicons-outline:document",
    link: "#",
    child: [
      {
        childtitle: "Projects",
        childlink: "projects",
      },
      {
        childtitle: "Project Details",
        childlink: "project-details",
      },
    ],
  },
  {
    isHeadr: true,
    title: "Pages",
  },
  {
    title: "Authentication",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "Signin One",
        childlink: "/",
      },
      {
        childtitle: "Signin Two",
        childlink: "/login2",
      },
      {
        childtitle: "Signin Three",
        childlink: "/login3",
      },
      {
        childtitle: "Signup One",
        childlink: "/register",
      },
      {
        childtitle: "Signup Two",
        childlink: "/register2",
      },
      {
        childtitle: "Signup Three",
        childlink: "/register3",
      },
      {
        childtitle: "Forget Password One",
        childlink: "/forgot-password",
      },
      {
        childtitle: "Forget Password Two",
        childlink: "/forgot-password2",
      },
      {
        childtitle: "Forget Password Three",
        childlink: "/forgot-password3",
      },
      {
        childtitle: "Lock Screen One",
        childlink: "/lock-screen",
      },
      {
        childtitle: "Lock Screen Two",
        childlink: "/lock-screen2",
      },
      {
        childtitle: "Lock Screen Three",
        childlink: "/lock-screen3",
      },
    ],
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    child: [
      {
        childtitle: "Invoice",
        childlink: "invoice",
      },
      {
        childtitle: "Pricing",
        childlink: "pricing",
      },
      {
        childtitle: "Testimonial",
        childlink: "testimonial",
      },
      {
        childtitle: "FAQ",
        childlink: "faq",
      },
      {
        childtitle: "Blog",
        childlink: "blog",
      },

      {
        childtitle: "Blank Page",
        childlink: "blank-page",
      },
      {
        childtitle: "Profile",
        childlink: "profile",
      },
      {
        childtitle: "Settings",
        childlink: "settings",
      },
      {
        childtitle: "404 page",
        childlink: "/404",
      },
      {
        childtitle: "Coming Soon",
        childlink: "/coming-soon",
      },
      {
        childtitle: "Under Maintanance page",
        childlink: "/under-construction",
      },
    ],
  },

  {
    isHeadr: true,
    title: "Elements",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
      },
    ],
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "Typography",
        childlink: "typography",
      },
      {
        childtitle: "Colors",
        childlink: "colors",
      },
      {
        childtitle: "Alert",
        childlink: "alert",
      },
      {
        childtitle: "Button",
        childlink: "button",
      },
      {
        childtitle: "Card",
        childlink: "/app/card",
      },
      {
        childtitle: "Carousel",
        childlink: "carousel",
      },
      {
        childtitle: "Dropdown",
        childlink: "dropdown",
      },
      {
        childtitle: "Image",
        childlink: "image",
      },
      {
        childtitle: "Modal",
        childlink: "modal",
      },
      {
        childtitle: "Progress bar",
        childlink: "progress-bar",
      },
      {
        childtitle: "Placeholder",
        childlink: "placeholder",
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "tab-accordion",
      },
      {
        childtitle: "Badge",
        childlink: "badges",
      },
      {
        childtitle: "Pagination",
        childlink: "Pagination",
      },
      {
        childtitle: "Video",
        childlink: "video",
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "tooltip-popover",
      },
    ],
  },
  {
    title: "Forms",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "Input",
        childlink: "input",
      },
      {
        childtitle: "Input group",
        childlink: "input-group",
      },
      {
        childtitle: "Input layout",
        childlink: "input-layout",
      },
      {
        childtitle: "Form validation",
        childlink: "form-validation",
      },
      {
        childtitle: "Wizard",
        childlink: "form-wizard",
      },
      {
        childtitle: "Input mask",
        childlink: "input-mask",
      },
      {
        childtitle: "File input",
        childlink: "file-input",
      },
      {
        childtitle: "Form repeater",
        childlink: "form-repeater",
      },
      {
        childtitle: "Textarea",
        childlink: "textarea",
      },
      {
        childtitle: "Checkbox",
        childlink: "checkbox",
      },
      {
        childtitle: "Radio button",
        childlink: "radio-button",
      },
      {
        childtitle: "Switch",
        childlink: "switch",
      },
      {
        childtitle: "Select & Vue select",
        childlink: "select",
      },
      {
        childtitle: "Date time picker",
        childlink: "date-time-picker",
      },
    ],
  },
  {
    title: "Tables",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
      },
    ],
  },
  {
    title: "Chart",
    icon: "heroicons-outline:chart-bar",
    link: "#",
    child: [
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "map",
  },

  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
  },
];

// menuseetins

export const ProfileMenu = [
  {
    label: "Profile",
    icon: "heroicons-outline:user",
    link: "#",
  },
  {
    label: "Chat",
    icon: "heroicons-outline:chat",
    link: "chat",
  },
  {
    label: "Email",
    icon: "heroicons-outline:mail",
    link: "email",
  },
  {
    label: "Todo",
    icon: "heroicons-outline:chip",
    link: "todo",
  },
  {
    label: "Settings",
    icon: "heroicons-outline:cog",
    link: "#",
  },
  {
    label: "Price",
    icon: "heroicons-outline:credit-card",
    link: "pricing",
  },
  {
    label: "Faq",
    icon: "heroicons-outline:information-circle",
    link: "faq",
  },
  {
    label: "Logout",
    icon: "heroicons-outline:login",
    link: "/",
  },
];

export const notifications = [
  {
    title: "2023減重比賽即將開始報名！",
    desc: "妤果2023減重比賽將於2023年2月20號開始報名，各位代理商趕快邀請想要擁有全新人生、追求挑戰的親朋好友們，敬請踴躍參加。",
    unread: true,
    image: userImg,
    date: "2023/01/28",
    link: "#",
  },
  {
    title: "祝各位兔年行大運  🎉",
    desc: "過去的三年來妤果在各位家人們的攜手努力下，度過了許多疫情創造的難關。真摯的感謝你們與妤果一起成長、奮鬥。展望新年，妤果也將持續創造更多價值與力求全新的發展，預祝各位家人們業績蒸蒸日上、事業更添光彩。",
    unread: false,
    image: user2Img,
    date: "2023/01/01",
    link: "#",
  },
  {
    title: "妤果新品『金秘書』上任 👋",
    desc: "「遠距時代」3C重用族的你，有沒有保護好你的靈魂之窗？還找不到最安全、最有效、最適合你的保養嗎？妤果特別聘任✨金秘書✨來解決你(你)的問題。",
    unread: false,
    image: user3Img,
    date: "2022/12/25",
    link: "#",
  },
];

export const trackingOrder = [
  {
    title: "建立訂單",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    date: "Dec 25, 2022 ",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "部分出貨",
    date: "Dec 26, 2022 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "部分出貨",
    date: "Dec 30, 2022 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "全部出貨",
    date: "Feb 01, 2023 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "建立訂單",
    date: "Feb 01, 2023 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "部分出貨",
    date: "Sep 20, 2023 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
  {
    title: "全部出貨",
    date: "-",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
];

export const message = [
  {
    title: "訂貨單出貨通知",
    desc: "訂單編號#202211050005已出貨",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: userImg,
    link: "#",
  },
  {
    title: "您有新的訂單！",
    desc: "您的下線已訂購商品，訂單編號#202301050003，請盡快出貨。",
    active: false,
    hasnotifaction: false,
    image: user2Img,
    link: "#",
  },
  {
    title: "您有新的訂單！",
    desc: "您的下線已訂購商品，訂單編號#202211050009，請盡快出貨。",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: user3Img,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: user4Img,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: user2Img,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: user3Img,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: user4Img,
    link: "#",
  },
];

export const topMenu = [
  {
    isHeadr: true,
    title: "DASHBOARD",
  },
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "home",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },
          {
            m_childtitle: "Testimonial",
            m_childlink: "testimonial",
          },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "/404",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "/coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "/under-construction",
          },
        ],
      },
    ],
  },

  {
    isHeadr: true,
    title: "PAGES",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

export const alertType = [
  {
    type: "dark",
  },
  {
    type: "primary",
  },

  {
    type: "secondary",
  },
  {
    type: "success",
  },
  {
    type: "info",
  },
  {
    type: "danger",
  },
  {
    type: "warning",
  },
];

export const alertType2 = [
  {
    type: "dark-light",
  },
  {
    type: "primary-light",
  },

  {
    type: "secondary-light",
  },
  {
    type: "success-light",
  },
  {
    type: "info-light",
  },
  {
    type: "danger-light",
  },
  {
    type: "warning-light",
  },
];

export const alertType3 = [
  {
    type: "dark",
    icon: "fluent:target-20-regular",
  },
  {
    type: "primary",
    icon: "fluent:target-20-regular",
  },

  {
    type: "secondary",
    icon: "heroicons-outline:support",
  },
  {
    type: "success",
    icon: "akar-icons:double-check",
  },
  {
    type: "t-info",
    icon: "heroicons-outline:information-circle",
  },
  {
    type: "danger",
    icon: "heroicons-outline:exclamation",
  },
  {
    type: "warning",
    icon: "heroicons-outline:ban",
  },
];

export const alertType4 = [
  {
    type: "dark-light",
    icon: "fluent:target-20-regular",
  },
  {
    type: "primary-light",
    icon: "fluent:target-20-regular",
  },

  {
    type: "secondary-light",
    icon: "heroicons-outline:support",
  },
  {
    type: "success-light",
    icon: "akar-icons:double-check",
  },
  {
    type: "info-light",
    icon: "heroicons-outline:information-circle",
  },
  {
    type: "danger-light",
    icon: "heroicons-outline:exclamation",
  },
  {
    type: "warning-light",
    icon: "heroicons-outline:ban",
  },
];

export const alertType5 = [
  {
    type: "dark-outline",
  },
  {
    type: "primary-outline",
  },

  {
    type: "secondary-outline",
  },
  {
    type: "success-outline",
  },
  {
    type: "info-outline",
  },
  {
    type: "danger-outline",
  },
  {
    type: "warning-outline",
  },
];

export const alertType6 = [
  {
    type: "dark-outline",
    icon: "fluent:target-20-regular",
  },
  {
    type: "primary-outline",
    icon: "fluent:target-20-regular",
  },

  {
    type: "secondary-outline",
    icon: "heroicons-outline:support",
  },
  {
    type: "success-outline",
    icon: "akar-icons:double-check",
  },
  {
    type: "info-outline",
    icon: "heroicons-outline:information-circle",
  },
  {
    type: "danger-outline",
    icon: "heroicons-outline:exclamation",
  },
  {
    type: "warning-outline",
    icon: "heroicons-outline:ban",
  },
];

export const trackingParcel = [
  {
    title: "Project start date",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    date: "Sep 20, 2021 ",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
];

export const TodoList = [
  {
    id: 1,
    image: userImg,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 2,
    image: user2Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 3,
    image: user3Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 4,
    image: user4Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 5,
    image: user2Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 6,
    image: user3Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
];

//  todo fillter
export const fillters = [
  {
    value: "all",
    name: "My Task",
    icon: "uil:image-v",
  },
  {
    value: "fav",
    name: "Starred",
    icon: "heroicons:star",
  },
  {
    value: "done",
    name: "Completed",
    icon: "heroicons:document-check",
  },
  {
    value: "trash",
    name: "Trash",
    icon: "heroicons:trash",
  },
  {
    name: "Team",
    icon: "heroicons:users",
    value: "team",
  },
  {
    name: "low",
    icon: "heroicons:flag",
    value: "low",
  },
  {
    name: "medium",
    icon: "heroicons:flag",
    value: "medium",
  },
  {
    name: "high",
    icon: "heroicons:flag",
    value: "high",
  },
  {
    name: "update",
    icon: "heroicons:refresh",
    value: "update",
  },
];

export const editCatagory = [
  {
    value: "team",
    label: "team",
  },
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
];

export const projectCatagory = [
  {
    value: "team",
    label: "team",
  },
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
];

import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";
import avatar5 from "@/assets/images/avatar/av-5.svg";
import avatar6 from "@/assets/images/avatar/av-6.svg";
export const assignOption = [
  {
    title: "Mahedi Amin",
    image: avatar1,
  },
  {
    title: "Sovo Haldar",
    image: avatar2,
  },
  {
    title: "Rakibul Islam",
    image: avatar3,
  },
  {
    title: "Moni Haldar",
    image: avatar4,
  },
  {
    title: "Pritom Miha",
    image: avatar5,
  },
  {
    title: "Simanta Kika",
    image: avatar6,
  },
];
