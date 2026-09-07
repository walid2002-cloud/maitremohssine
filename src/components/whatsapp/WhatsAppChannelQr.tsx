import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  className?: string;
  size?: "sm" | "md";
};

export default function WhatsAppChannelQr({ label, className, size = "md" }: Props) {
  const dim = size === "sm" ? 96 : 128;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-xl border border-gold/25 bg-white p-2",
          size === "sm" ? "w-24" : "w-32"
        )}
      >
        <Image
          src="/images/whatsapp-channel-qr.png"
          alt=""
          width={dim}
          height={dim}
          className="h-auto w-full"
          sizes={`${dim}px`}
        />
      </div>
      <p className="mt-2 text-center text-[11px] text-white/40">{label}</p>
    </div>
  );
}
