"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** A Link that gets `.is-current` + aria-current when it points at the current page. */
export function NavLink({ href, className, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  const current = pathname === href;
  return (
    <Link
      href={href}
      className={current ? `${className} is-current` : className}
      aria-current={current ? "page" : undefined}
      {...props}
    />
  );
}
