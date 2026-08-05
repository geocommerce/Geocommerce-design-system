import * as React from 'react';
/** Single-open FAQ list with a rotating plus glyph. */
export interface AccordionItem { q: React.ReactNode; a: React.ReactNode }
export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
}
export function Accordion(props: AccordionProps): JSX.Element;
