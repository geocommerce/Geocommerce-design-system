import * as React from 'react';
/** Portfolio tile: media on top, category kicker, title, excerpt, arrow link. */
export interface CaseStudyCardProps {
  /** Image URL; a neutral placeholder renders when omitted. */
  image?: string;
  /** e.g. "Beauty / Redesign". */
  category: string;
  title: React.ReactNode;
  excerpt?: React.ReactNode;
  href?: string;
  /** CSS aspect-ratio for the media well. */
  ratio?: string;
}
export function CaseStudyCard(props: CaseStudyCardProps): JSX.Element;
