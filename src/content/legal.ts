export type LegalCopy = {
  en: string;
  am: string;
};

export type LegalSection = {
  title: LegalCopy;
  body: LegalCopy;
};

export type LegalPageContent = {
  badge: LegalCopy;
  title: LegalCopy;
  subtitle: LegalCopy;
  updatedLabel: LegalCopy;
  sections: LegalSection[];
};

export const privacyPageContent: LegalPageContent = {
  badge: {
    en: "Privacy Policy",
    am: "የግል መረጃ ጥበቃ",
  },
  title: {
    en: "Privacy Policy",
    am: "የግል መረጃ ጥበቃ",
  },
  subtitle: {
    en: "How we handle your data",
    am: "መረጃዎን እንዴት እንደምንይዝ",
  },
  updatedLabel: {
    en: "Updated June 2026",
    am: "የተዘመነው ጁን 2026",
  },
  sections: [
    {
      title: { en: "1. What We Store", am: "1. የምናስቀምጠው መረጃ" },
      body: {
        en: "KenRemind keeps your reminders on your device. We do not upload reminder content to our servers.",
        am: "KenRemind አስታዋሾችዎን በመሣሪያዎ ላይ ብቻ ያስቀምጣል። አስታዋሾችን ወደ ሰርቨራችን አንሰቅልም።",
      },
    },
    {
      title: { en: "2. Data Security", am: "2. የመረጃ ደህንነት" },
      body: {
        en: "On mobile, reminder data is encrypted on-device. The encryption key is stored in the device keychain/keystore.",
        am: "በሞባይል ላይ የአስታዋሽ ውሂብ በመሣሪያዎ ላይ ተመስጥሮ (Encrypted) ይጠበቃል። የምስጠራ ቁልፉ በመሣሪያዎ Keychain/Keystore ውስጥ ይከማቻል።",
      },
    },
    {
      title: { en: "3. Notifications", am: "3. ማሳወቂያዎች" },
      body: {
        en: "Notification delivery is handled by your operating system. We do not receive notification content.",
        am: "የማሳወቂያ አቅርቦት የሚከናወነው በስልክዎ ኦፕሬቲንግ ሲስተም ነው። እኛ የማሳወቂያውን ይዘት አንቀበልም።",
      },
    },
    {
      title: { en: "4. Analytics", am: "4. ትንታኔ (Analytics)" },
      body: {
        en: "KenRemind uses Firebase Analytics to understand app usage, improve reminder reliability, and make features like widgets and notifications better. We do not collect reminder titles, notes, names, birthdates, exact dates, or calendar event text. You can turn analytics off anytime in Settings.",
        am: "KenRemind የመተግበሪያ አጠቃቀምን ለመረዳት፣ የአስታዋሽ ታማኝነትን ለማሻሻል እና እንደ ዊጀቶች እና ማሳወቂያዎች ያሉ ባህሪያትን የተሻሉ ለማድረግ Firebase Analytics ይጠቀማል። የአስታዋሽ ርዕሶችን፣ ማስታወሻዎችን፣ ስሞችን፣ የልደት ቀንን፣ ትክክለኛ ቀኖችን ወይም የካሌንደር ክስተት ጽሑፍን አንሰበስብም። ትንታኔን በSettings ውስጥ በማንኛውም ጊዜ ማጥፋት ይችላሉ።",
      },
    },
    {
      title: { en: "5. Contact", am: "5. እውቂያ" },
      body: {
        en: "For privacy concerns, contact info@kenremind.app.",
        am: "ለግል መረጃ ጥበቃ ስጋቶች በ info@kenremind.app ያግኙን።",
      },
    },
  ],
};

export const termsPageContent: LegalPageContent = {
  badge: {
    en: "Terms & Conditions",
    am: "የአጠቃቀም መመሪያዎች",
  },
  title: {
    en: "Terms & Conditions",
    am: "የአጠቃቀም መመሪያዎች",
  },
  subtitle: {
    en: "Read the terms for using KenRemind",
    am: "የKenRemind የአጠቃቀም መመሪያዎችን ያንብቡ",
  },
  updatedLabel: {
    en: "Updated June 2026",
    am: "የተዘመነው ጁን 2026",
  },
  sections: [
    {
      title: { en: "1. Use of the App", am: "1. መተግበሪያውን መጠቀም" },
      body: {
        en: "KenRemind provides reminder scheduling based on Ethiopian dates. Use the app at your own discretion.",
        am: "KenRemind በኢትዮጵያ ቀናት ላይ የተመሰረተ የአስታዋሽ ማስተካከያ አገልግሎት ይሰጣል። መተግበሪያውን መጠቀም የራስዎ ምርጫ እና ኃላፊነት ነው።",
      },
    },
    {
      title: { en: "2. No Warranty", am: "2. ዋስትና ስለማለመኖሩ" },
      body: {
        en: "We provide the app as-is without warranty. We are not responsible for missed reminders or damages.",
        am: "መተግበሪያውን ያቀረብነው ባለበት ሁኔታ (As-is) እና ያለ ምንም ዋስትና ነው። ለሚያልፉ ማስታወሻዎች ወይም ለማንኛውም ዓይነት ጉዳት እኛ ተጠያቂ አይደለንም።",
      },
    },
    {
      title: { en: "3. Data Responsibility", am: "3. የመረጃ ኃላፊነት" },
      body: {
        en: "You are responsible for the accuracy of reminder data you enter.",
        am: "የሚያስገቡት የአስታዋሽ መረጃ ትክክለኛነት የእርስዎ ኃላፊነት ነው።",
      },
    },
    {
      title: { en: "4. Updates", am: "4. ዝመናዎች" },
      body: {
        en: "We may update the app and these terms over time. Continued use means you accept changes.",
        am: "መተግበሪያውን እና እነዚህን መመሪያዎች በጊዜ ሂደት ማሻሻል እንችላለን። መተግበሪያውን መጠቀምዎን መቀጠል ለውጦቹን እንደተቀበሉ ይቆጠራል።",
      },
    },
    {
      title: { en: "5. Contact", am: "5. እውቂያ" },
      body: {
        en: "Questions? Contact info@kenremind.app.",
        am: "ጥያቄ ካለዎት በ info@kenremind.app ያግኙን።",
      },
    },
  ],
};
