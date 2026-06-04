import Image from "next/image";

import { cn } from "~/lib/utils";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

const variantClasses: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  header: "h-9 w-auto max-w-[11rem] sm:h-10 sm:max-w-[12rem]",
  footer: "h-7 w-auto max-w-[8.75rem] sm:h-8 sm:max-w-[9.5rem]",
};

export function BrandLogo({
  variant = "header",
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/brand/logo-wordmark.png"
      alt="KenRemind"
      width={12154}
      height={2218}
      priority={priority}
      className={cn("block object-contain", variantClasses[variant], className)}
    />
  );
}
