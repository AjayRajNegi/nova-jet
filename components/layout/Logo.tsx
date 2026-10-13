import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#top" className="flex items-center gap-2 font-display text-[22px] font-extrabold tracking-[-.03em]">
      <i className="grid size-[26px] place-items-center rounded-[50%_50%_50%_4px] bg-ink text-[12px] text-white not-italic">
        NJ
      </i>
      <span>
        Nova<b className="text-brand">Jet</b>
      </span>
    </Link>
  );
}