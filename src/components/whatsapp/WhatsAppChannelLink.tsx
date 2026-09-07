"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_CHANNEL_URL } from "@/data/publicLinks";
import { useCopy } from "@/context/LanguageContext";
import { trackWhatsAppChannelClick, type WhatsAppChannelSource } from "@/lib/gtag";
import { cn } from "@/lib/utils";

type Props = {
  source: WhatsAppChannelSource;
  variant?: "outline" | "gold" | "text";
  className?: string;
  children: React.ReactNode;
  showIcon?: boolean;
};

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  outline:
    "inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-transparent font-semibold text-white/80 transition hover:border-gold/50 hover:bg-white/[0.03] hover:text-gold",
  gold: "inline-flex items-center justify-center gap-2 rounded-full bg-gold font-semibold text-black shadow-[0_0_32px_rgba(201,162,39,0.22)] transition hover:bg-gold-bright",
  text: "inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-gold",
};

export default function WhatsAppChannelLink({
  source,
  variant = "outline",
  className,
  children,
  showIcon = true,
}: Props) {
  const t = useCopy().whatsappChannel;

  return (
    <a
      href={WHATSAPP_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.ariaLabel}
      onClick={() => trackWhatsAppChannelClick(source)}
      className={cn(variantClass[variant], className)}
    >
      {showIcon && <WhatsAppIcon className="h-4 w-4" />}
      {children}
    </a>
  );
}
