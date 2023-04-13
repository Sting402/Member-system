export const menuItems3 = [
  
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
    title: "SETTINGS",
  },
  {
    title: "經營工具維護",
    icon: "heroicons:swatch",
    link: " ",
  },
  
];



