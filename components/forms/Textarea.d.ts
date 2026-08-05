import * as React from 'react';
/** Multi-line field for project briefs. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  tone?: 'light' | 'inverse';
}
export function Textarea(props: TextareaProps): JSX.Element;
