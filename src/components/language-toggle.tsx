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
      className={cn("language-toggle", className)}
      aria-label="Language switcher"
      role="group"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLanguage(option.value)}
          className={cn(
            "language-toggle__option",
            language === option.value
              ? "language-toggle__option--active"
              : "language-toggle__option--inactive",
          )}
          aria-pressed={language === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
