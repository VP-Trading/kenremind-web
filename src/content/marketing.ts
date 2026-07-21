import type { Language } from "~/components/language-provider";

export type Localized = Record<Language, string>;

export const tx = (value: Localized, language: Language) => value[language];

export const navigationItems = [
  { label: { en: "Experience", am: "ተሞክሮ" }, href: "/#features" },
  { label: { en: "Rules", am: "ደንቦች" }, href: "/#rules" },
  { label: { en: "Privacy", am: "ግላዊነት" }, href: "/#privacy" },
  { label: { en: "FAQ", am: "ጥያቄዎች" }, href: "/#faq" },
] satisfies Array<{ label: Localized; href: string }>;

export const ethiopianMonths = [
  { en: "Meskerem", am: "መስከረም" },
  { en: "Tikimt", am: "ጥቅምት" },
  { en: "Hidar", am: "ህዳር" },
  { en: "Tahsas", am: "ታህሳስ" },
  { en: "Tir", am: "ጥር" },
  { en: "Yekatit", am: "የካቲት" },
  { en: "Megabit", am: "መጋቢት" },
  { en: "Miazia", am: "ሚያዚያ" },
  { en: "Ginbot", am: "ግንቦት" },
  { en: "Sene", am: "ሰኔ" },
  { en: "Hamle", am: "ሐምሌ" },
  { en: "Nehase", am: "ነሐሴ" },
  { en: "Pagume", am: "ጳጉሜ" },
] satisfies Localized[];

export const experienceSteps = [
  {
    number: "01",
    eyebrow: { en: "Start naturally", am: "በተፈጥሮ ይጀምሩ" },
    title: { en: "Plan in the dates you use.", am: "በሚጠቀሙባቸው ቀናት ያቅዱ።" },
    description: {
      en: "Choose an Ethiopian day, month, and year. KenRemind keeps the Gregorian equivalent visible without making you calculate it.",
      am: "የኢትዮጵያ ቀን፣ ወር እና ዓመት ይምረጡ። KenRemind የግሪጎሪያን አቻውን ሳያስላዎት ያሳያል።",
    },
    screen: "/brand/mocks/home-ios-2026-07.webp",
    alt: { en: "KenRemind home screen", am: "የKenRemind መነሻ ገጽ" },
  },
  {
    number: "02",
    eyebrow: { en: "Set it once", am: "አንድ ጊዜ ያዘጋጁ" },
    title: {
      en: "Build the reminder in one calm flow.",
      am: "ማሳሰቢያውን በአንድ ቀላል ሂደት ይፍጠሩ።",
    },
    description: {
      en: "Add the details, choose a cadence, and let KenRemind calculate every next occurrence from the Ethiopian date.",
      am: "ዝርዝሩን ያክሉ፣ የመድገም ሂደቱን ይምረጡ እና KenRemind ቀጣዩን ጊዜ ከኢትዮጵያ ቀን እንዲያሰላ ያድርጉ።",
    },
    screen: "/brand/mocks/create-reminder-ios-2026-07.webp",
    alt: { en: "Create reminder screen", am: "የማሳሰቢያ መፍጠሪያ ገጽ" },
  },
  {
    number: "03",
    eyebrow: { en: "See the rhythm", am: "ሂደቱን ይመልከቱ" },
    title: { en: "Your month, already organized.", am: "ወርዎ፣ ቀድሞውኑ ተደራጅቷል።" },
    description: {
      en: "Move through the Ethiopian calendar, spot reminder days, and keep the whole month legible at a glance.",
      am: "በኢትዮጵያ ቀን መቁጠሪያ ውስጥ ይንቀሳቀሱ፣ የማሳሰቢያ ቀናትን ይለዩ እና ወሩን በአንድ እይታ ያንብቡ።",
    },
    screen: "/brand/mocks/calendar-view-ios-2026-07.webp",
    alt: { en: "Ethiopian calendar screen", am: "የኢትዮጵያ ቀን መቁጠሪያ ገጽ" },
  },
] as const;

export const reminderRules = [
  {
    marker: "01",
    title: { en: "One-time dates", am: "የአንድ ጊዜ ቀናት" },
    description: {
      en: "Events, paydays, appointments, and the moments that only need one well-timed nudge.",
      am: "ዝግጅቶች፣ የደመወዝ ቀናት፣ ቀጠሮዎች እና አንድ ጊዜ ብቻ ማሳሰብ የሚፈልጉ ጊዜያት።",
    },
    date: { en: "10 Yekatit", am: "10 የካቲት" },
  },
  {
    marker: "02",
    title: { en: "Monthly Ethiopian", am: "ወርሃዊ ኢትዮጵያዊ" },
    description: {
      en: "Bills and obligations that return on the same Ethiopian day every month.",
      am: "በየወሩ በተመሳሳይ የኢትዮጵያ ቀን የሚመለሱ ክፍያዎች እና ግዴታዎች።",
    },
    date: { en: "Every month", am: "በየወሩ" },
  },
  {
    marker: "03",
    title: { en: "Yearly Ethiopian", am: "ዓመታዊ ኢትዮጵያዊ" },
    description: {
      en: "Birthdays, holidays, and annual celebrations without calendar guesswork.",
      am: "ልደቶች፣ በዓላት እና ዓመታዊ ክብረ በዓላት ያለ ቀን መቁጠሪያ ግምት።",
    },
    date: { en: "Every year", am: "በየዓመቱ" },
  },
  {
    marker: "04",
    title: { en: "Every X days", am: "በየ X ቀናት" },
    description: {
      en: "Custom intervals for medication, rituals, maintenance, and spaced tasks.",
      am: "ለመድሀኒት፣ ልምዶች፣ ጥገና እና በክፍተት ለሚደረጉ ስራዎች ብጁ ጊዜ።",
    },
    date: { en: "Your interval", am: "የእርስዎ ክፍተት" },
  },
] as const;

export const privacyFacts = [
  {
    title: {
      en: "Reminder content stays local",
      am: "የማሳሰቢያ ይዘት በመሣሪያዎ ላይ ይቆያል",
    },
    description: {
      en: "Titles, notes, and reminder details are stored on your device—not on KenRemind servers.",
      am: "ርዕሶች፣ ማስታወሻዎች እና የማሳሰቢያ ዝርዝሮች በመሣሪያዎ ላይ ይቀመጣሉ፤ በKenRemind ሰርቨሮች ላይ አይደሉም።",
    },
  },
  {
    title: { en: "Encrypted on-device", am: "በመሣሪያ ላይ የተመሰጠረ" },
    description: {
      en: "The encryption key remains in your phone’s protected keychain or keystore.",
      am: "የምስጠራ ቁልፉ በስልክዎ የተጠበቀ Keychain ወይም Keystore ውስጥ ይቆያል።",
    },
  },
  {
    title: { en: "Analytics stays respectful", am: "ትንታኔ ግላዊነትን ያከብራል" },
    description: {
      en: "Firebase Analytics excludes reminder text, names, birthdates, exact dates, and calendar event text. You can turn it off in Settings.",
      am: "Firebase Analytics የማሳሰቢያ ጽሑፍን፣ ስሞችን፣ የልደት ቀናትን፣ ትክክለኛ ቀናትን እና የቀን መቁጠሪያ ክስተት ጽሑፍን አያካትትም። በቅንብሮች ውስጥ ማጥፋት ይችላሉ።",
    },
  },
] as const;

export const faqs = [
  {
    question: {
      en: "Does KenRemind upload my reminders?",
      am: "KenRemind ማሳሰቢያዎቼን ይሰቅላል?",
    },
    answer: {
      en: "No. Reminder titles, notes, dates, and other reminder content stay on your device and are not uploaded to KenRemind servers.",
      am: "አይ። የማሳሰቢያ ርዕሶች፣ ማስታወሻዎች፣ ቀናት እና ሌሎች የማሳሰቢያ ይዘቶች በመሣሪያዎ ላይ ይቆያሉ እና ወደ KenRemind ሰርቨሮች አይሰቀሉም።",
    },
  },
  {
    question: {
      en: "Can I see the Gregorian equivalent?",
      am: "የግሪጎሪያን አቻውን ማየት እችላለሁ?",
    },
    answer: {
      en: "Yes. KenRemind keeps Ethiopian dates at the center while showing the matching Gregorian date when it is useful.",
      am: "አዎ። KenRemind የኢትዮጵያ ቀናትን ዋና በማድረግ ሲያስፈልግ ተመሳሳይ የግሪጎሪያን ቀንን ያሳያል።",
    },
  },
  {
    question: {
      en: "Will notifications work offline?",
      am: "ማሳወቂያዎች ያለ ኢንተርኔት ይሰራሉ?",
    },
    answer: {
      en: "Yes. Reminder notifications are scheduled locally through your phone’s operating system.",
      am: "አዎ። የማሳሰቢያ ማሳወቂያዎች በስልክዎ ኦፕሬቲንግ ሲስተም በኩል በአካባቢው ይዘጋጃሉ።",
    },
  },
  {
    question: {
      en: "Can I use KenRemind in Amharic?",
      am: "KenRemindን በአማርኛ መጠቀም እችላለሁ?",
    },
    answer: {
      en: "Yes. Switch between English and Amharic at any time from the website or the app.",
      am: "አዎ። በድረ-ገጹ ወይም በመተግበሪያው ላይ በማንኛውም ጊዜ በእንግሊዝኛ እና በአማርኛ መካከል መቀየር ይችላሉ።",
    },
  },
] as const;
