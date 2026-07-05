import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:cursor-not-allowed disabled:opacity-60";

export function PrimaryButton(
  props: ButtonHTMLAttributes<HTMLButtonElement> & { asAnchor?: false }
) {
  return (
    <button
      type="button"
      className={`${baseStyles} bg-[#2563EB] text-white shadow-sm hover:bg-[#1D4ED8]`}
      {...props}
    />
  );
}

export function SecondaryButton(
  props: ButtonHTMLAttributes<HTMLButtonElement> & { asAnchor?: false }
) {
  return (
    <button
      type="button"
      className={`${baseStyles} border border-slate-300 bg-white text-slate-900 hover:bg-slate-100`}
      {...props}
    />
  );
}

export function PrimaryLink({
  href,
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={`${baseStyles} bg-[#2563EB] text-white shadow-sm hover:bg-[#1D4ED8] ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={`${baseStyles} border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
