"use client";

import Link from "next/link";
import type { ComponentProps, PropsWithChildren } from "react";

import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = PropsWithChildren<
  ComponentProps<typeof Link> & {
    className?: string;
    eventName: string;
    eventCategory?: string;
    eventLabel?: string;
  }
>;

export function TrackedLink({
  children,
  eventName,
  eventCategory,
  eventLabel,
  className,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      onClick={() => {
        trackEvent({
          event: eventName,
          category: eventCategory,
          label: eventLabel,
        });
      }}
    >
      {children}
    </Link>
  );
}
