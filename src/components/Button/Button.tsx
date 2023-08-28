import Link from 'next/link';
import { FC, ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import style from './Button.module.css';

type Breakpoint = 'sm' | 'md' | 'lg';

type BreakpointWidth = {
  [key in Breakpoint]?: number | string;
};

type MaxWidth<T> = T | "none" | "initial" | "inherit" | "unset";

interface Props {
  /**
   * クリック時のイベントハンドラ
   */
  onClick?: () => void;

  /**
   * クラス名
   */
  className?: string;

  /**
   * ボタンのサイズ
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * ボタンの幅
   */
  width?: 'full' | string | number | BreakpointWidth | MaxWidth<string | number>;
  
  /**
   * ボタンのタイプ
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * ボタンのリンク先
   */
  href?: string;

  /**
   * ボタンの無効化
   */
  disabled?: boolean;

  /**
   * ボタンのラベル
   */
  children: ReactNode;
}

interface CustomCSSProperties extends CSSProperties {
  '--button-width-sm'?: number | string;
  '--button-width-md'?: number | string;
  '--button-width-lg'?: number | string;
  maxWidth?: MaxWidth<string | number> | undefined;
}

export const Button: FC<Props> = ({
  onClick,
  className,
  size = 'md',
  width,
  type = 'button',
  href,
  disabled = false,
  children,
}) => {
  const breakpoints: Breakpoint[] = ['sm', 'md', 'lg'];

  const containerClasses = clsx(
    className,
    style.button,
    style[size],
    disabled && style.disabled,
  );

  const styles: CustomCSSProperties = {
    width: width ? "100%" : "auto",
    maxWidth: width === "full" ? "100%" : width as MaxWidth<string | number>,
  };

  /**
   * widthがBreakpointWidths型じゃない場合
   * 全てのbreakpointにwidthを適用する
   * widthが数値の場合はpxとして扱う
   */
  if (typeof width !== 'object') {
    breakpoints.forEach((breakpoint) => {
      styles[`--button-width-${breakpoint}`] = typeof width === 'number' ? `${width}px` : width;
    });
  } else {
    /**
     * widthがBreakpointwidths型の場合
     * widthのkeyをbreakpointとして、valueをwidthとして適用する
     * 未定義のbreakpointには0を適用する
     * widthが数値の場合はpxとして扱う
     */
    breakpoints.forEach((breakpoint) => {
      styles[`--button-width-${breakpoint}`] = typeof width[breakpoint] === 'number' ? `${width[breakpoint]}px` : width[breakpoint] ?? 0;
    });
  }

  return href ? (
    <Link href={href} className={containerClasses} style={styles}>
      {children}
    </Link>
  ) : (
    <button type={type} className={containerClasses} style={styles} onClick={onClick}>
      {children}
    </button>
  )
}