export const menuItems2 = [
  
 
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
    isHeadr: true,
    title: "SETTINGS",
  },
  {
    title: "經營工具維護",
    icon: "heroicons:swatch",
    link: " ",
  },
  
];



