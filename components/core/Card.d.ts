import * as React from 'react';
/** Generic rounded container — 18px radius, hairline border, soft shadow. */
export interface CardProps {
  surface?: 'raised' | 'sunken' | 'outline' | 'inverse' | 'brand';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift and deepen the shadow on hover. */
  interactive?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
