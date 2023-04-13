export const menuItems4 = [
  
  {
    isHeadr: true,
    title: "ADMIN",
  },
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
    title: "入代訂單審核",
    icon: "heroicons:newspaper",
    link: "review",
    
  },

  {
    isHeadr: true,
    title: "PRODUCT",
  },
  {
    title: "銷售商品維護",
    icon: "heroicons:shopping-bag",
    child: [
      {
        childtitle: "單一商品類別維護",
        childlink: "admin",
      },
      {
        childtitle: "單一商品內容維護",
        childlink: "product-singletype",
      },
      {
        childtitle: "組合商品類別維護",
        childlink: "admin",
      },
      {
        childtitle: "組合商品內容維護",
        childlink: "admin",
      },
    ],
  },
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
    title: "入代訂單審核",
    icon: "heroicons:swatch",
    link: "pendingAgent",
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

  
];



