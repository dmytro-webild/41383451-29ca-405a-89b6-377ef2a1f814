import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type AuftrivioLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function AuftrivioLogo({ className, size = "md" }: AuftrivioLogoProps) {
  const iconSize = size === "sm" ? "size-6" : size === "lg" ? "size-10" : "size-8";
  const titleSize = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl lg:text-3xl" : "text-base lg:text-lg";
  const subSize = size === "sm" ? "text-[0.5rem]" : size === "lg" ? "text-[0.65rem] lg:text-[0.7rem]" : "text-[0.55rem]";

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <div className={cn("relative flex items-center justify-center shrink-0", iconSize)}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
          <defs>
            <linearGradient id="gold-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F7E29C" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997015" />
            </linearGradient>
            <linearGradient id="gold-logo-inner" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF2C6" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <path d="M16 2L2 28H8.5L16 13L23.5 28H30L16 2Z" fill="url(#gold-logo-grad)" />
          <path d="M10.8 18H21.2L18.8 13.5H13.2L10.8 18Z" fill="#000000" />
          <path d="M12.5 15.5H19.5" stroke="url(#gold-logo-inner)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn("font-heading font-extrabold text-foreground tracking-[0.14em] uppercase", titleSize)}>
          AUFTRIVIO
        </span>
        <span className={cn("font-mono text-accent tracking-[0.24em] uppercase mt-0.5 font-bold", subSize)}>
          DIGITALAGENTUR
        </span>
      </div>
    </div>
  );
}
