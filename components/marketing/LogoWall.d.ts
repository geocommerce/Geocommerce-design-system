import * as React from 'react';
/** Client logo grid. Image entries render greyscale at 70% opacity; string entries render as uppercase text. */
export interface LogoWallProps {
  /** Image URLs or plain brand names. */
  logos?: Array<string | React.ReactNode>;
  columns?: number;
  tone?: 'light' | 'inverse';
}
export function LogoWall(props: LogoWallProps): JSX.Element;
