import * as React from 'react';
/** Square 20px checkbox; controlled or uncontrolled. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
