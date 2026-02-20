import type { JSX, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler;
};

export function Button({ children, onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>;
}
