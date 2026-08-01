"use client";

import { useState, type ReactNode } from "react";

import { ChevronIcon } from "@/components/landing/icons";

export type AccordionItemData = {
  id: string;
  header: ReactNode;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string | null;
  className?: string;
};

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenId = null,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : []),
  );

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.has(id);
      if (allowMultiple) {
        const next = new Set(prev);
        if (isOpen) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      }
      return new Set(isOpen ? [] : [id]);
    });
  };

  return (
    <div className={`accordion${className ? ` ${className}` : ""}`}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div className="accordion-item" key={item.id}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              onClick={() => toggle(item.id)}
            >
              {item.header}
              <ChevronIcon
                className={`accordion-chevron${isOpen ? " open" : ""}`}
              />
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={`accordion-panel${isOpen ? " open" : ""}`}
            >
              <div className="accordion-panel-inner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
