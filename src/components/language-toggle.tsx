"use client";

import { useLanguage, type Language } from "~/components/language-provider";
import { cn } from "~/lib/utils";

const options: Array<{ value: Language; label: string }> = [
  { value: "en", label: "EN" },
  { value: "am", label: "አማ" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-white/75 p-1",
        className,
      )}
      aria-label="Language switcher"
      role="group"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLanguage(option.value)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold transition",
            language === option.value
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
          aria-pressed={language === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

