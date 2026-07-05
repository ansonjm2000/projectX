"use client";

import { ArrowRight } from "lucide-react";

interface ClaimBonusButtonProps {
  code: string;
  href: string;
}

export function ClaimBonusButton({ code, href }: ClaimBonusButtonProps) {
  const handleClick = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className="inline-flex min-w-[160px] items-center justify-center rounded-[14px] bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#1D4ED8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    >
      Claim Bonus
      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
    </a>
  );
}
