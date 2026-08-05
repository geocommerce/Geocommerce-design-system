import * as React from 'react';
/** One numbered row of the methodology list, separated by hairline rules. */
export interface ProcessStepProps {
  /** Zero-padded step, e.g. "01". */
  number: string;
  title: React.ReactNode;
  body: React.ReactNode;
  /** Tint the number brand green. */
  active?: boolean;
}
export function ProcessStep(props: ProcessStepProps): JSX.Element;
