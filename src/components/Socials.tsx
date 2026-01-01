import Link from "next/link";
import { socials } from "@/data/socials";

export default function Socials({
  size, overrideColor, noColor = false, className
}: {
  size?: number; overrideColor?: string; noColor?: boolean, className?: string;
}) {
  return (
    <div className={`flex flex-row flex-wrap gap-x-3 gap-y-2 justify-center ${className || ""}`}>
      {socials.map(({ href, text, icon: Icon, color }) => (
        <Link
          key={href}
          href={href}
          className={`sm:tooltip rounded-md hover:translate-y-[-0.1rem] transition-[transform]`}
          data-tip={text}
        >
          <Icon size={size} color={noColor ? undefined : (overrideColor || color)} />
        </Link>
      ))}
    </div>
  );
}

