import * as React from 'react';

/**
 * Primary call-to-action control. Pill-shaped, Poppins medium, brand green by default.
 * @startingPoint section="Core" subtitle="Pill buttons in four variants and three sizes" viewport="700x180"
 */
export interface ButtonProps {
  /** Visual treatment. `inverse` is for dark/green backgrounds. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
