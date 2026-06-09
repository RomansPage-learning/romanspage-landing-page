"use client";

import { useEffect, useRef, useState, type CSSProperties, type PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delayMs?: number;
}>;

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? "revealed" : ""} ${className ?? ""}`.trim()}
      style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
