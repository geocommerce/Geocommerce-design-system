import * as React from 'react';
/**
 * Numbered capability card used in the "How we help brands grow" grid.
 * @startingPoint section="Marketing" subtitle="Numbered service grid card" viewport="700x300"
 */
export interface ServiceCardProps {
  /** Two-digit sequence, e.g. "01". */
  index?: string;
  /** Discipline label, e.g. "DESIGN". */
  category: string;
  title: React.ReactNode;
  body: React.ReactNode;
  href?: string;
  surface?: 'raised' | 'sunken' | 'outline' | 'inverse' | 'brand';
}
export function ServiceCard(props: ServiceCardProps): JSX.Element;
