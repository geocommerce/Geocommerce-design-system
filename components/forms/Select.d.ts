import * as React from 'react';
/** Native select with brand chrome. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Plain strings or {value,label} pairs. */
  options?: Array<string | { value: string; label: string }>;
  tone?: 'light' | 'inverse';
}
export function Select(props: SelectProps): JSX.Element;
