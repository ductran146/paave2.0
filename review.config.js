window.REVIEW_CONFIG = {
  "projectId": "paave",
  "name": "Paave",
  "entry": "project/paave.html?embed=1",
  "version": "V1",
  "queryScope": false,
  "pages": [
    {
      "path": "home",
      "title": "Trang chủ",
      "titleEn": "Home",
      "group": "Trang chủ",
      "manifest": true
    },
    {
      "path": "search",
      "title": "Tìm kiếm",
      "titleEn": "Search",
      "group": "Trang chủ",
      "manifest": true
    },
    {
      "path": "services",
      "title": "Tuỳ chỉnh dịch vụ nhanh",
      "titleEn": "Customize quick services",
      "group": "Trang chủ",
      "manifest": true
    },
    {
      "path": "edge:search-no-result",
      "title": "Tìm kiếm · Tìm không thấy mã",
      "titleEn": "Search · No matching stock",
      "group": "Trang chủ",
      "kind": "edge",
      "parent": "search",
      "manifest": true
    },
    {
      "path": "edge:search-no-recent",
      "title": "Tìm kiếm · Chưa có tìm kiếm gần đây",
      "titleEn": "Search · No recent searches",
      "group": "Trang chủ",
      "kind": "edge",
      "parent": "search",
      "manifest": true
    },
    {
      "path": "edge:services-empty",
      "title": "Tuỳ chỉnh dịch vụ nhanh · Chưa có dịch vụ nhanh",
      "titleEn": "Customize quick services · No quick services",
      "group": "Trang chủ",
      "kind": "edge",
      "parent": "services",
      "manifest": true
    },
    {
      "path": "market",
      "title": "Thị trường",
      "titleEn": "Market",
      "group": "Thị trường",
      "manifest": true
    },
    {
      "path": "stock-detail",
      "title": "Thông tin mã",
      "titleEn": "Stock details",
      "group": "Thị trường",
      "screen": "stock-agr",
      "manifest": true
    },
    {
      "path": "index-detail",
      "title": "Chỉ số",
      "titleEn": "Index details",
      "group": "Thị trường",
      "screen": "idx-vn30",
      "manifest": true
    },
    {
      "path": "theme-detail",
      "title": "Chủ đề ngành",
      "titleEn": "Sector themes",
      "group": "Thị trường",
      "screen": "theme-automobiles",
      "manifest": true
    },
    {
      "path": "edge:market-suggest-none",
      "title": "Thị trường · Thêm mã: không có mã phù hợp",
      "titleEn": "Market · Add stock: no match",
      "group": "Thị trường",
      "kind": "edge",
      "parent": "market",
      "manifest": true
    },
    {
      "path": "edge:events-empty",
      "title": "Thông tin mã · Sự kiện: không có trong khoảng ngày",
      "titleEn": "Stock details · Events: none in date range",
      "group": "Thị trường",
      "kind": "edge",
      "parent": "stock-detail",
      "manifest": true
    },
    {
      "path": "trade",
      "title": "Giao dịch, đặt lệnh",
      "titleEn": "Trade, place order",
      "group": "Giao dịch",
      "manifest": true
    },
    {
      "path": "orderbook",
      "title": "Sổ lệnh",
      "titleEn": "Order book",
      "group": "Giao dịch",
      "manifest": true
    },
    {
      "path": "order-detail",
      "title": "Chi tiết lệnh",
      "titleEn": "Order details",
      "group": "Giao dịch",
      "screen": "order-ld-290001",
      "manifest": true
    },
    {
      "path": "order-modify",
      "title": "Sửa lệnh",
      "titleEn": "Modify order",
      "group": "Giao dịch",
      "screen": "modify-ld-290001",
      "manifest": true
    },
    {
      "path": "edge:orderbook-empty",
      "title": "Sổ lệnh · Lọc không còn lệnh",
      "titleEn": "Order book · Filter leaves no orders",
      "group": "Giao dịch",
      "kind": "edge",
      "parent": "orderbook",
      "manifest": true
    },
    {
      "path": "edge:orderbook-search-none",
      "title": "Sổ lệnh · Tìm mã không thấy",
      "titleEn": "Order book · Stock code not found",
      "group": "Giao dịch",
      "kind": "edge",
      "parent": "orderbook",
      "manifest": true
    },
    {
      "path": "edge:orderhist-empty",
      "title": "Sổ lệnh · Lịch sử lệnh: không có lệnh phù hợp",
      "titleEn": "Order book · Order history: no matching orders",
      "group": "Giao dịch",
      "kind": "edge",
      "parent": "orderbook",
      "manifest": true
    },
    {
      "path": "club",
      "title": "Câu lạc bộ",
      "titleEn": "Club",
      "group": "Câu lạc bộ",
      "manifest": true
    },
    {
      "path": "post-detail",
      "title": "Chi tiết bài đăng",
      "titleEn": "Post details",
      "group": "Câu lạc bộ",
      "manifest": true
    },
    {
      "path": "chat",
      "title": "Paave AI",
      "titleEn": "Paave AI",
      "group": "Câu lạc bộ",
      "manifest": true
    },
    {
      "path": "asset",
      "title": "Tài sản",
      "titleEn": "Assets",
      "group": "Tài sản",
      "manifest": true
    },
    {
      "path": "more",
      "title": "Thêm",
      "titleEn": "More",
      "group": "Tài sản",
      "manifest": true
    },
    {
      "path": "profile",
      "title": "Hồ sơ",
      "titleEn": "Profile",
      "group": "Tài sản",
      "manifest": true
    },
    {
      "path": "security",
      "title": "Xác thực hai bước",
      "titleEn": "Two-factor authentication",
      "group": "Tài sản",
      "manifest": true
    },
    {
      "path": "community",
      "title": "Cộng đồng",
      "titleEn": "Community",
      "group": "Tài sản",
      "manifest": true
    },
    {
      "path": "app-settings",
      "title": "Cài đặt ứng dụng",
      "titleEn": "App settings",
      "group": "Tài sản",
      "manifest": true
    },
    {
      "path": "account-manage",
      "title": "Quản lý tài khoản",
      "titleEn": "Account management",
      "group": "Tài sản",
      "manifest": true
    }
  ],
  "devices": [
    "mobile"
  ],
  "reviewerEmails": [],
  "embed": true,
  "aliases": {
    "stock-agr": "stock-detail",
    "stock-hpg": "stock-detail",
    "stock-vic": "stock-detail",
    "stock-msn": "stock-detail",
    "stock-nvl": "stock-detail",
    "stock-vcb": "stock-detail",
    "stock-ctg": "stock-detail",
    "stock-bid": "stock-detail",
    "idx-vn30": "index-detail",
    "idx-hnx30": "index-detail",
    "idx-hnx": "index-detail",
    "idx-upcom": "index-detail",
    "theme-automobiles": "theme-detail",
    "theme-bank": "theme-detail",
    "theme-basic-resources": "theme-detail",
    "theme-chemicals": "theme-detail",
    "theme-construction": "theme-detail",
    "theme-financial-services": "theme-detail",
    "theme-food-beverage": "theme-detail",
    "theme-health-care": "theme-detail",
    "theme-industrial": "theme-detail",
    "theme-insurance": "theme-detail",
    "theme-media": "theme-detail",
    "theme-oil-gas": "theme-detail",
    "theme-personal-household": "theme-detail",
    "theme-real-estate": "theme-detail",
    "theme-retail": "theme-detail",
    "theme-technology": "theme-detail",
    "theme-telecom": "theme-detail",
    "theme-travel-leisure": "theme-detail",
    "theme-utilities": "theme-detail",
    "trade": "trade",
    "trade-agr": "trade",
    "trade-hpg": "trade",
    "trade-vic": "trade",
    "trade-msn": "trade",
    "trade-nvl": "trade",
    "trade-ctg": "trade",
    "trade-bid": "trade",
    "order-ld-290001": "order-detail",
    "order-ld-290002": "order-detail",
    "order-ld-290003": "order-detail",
    "order-ld-290004": "order-detail",
    "order-ld-290005": "order-detail",
    "order-ld-290006": "order-detail",
    "order-ld-290007": "order-detail",
    "order-ld-290008": "order-detail",
    "order-ld-281001": "order-detail",
    "order-ld-281002": "order-detail",
    "order-ld-281003": "order-detail",
    "order-ld-271001": "order-detail",
    "order-ld-271002": "order-detail",
    "order-ld-261001": "order-detail",
    "order-ld-261002": "order-detail",
    "order-ld-231001": "order-detail",
    "order-ld-221001": "order-detail",
    "order-ld-201001": "order-detail",
    "order-ld-161001": "order-detail",
    "order-ld-121001": "order-detail",
    "order-ld-250901": "order-detail",
    "modify-ld-290001": "order-modify",
    "modify-ld-290002": "order-modify",
    "modify-ld-290004": "order-modify",
    "modify-ld-290006": "order-modify"
  }
};
