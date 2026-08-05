import * as React from 'react';
/** Single-line text field with label, hint and error states. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message; replaces the hint and reddens the border. */
  error?: React.ReactNode;
  tone?: 'light' | 'inverse';
}
export function Input(props: InputProps): JSX.Element;
