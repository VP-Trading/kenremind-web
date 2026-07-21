import Image from "next/image";

import { cn } from "~/lib/utils";

type BrandLogoProps = {
  variant?: "header" | "footer";
  tone?: "default" | "inverse";
  className?: string;
  priority?: boolean;
};

const variantClasses: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  header: "h-9 w-auto max-w-[11rem] sm:h-10 sm:max-w-[12rem]",
  footer: "h-7 w-auto max-w-[8.75rem] sm:h-8 sm:max-w-[9.5rem]",
};

export function BrandLogo({
  variant = "header",
  tone = "default",
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={
        tone === "inverse"
          ? "/brand/logo-footer.webp"
          : "/brand/logo-wordmark.png"
      }
      alt="KenRemind"
      width={2400}
      height={438}
      priority={priority}
      className={cn("block object-contain", variantClasses[variant], className)}
    />
  );
}
