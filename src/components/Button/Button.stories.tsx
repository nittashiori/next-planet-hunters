import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

/**
 * 様々な状態や用途に対応したカスタマイズ可能なボタンです。カスタムスタイルやイベントハンドラを追加することも可能です。
 */
export default {
  title: "Components/Atoms/Button",
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

/**
 * 通常のボタンスタイルで、クリックイベントを処理できます。このボタンは、フォームの送信やモーダルの表示など、様々な目的で使用できます。
 */
export const Default: Story = {
  args: {
    children: "Button",
  }
}

/**
 * ボタンをリンクとして機能させます。指定されたhref属性により、クリックすると指定されたURLに遷移します。デザインはデフォルトのボタンと同様ですが、リンクとしての機能が追加されています。
 */
export const Link: Story = {
  args: {
    children: "Link",
    href: "/",
  }
}

/**
 * 小サイズのボタンです。
 */
export const SizeSmall: Story = {
  args: {
    children: "Small",
    size: "sm",
  }
}

/**
 * 大サイズのボタンです。
 */
export const SizeLarge: Story = {
  args: {
    children: "Large",
    size: "lg",
  }
}

/**
 * widthに `full` を指定すると、ボタンの幅が親要素いっぱいになります。
 */
export const FullWidth: Story = {
  args: {
    children: "Full Width",
    width: "full",
  }
}

/**
 * 幅はBreakpointごとに指定することができます。
 */
export const WidthBreakpoint: Story = {
  args: {
    width: { sm: "full", md: "200px", lg: "600px" },
    children: "Custom Width",
  },
}

/**
 * ボタンの無効化を行います。このボタンはクリックできなくなり、デフォルトのスタイルとは異なるスタイルが適用されます。
 */
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  }
}