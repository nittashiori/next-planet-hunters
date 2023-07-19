import { FC, MouseEventHandler, ReactNode } from "react";
import Link from 'next/link';

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
  disabled?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children?: ReactNode;
};

export const SampleButton: FC<ButtonProps> = ({
  onClick,
  type = 'button',
  className = '',
  href,
  disabled = false,
  target = '_self',
  children,
}) => {
  return href ? (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};