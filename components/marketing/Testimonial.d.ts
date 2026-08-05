import * as React from 'react';
/** Pull quote with attribution; used once per page at large scale. */
export interface TestimonialProps {
  quote: React.ReactNode;
  name: React.ReactNode;
  role?: React.ReactNode;
  avatar?: string;
  tone?: 'light' | 'inverse';
}
export function Testimonial(props: TestimonialProps): JSX.Element;
