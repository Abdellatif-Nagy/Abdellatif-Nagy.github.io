/* =========================================================
   SITE CONTENT — edit this file to update your portfolio.
   Every text has an English (en) and Arabic (ar) version.
   ========================================================= */

const SITE = {
  name: { en: "Abdellatif Nagy", ar: "عبد اللطيف ناجي" },
  email: "abdo.nagy1762@gmail.com",
  whatsapp: "https://wa.me/201122612595",
  cv: "assets/Abdellatif-Nagy-CV.pdf",
  // Profile photo: put your photo at assets/img/profile.jpg — the placeholder is used until then.
  photo: "assets/img/profile.png",
  photoFallback: "assets/img/profile.png",
  // Formspree: create a free form at https://formspree.io and paste its ID here (e.g. "xyzabcd").
  formspreeId: "xljdazpp",
  social: {
    linkedin: "https://www.linkedin.com/in/abdellatif-nagy-24b95226a/",
    github: "https://github.com/Abdellatif-Nagy",
    upwork: "https://www.upwork.com/freelancers/~01e75e0c1aefbdad3f",
    mostaql: "https://mostaql.com/u/Abdellatif1762",
    khamsat: "https://khamsat.com/user/abdellatif_nagy",
  },
};

/* ---------- Experience (newest first) ---------- */
const EXPERIENCE = [
  {
    role: { en: "Data Analyst", ar: "محلل بيانات" },
    company: "Cardial",
    place: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
    date: { en: "03/2026 – Present", ar: "03/2026 – حتى الآن" },
    desc: {
      en: "Leading data analytics and process automation for a leading Saudi retail brand. Using Power BI, Python and Power Automate to eliminate manual reporting, track market competitiveness and deliver actionable sales insights.",
      ar: "قيادة تحليل البيانات وأتمتة العمليات لعلامة تجارية رائدة في قطاع التجزئة السعودي، باستخدام Power BI وPython وPower Automate لإلغاء التقارير اليدوية، ومتابعة التنافسية في السوق، وتقديم رؤى بيعية قابلة للتنفيذ.",
    },
    tags: ["Power BI", "Python", "Power Automate"],
  },
  {
    role: { en: "Data Analyst", ar: "محلل بيانات" },
    company: "Qara Digital Solutions",
    place: { en: "New Cairo, Egypt", ar: "القاهرة الجديدة، مصر" },
    date: { en: "10/2024 – 03/2026", ar: "10/2024 – 03/2026" },
    desc: {
      en: "Built and maintained Power BI dashboards and reports, using advanced Excel and data visualization to deliver actionable insights on key performance metrics.",
      ar: "بناء وصيانة لوحات وتقارير Power BI، مع استخدام Excel المتقدم وتصوير البيانات لتقديم رؤى قابلة للتنفيذ حول مؤشرات الأداء الرئيسية.",
    },
    tags: ["Power BI", "Excel", "DAX"],
  },
  {
    role: { en: "Freelance Data Analyst", ar: "محلل بيانات مستقل" },
    company: "Upwork · Mostaql · Khamsat",
    place: { en: "Remote", ar: "عن بُعد" },
    date: { en: "03/2024 – Present", ar: "03/2024 – حتى الآن" },
    desc: {
      en: "Delivered 30+ data analysis and visualization projects with Python, SQL and Power BI, including high-impact work for Saudi Airlines and the Ministries of Environment and Culture. Cut reporting time by 40% and used statistical modeling to guide strategic decisions.",
      ar: "تنفيذ أكثر من 30 مشروعًا لتحليل وتصوير البيانات باستخدام Python وSQL وPower BI، من بينها أعمال مؤثرة للخطوط الجوية السعودية ووزارتي البيئة والثقافة. تقليل وقت إعداد التقارير بنسبة 40% واستخدام النمذجة الإحصائية لدعم القرارات الاستراتيجية.",
    },
    tags: ["Python", "SQL", "Power BI", "Statistics"],
  },
  {
    role: { en: "Coding Instructor", ar: "مدرّس برمجة" },
    company: "iSchool",
    place: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    date: { en: "06/2024 – 10/2024", ar: "06/2024 – 10/2024" },
    desc: {
      en: "Led educational activities and designed student-centered learning experiences using both teaching and technical skills.",
      ar: "قيادة الأنشطة التعليمية وتصميم تجارب تعلّم تتمحور حول الطالب باستخدام المهارات التربوية والتقنية.",
    },
    tags: ["Teaching", "Presentation"],
  },
];

const EDUCATION = [
  {
    title: { en: "Power BI Developer Program", ar: "برنامج مطوّر Power BI" },
    org: { en: "Information Technology Institute (ITI)", ar: "معهد تكنولوجيا المعلومات (ITI)" },
    date: "11/2023 – 03/2024",
    desc: {
      en: "Advanced T-SQL, ERD & database modeling, MSBI (SSIS, SSAS, SSRS), data warehousing, Python, Tableau, Power BI and Excel.",
      ar: "T-SQL متقدم، تصميم قواعد البيانات وERD، أدوات MSBI (SSIS وSSAS وSSRS)، مستودعات البيانات، Python وTableau وPower BI وExcel.",
    },
  },
  {
    title: { en: "B.Sc. Electrical Engineering", ar: "بكالوريوس الهندسة الكهربائية" },
    org: { en: "Aswan University", ar: "جامعة أسوان" },
    date: "2015 – 2020",
    desc: { en: "Grade: Very Good with Honours.", ar: "التقدير: جيد جدًا مع مرتبة الشرف." },
  },
];

/* ---------- Skills & tools ---------- */
const SKILLS = {
  tools: [
    { name: "Power BI", level: 95 },
    { name: "SQL Server (T-SQL)", level: 90 },
    { name: "Excel", level: 90 },
    { name: "Looker Studio", level: 85 },
    { name: "Python (Pandas)", level: 80 },
    { name: "Google Sheets", level: 85 },
    { name: "Tableau", level: 70 },
    { name: "Alteryx", level: 65 },
    { name: "Power Automate", level: 75 },
  ],
  core: {
    en: ["Data Analytics", "Data Modeling", "Data Visualization", "Data Warehousing", "Data Cleaning", "DAX", "ETL (SSIS)", "Statistical Analysis", "Presentation Skills", "Creative Thinking"],
    ar: ["تحليل البيانات", "نمذجة البيانات", "تصوير البيانات", "مستودعات البيانات", "تنظيف البيانات", "DAX", "ETL (SSIS)", "التحليل الإحصائي", "مهارات العرض", "التفكير الإبداعي"],
  },
};

/* ---------- Projects ----------
   image: put a screenshot at the given .jpg path; the .svg placeholder is shown until then. */
const PROJECTS = [
  {
    id: "flight-delays",
    featured: true,
    category: "powerbi",
    title: { en: "Flight Delays Analysis", ar: "تحليل تأخر الرحلات الجوية" },
    subtitle: { en: "Power BI + Machine Learning", ar: "Power BI + تعلّم الآلة" },
    image: "assets/img/flight-delays.png",
    tags: ["Power BI", "Machine Learning", "Statistics"],
    summary: {
      en: "Analysed 2021 flight data to uncover the drivers of rising departure delays in New York, then used a machine-learning model to predict and reduce disruptions.",
      ar: "تحليل بيانات رحلات 2021 لاكتشاف أسباب ارتفاع تأخيرات الإقلاع في نيويورك، ثم استخدام نموذج تعلّم آلة للتنبؤ بالاضطرابات وتقليلها.",
    },
    context: {
      en: "Case study: acting as an analytics consultant for an aviation authority facing a rise in departure delays from New York airports, including the January 2022 New York → Florida disruption.",
      ar: "دراسة حالة: العمل كمستشار تحليلات لهيئة طيران تواجه ارتفاعًا في تأخيرات الإقلاع من مطارات نيويورك، بما في ذلك اضطرابات رحلات نيويورك ← فلوريدا في يناير 2022.",
    },
    deliverables: {
      en: ["Interactive Power BI dashboard", "Statistical and predictive analysis", "Office-placement strategy for supervisors", "Interpretation of the ML model results"],
      ar: ["لوحة Power BI تفاعلية", "تحليل إحصائي وتنبؤي", "استراتيجية لتوزيع مكاتب الإشراف", "تفسير نتائج نموذج تعلّم الآلة"],
    },
    insights: {
      en: ["Average take-off delay and its link to passenger satisfaction", "Key factors driving satisfaction and how to keep it above 6.1", "Seasonal patterns in delays", "Location-based vs. volume-based supervision", "Delay forecasting and the top 3 least-risky flights"],
      ar: ["متوسط تأخر الإقلاع وعلاقته برضا الركاب", "العوامل الرئيسية المؤثرة في الرضا وكيفية إبقائه فوق 6.1", "الأنماط الموسمية للتأخيرات", "الإشراف حسب الموقع مقابل الإشراف حسب حجم الرحلات", "التنبؤ بالتأخير وتحديد أقل 3 رحلات مخاطرة"],
    },
    links: [
      { label: { en: "Open dashboard", ar: "فتح اللوحة" }, url: "https://app.powerbi.com/reportEmbed?reportId=a7daf580-4209-4085-a529-0f1b967a719d&autoAuth=true&ctid=df8679cd-a80e-45d8-99ac-c83ed7ff95a0" },
    ],
  },
  {
    id: "google-ads",
    featured: true,
    category: "looker",
    title: { en: "Google Ads Performance Dashboard", ar: "لوحة أداء إعلانات Google" },
    subtitle: { en: "Looker Studio", ar: "Looker Studio" },
    image: "assets/img/google-ads.jpg",
    tags: ["Looker Studio", "Google Ads", "Marketing"],
    summary: {
      en: "An in-depth Looker Studio dashboard tracking Google Ads campaigns: spend, clicks, conversions, keywords, devices, audiences and geography.",
      ar: "لوحة Looker Studio متعمقة لمتابعة حملات Google Ads: الإنفاق والنقرات والتحويلات والكلمات المفتاحية والأجهزة والجمهور والمناطق الجغرافية.",
    },
    context: {
      en: "Marketing teams needed one place to see which campaigns, keywords and devices were worth the budget.",
      ar: "احتاجت فرق التسويق إلى مكان واحد لمعرفة الحملات والكلمات المفتاحية والأجهزة التي تستحق الميزانية.",
    },
    deliverables: {
      en: ["Campaign overview: impressions, clicks, conversions", "Cost breakdown by campaign, keyword and device", "Audience and geographic performance", "Trend analysis over time"],
      ar: ["نظرة عامة على الحملات: مرات الظهور والنقرات والتحويلات", "تفصيل التكلفة حسب الحملة والكلمة المفتاحية والجهاز", "أداء الجمهور والمناطق الجغرافية", "تحليل الاتجاهات عبر الزمن"],
    },
    insights: {
      en: ["Identify the campaigns and keywords with the best cost per conversion", "Spot devices and regions where budget is wasted", "Monitor performance trends to adjust bids early"],
      ar: ["تحديد الحملات والكلمات المفتاحية ذات أفضل تكلفة لكل تحويل", "اكتشاف الأجهزة والمناطق التي تُهدر فيها الميزانية", "متابعة اتجاهات الأداء لتعديل المزايدات مبكرًا"],
    },
    links: [{ label: { en: "Open dashboard", ar: "فتح اللوحة" }, url: "https://lookerstudio.google.com/s/mtPaz41y1zg" }],
  },
  {
    id: "google-merch",
    featured: false,
    category: "looker",
    title: { en: "Google Merch Shop Analytics", ar: "تحليلات متجر Google Merch" },
    subtitle: { en: "Looker Studio + GA4", ar: "Looker Studio + GA4" },
    image: "assets/img/google-merch.jpg",
    tags: ["Looker Studio", "GA4", "E-commerce"],
    summary: {
      en: "Connected Looker Studio to Google Analytics 4 to analyse user behaviour, traffic sources, demographics and the product funnel of the Google Merchandise Store.",
      ar: "ربط Looker Studio بـ Google Analytics 4 لتحليل سلوك المستخدمين ومصادر الزيارات والتركيبة السكانية ومسار شراء المنتجات في متجر Google Merchandise.",
    },
    context: {
      en: "The goal was to understand who visits the shop, where they come from, and where they drop off before buying.",
      ar: "كان الهدف فهم من يزور المتجر، ومن أين يأتي، وأين يتوقف قبل الشراء.",
    },
    deliverables: {
      en: ["Acquisition report by channel and source", "Demographics report", "Product performance and conversion funnel", "Drill-downs with calculated fields and filters"],
      ar: ["تقرير الاستحواذ حسب القناة والمصدر", "تقرير التركيبة السكانية", "أداء المنتجات ومسار التحويل", "تحليلات تفصيلية بالحقول المحسوبة والفلاتر"],
    },
    insights: {
      en: ["Products with high cart-abandonment rates", "Best-converting traffic sources", "Audience segments to target for growth"],
      ar: ["منتجات ذات معدلات تخلٍّ مرتفعة عن السلة", "مصادر الزيارات الأعلى تحويلًا", "شرائح جمهور يمكن استهدافها للنمو"],
    },
    links: [{ label: { en: "Open dashboard", ar: "فتح اللوحة" }, url: "https://lookerstudio.google.com/s/nh5_C5Im8bs" }],
  },
  {
    id: "exam-system",
    featured: true,
    category: "sql",
    title: { en: "Online Examination System", ar: "نظام الاختبارات الإلكتروني" },
    subtitle: { en: "ITI Graduation Project · SQL Server + Power BI", ar: "مشروع تخرج ITI · SQL Server + Power BI" },
    image: "assets/img/exam-system.jpg",
    tags: ["SQL Server", "ERD", "Stored Procedures", "Power BI"],
    summary: {
      en: "End-to-end automated examination system: a robust SQL Server database that generates and grades exams, plus a Power BI dashboard for ITI staff.",
      ar: "نظام اختبارات آلي متكامل: قاعدة بيانات SQL Server قوية تُنشئ الاختبارات وتصححها، مع لوحة Power BI لفريق ITI.",
    },
    context: {
      en: "ITI graduation project: automate exam creation, correction and reporting instead of doing it by hand.",
      ar: "مشروع تخرج ITI: أتمتة إنشاء الاختبارات وتصحيحها وإعداد تقاريرها بدلًا من العمل اليدوي.",
    },
    deliverables: {
      en: ["Entity-Relationship design and normalized database with backups", "Stored procedures to generate and correct exams automatically", "Stored-procedure reports for staff", "Power BI dashboard for student and course performance"],
      ar: ["تصميم ERD وقاعدة بيانات منظمة مع نسخ احتياطية", "إجراءات مخزنة لإنشاء الاختبارات وتصحيحها تلقائيًا", "تقارير مبنية على الإجراءات المخزنة للموظفين", "لوحة Power BI لأداء الطلاب والمقررات"],
    },
    insights: {
      en: ["Exam generation and grading fully automated", "Instant visibility into student and track performance"],
      ar: ["أتمتة كاملة لإنشاء الاختبارات وتصحيحها", "رؤية فورية لأداء الطلاب والمسارات"],
    },
    links: [{ label: { en: "Open dashboard", ar: "فتح اللوحة" }, url: "https://app.powerbi.com/view?r=eyJrIjoiODI3MjQ3YTktODQxYi00Yjc4LTgxMTEtZmY0MGE4ZmE4NTk1IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" }],
  },
  {
    id: "watch-sales",
    featured: false,
    category: "powerbi",
    title: { en: "Watch Sales Dashboard", ar: "لوحة مبيعات الساعات" },
    subtitle: { en: "Power BI · Saudi retail", ar: "Power BI · تجزئة سعودية" },
    image: "assets/img/watch-sales.jpg",
    tags: ["Power BI", "Excel", "Retail"],
    summary: {
      en: "Power BI dashboard for a watch retailer in Saudi Arabia covering sales (YoY), products and inventory, customer loyalty and regional performance.",
      ar: "لوحة Power BI لمتجر ساعات في السعودية تغطي المبيعات (مقارنة سنوية) والمنتجات والمخزون وولاء العملاء والأداء حسب المنطقة.",
    },
    context: {
      en: "The business tracked sales in Excel sheets and needed a single view of growth, stock and customers.",
      ar: "كانت الشركة تتابع المبيعات في ملفات Excel واحتاجت إلى رؤية موحدة للنمو والمخزون والعملاء.",
    },
    deliverables: {
      en: ["Sales overview with year-over-year comparison", "Product and inventory analysis", "Customer insights and loyalty", "Regional analysis across Saudi Arabia"],
      ar: ["نظرة عامة على المبيعات مع مقارنة سنوية", "تحليل المنتجات والمخزون", "رؤى العملاء والولاء", "تحليل حسب مناطق المملكة"],
    },
    insights: {
      en: ["Top-selling brands and slow-moving stock", "Loyal customer segments", "Regions with the highest growth"],
      ar: ["العلامات الأكثر مبيعًا والمخزون بطيء الحركة", "شرائح العملاء الأوفياء", "المناطق الأعلى نموًا"],
    },
    links: [{ label: { en: "Open dashboard", ar: "فتح اللوحة" }, url: "https://app.powerbi.com/view?r=eyJrIjoiNjRhMWUzNmQtOTcwYy00OTI4LTkyNzAtMzU3ZmRjMjhlNzMwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" }],
  },
];

/* ---------- Certificates ---------- */
const CERTIFICATES = [
  { title: "PL-300: Power BI Data Analyst Associate", issuer: "Microsoft", date: "03/2024", highlight: true, url: "https://learn.microsoft.com/en-us/users/abdonagy1762gmailcom-2287/credentials/abb0560ec3c7380f" },
  { title: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera", date: "03/2023", highlight: true, url: "https://www.coursera.org/account/accomplishments/professional-cert/YSPEGR5ZHFQF" },
  { title: "Data Analyst in Power BI", issuer: "DataCamp", date: "", url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/23e4b08ad0ee2f5eba32585385aca167b0279896" },
  { title: "SQL Server Developer", issuer: "DataCamp", date: "11/2023", url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/b18be1d4451f38f9c16f54e48004844f4764f86b" },
  { title: "Data Analyst with Python", issuer: "DataCamp", date: "01/2024", url: "" },
  { title: "Power BI Job Simulation", issuer: "PwC Switzerland · Forage", date: "04/2024", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_K6mm2S8seKyZxiKSi_1712291631760_completion_certificate.pdf" },
  { title: "Advanced Data Analytics", issuer: "almentor", date: "", url: "https://www.almentor.net/en/certificate/52yvsy2k6j" },
  { title: "Introduction to Business Intelligence", issuer: "credential.net", date: "", url: "https://www.credential.net/42a175ea-777d-4035-ab89-33839e105f6c" },
  { title: "Freelancing Basics", issuer: "Maharatech (ITIDA)", date: "", url: "" },
];

/* ---------- Freelance services ---------- */
const SERVICES = [
  { icon: "chart", title: { en: "Power BI Dashboards", ar: "لوحات Power BI" }, desc: { en: "Interactive dashboards with clean data models and DAX measures your team can trust.", ar: "لوحات تفاعلية بنماذج بيانات منظمة ومقاييس DAX يمكن لفريقك الاعتماد عليها." } },
  { icon: "looker", title: { en: "Looker Studio Reports", ar: "تقارير Looker Studio" }, desc: { en: "Marketing and GA4 reports connected to Google Ads, Sheets and BigQuery.", ar: "تقارير تسويق وGA4 مرتبطة بـ Google Ads وSheets وBigQuery." } },
  { icon: "db", title: { en: "SQL & Data Modeling", ar: "SQL ونمذجة البيانات" }, desc: { en: "Database design, queries, stored procedures and star-schema data warehouses.", ar: "تصميم قواعد البيانات والاستعلامات والإجراءات المخزنة ومستودعات البيانات." } },
  { icon: "clean", title: { en: "Data Cleaning & Excel", ar: "تنظيف البيانات وExcel" }, desc: { en: "Turn messy spreadsheets into reliable, analysis-ready datasets and Excel reports.", ar: "تحويل الجداول غير المنظمة إلى بيانات موثوقة جاهزة للتحليل وتقارير Excel." } },
  { icon: "python", title: { en: "Python Analysis", ar: "التحليل باستخدام Python" }, desc: { en: "Exploratory analysis, statistics and forecasting with Pandas and scikit-learn.", ar: "تحليل استكشافي وإحصاء وتنبؤ باستخدام Pandas وscikit-learn." } },
  { icon: "bolt", title: { en: "Reporting Automation", ar: "أتمتة التقارير" }, desc: { en: "Automate recurring reports with Power Automate and Python — hours saved every week.", ar: "أتمتة التقارير الدورية باستخدام Power Automate وPython لتوفير ساعات كل أسبوع." } },
];

/* ---------- Client reviews ----------
   Add screenshots to assets/img/reviews/ and list them here, e.g.
   { image: "assets/img/reviews/review-1.jpg", source: "Mostaql" }
   While this list is empty, the page shows links to your freelance profiles instead. */
const REVIEWS = [];
