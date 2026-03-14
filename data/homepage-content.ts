export const homepageContent = {
  hero: {
    badge: "AI sizing + comfort-focused helmet liner",
    titlePrefix: "Website trình diễn sản phẩm",
    highlight: "đủ ấn tượng để kể câu chuyện",
    titleSuffix: "và dẫn khách hàng đến quyết định mua.",
    description:
      "Đây là frontend định hướng startup công nghệ vật liệu: hiện đại, giàu hiệu ứng, có luồng AI sizing, giải thích chất liệu PU Foam, khu vực chứng nhận và CTA dẫn sang sàn thương mại điện tử.",
    primaryCta: "Try AI Sizing",
    secondaryCta: "Explore Product Story",
    mockup: {
      eyebrow: "AI Size Scan",
      title: "Helmet Liner Fit Demo",
      live: "Live UI",
      alignmentTitle: "Scanning alignment",
      alignmentDescription: "Adjust lighting and keep your head centered",
      predictedSize: "Predicted size",
      predictedValue: "M / 8mm",
      confidence: "Confidence",
      confidenceValue: "94%",
      capture: "Capture",
      analyze: "Analyze",
      result: "Result",
    },
  },

  metrics: [
    { value: "3 bước", label: "trải nghiệm AI sizing" },
    { value: "PU Foam", label: "vật liệu lõi" },
    { value: "24/7", label: "demo scan luôn sẵn sàng" },
    { value: "Multi-market", label: "dẫn mua qua sàn TMĐT" },
  ],

  highlights: [
    {
      title: "PU Foam Comfort Layer",
      description:
        "Tăng độ êm, phân tán áp lực và cải thiện cảm giác đội mũ trong thời gian dài.",
    },
    {
      title: "Better Fit, Less Shake",
      description:
        "Hỗ trợ cải thiện độ ôm, giảm cảm giác lỏng và rung lắc khi di chuyển.",
    },
    {
      title: "AI Size Recommendation",
      description:
        "AI hỗ trợ phân tích dữ liệu đo và gợi ý size liner phù hợp hơn cho từng người dùng.",
    },
  ],

  brandStory: {
    eyebrow: "Brand Story",
    title: "A comfort-tech brand for the next generation of helmet users",
    description:
      "This section helps your homepage feel like a real startup website, not just a product demo. It gives visitors context, mission, and emotional connection.",
    cta: "Explore Brand Story",
    points: [
      {
        title: "Born from a real discomfort problem",
        description:
          "Helmet users often experience pressure, discomfort, and unstable fit during long wear.",
      },
      {
        title: "Built around comfort and trust",
        description:
          "The product story focuses on material quality, compatibility, and confidence through certificates.",
      },
      {
        title: "Made smarter with AI sizing",
        description:
          "Instead of guessing thickness manually, users can experience a more modern recommendation flow.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "A simple flow from curiosity to confidence",
    description:
      "This section helps visitors understand exactly what happens on the website and what they should do next.",
    steps: [
      {
        step: "01",
        title: "Explore the product",
        description:
          "Understand the comfort problem, the PU Foam solution, and why the fit experience matters.",
      },
      {
        step: "02",
        title: "Try AI sizing",
        description:
          "Experience a guided recommendation flow instead of guessing liner size manually.",
      },
      {
        step: "03",
        title: "Buy on marketplace",
        description:
          "Move to your preferred marketplace channel when you are ready to purchase.",
      },
    ],
  },

  productStory: {
    eyebrow: "Product Story",
    title: "Từ nỗi đau khi đội mũ lâu đến trải nghiệm fit thông minh hơn",
    description:
      "Section này đóng vai trò kể câu chuyện sản phẩm, giải thích vì sao PU Foam liner đáng chú ý và vì sao AI sizing là sự khác biệt quan trọng thay vì chỉ là hiệu ứng marketing.",
    features: [
      {
        title: "Long-wear comfort",
        text:
          "Tập trung vào cảm giác thoải mái cho người đội mũ bảo hiểm lâu: đi làm, giao hàng, touring, commuting.",
      },
      {
        title: "Adaptive fit support",
        text:
          "Giúp mũ cho cảm giác vừa vặn hơn với từng người dùng nhờ các tuỳ chọn độ dày và gợi ý size bằng AI.",
      },
      {
        title: "Material-first design",
        text:
          "Nêu bật chất liệu PU Foam như nền tảng của trải nghiệm êm, ổn định và hiện đại hơn so với cách chọn thủ công.",
      },
    ],
  },

  aiSizing: {
    eyebrow: "AI Measure Size",
    title:
      "Một trải nghiệm AI sizing đủ đẹp để gây ấn tượng, đủ rõ để tăng niềm tin",
    description:
      "Bạn có thể dùng section này như demo front-end ngay từ bây giờ. Sau này chỉ cần nối API model thật vào form và camera workflow là có thể thành một trải nghiệm hoàn chỉnh.",

    steps: [
      {
        title: "Capture",
        description:
          "Người dùng mở camera hoặc tải ảnh theo hướng dẫn ánh sáng, góc chụp và khoảng cách.",
      },
      {
        title: "Analyze",
        description:
          "Hệ thống AI phân tích dữ liệu đo đầu hoặc form fit để suy ra gợi ý độ dày hoặc size liner phù hợp.",
      },
      {
        title: "Recommend",
        description:
          "Trả về size đề xuất, độ tự tin của kết quả và CTA dẫn sang Shopee hoặc Lazada để mua.",
      },
    ],

    panel: {
      eyebrow: "Interactive demo",
      title: "Mock AI Sizing Panel",
      badge: "Frontend-ready",
      tabs: {
        camera: "Camera Scan",
        upload: "Upload Image",
      },
    },

    form: {
      nameLabel: "Name",
      namePlaceholder: "Nguyen Van A",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
    },

    scan: {
      cameraTitle: "Ready for guided camera scan",
      uploadTitle: "Upload front / side images for analysis",
      description:
        "Bản demo này mô phỏng camera zone, upload state và kết quả phân tích. Bạn chỉ cần nối backend thật sau.",
      cameraButton: "Open Camera",
      uploadButton: "Upload Photos",
    },

    progress: {
      label: "Inference progress",
    },

    results: {
      recommendedLabel: "Recommended",
      recommendedValue: "Size M",
      thicknessLabel: "Foam Thickness",
      thicknessValue: "8 mm",
      confidenceLabel: "Confidence",
      confidenceValue: "94%",
    },
  },

  certificates: {
    eyebrow: "Certificates",
    title:
      "Đừng chỉ đưa file PDF, hãy biến chứng nhận thành một phần của câu chuyện tin cậy",
    description:
      "Section này mô phỏng cách bạn có thể trình bày chứng nhận theo card, có tiêu đề rõ ràng, có giải thích ngắn gọn và có CTA xem chi tiết.",
    ctaLabel: "View detail",
    items: [
      {
        title: "Material Safety",
        description:
          "Giải thích tài liệu chứng minh vật liệu, độ an toàn và nguồn gốc kiểm định.",
        href: "/certificates",
      },
      {
        title: "Product Validation",
        description:
          "Khu vực trình bày test nội bộ, tiêu chuẩn kỹ thuật, báo cáo kiểm tra hoặc dữ liệu đánh giá fit.",
        href: "/certificates",
      },
      {
        title: "Manufacturing Quality",
        description:
          "Phần mô tả quy trình sản xuất, kiểm soát chất lượng và năng lực nhà máy nếu có.",
        href: "/certificates",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ / Support",
    title: "Các câu hỏi nên có để tăng niềm tin trước khi dẫn sang sàn",
    description:
      "Khi sản phẩm còn mới lạ, FAQ đóng vai trò rất lớn. Nó giúp xử lý hoài nghi về chất liệu, độ tương thích, cách đo size và phạm vi sử dụng.",
    items: [
      {
        q: "Sản phẩm này có thay đổi kết cấu an toàn của mũ bảo hiểm không?",
        a: "Website nên trình bày rất rõ rằng sản phẩm tập trung vào tăng cảm giác thoải mái và độ vừa vặn. Bạn có thể bổ sung tuyên bố phạm vi sử dụng, hướng dẫn lắp đúng cách và các lưu ý từ chứng nhận hoặc kiểm định mà doanh nghiệp đang có.",
      },
      {
        q: "AI sizing hoạt động như thế nào?",
        a: "Người dùng thực hiện scan theo hướng dẫn. Hệ thống phân tích ảnh hoặc dữ liệu đo để gợi ý size liner. Ở bản frontend này, phần AI được mô phỏng UI/UX đẹp mắt để bạn kết nối model thật sau.",
      },
      {
        q: "Website có bán hàng trực tiếp không?",
        a: "Không. Website đóng vai trò giới thiệu sản phẩm, kể câu chuyện thương hiệu, giải thích công nghệ và sau đó dẫn người dùng sang sàn thương mại điện tử để mua.",
      },
      {
        q: "Có thể dùng cho mọi loại mũ không?",
        a: "Bạn nên mô tả rõ các dòng mũ tương thích, các kích cỡ áp dụng và các trường hợp không khuyến nghị sử dụng để tăng độ tin cậy.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "Early reactions that build trust",
    description:
      "Even before you have large-scale customer proof, this section helps communicate confidence through early feedback and pilot reactions.",
    items: [
      {
        name: "Pilot User",
        role: "Daily commuter",
        quote:
          "The product feels more thoughtful than a normal liner accessory. The AI sizing idea makes the experience much more premium.",
      },
      {
        name: "Early Reviewer",
        role: "Helmet enthusiast",
        quote:
          "What stands out is not just comfort, but the way the website explains the product clearly and confidently.",
      },
      {
        name: "Trial Feedback",
        role: "Long-wear rider",
        quote:
          "The positioning feels modern. It gives the impression of a real startup product, not just a small add-on.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Ready to explore",
    title: "Turn product interest into real action",
    description:
      "Let visitors understand the product, explore AI sizing, and then move naturally to your marketplace channel when they are ready to buy.",
    primaryCta: "Try AI Sizing",
    secondaryCta: "Buy on Marketplace",
  },
};