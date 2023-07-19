import type { Meta, StoryObj } from "@storybook/react";

import { SampleButton } from "./SampleButton";

/**
 * 様々な状態や用途に対応したカスタマイズ可能なボタンです。カスタムスタイルやイベントハンドラを追加することも可能です。
 */
export default {
  title: "Components/Atoms/SampleButton",
  component: SampleButton,
  tags: ['autodocs'],
} as Meta<typeof SampleButton>;

type Story = StoryObj<typeof SampleButton>;

/**
 * 通常のボタンスタイルで、クリックイベントを処理できます。このボタンは、フォームの送信やモーダルの表示など、様々な目的で使用できます。
 */
export const Default: Story = {
  args: {
    children: "Sample Button",
  },
};

/**
 * ボタンをリンクとして機能させます。指定されたhref属性により、クリックすると指定されたURLに遷移します。デザインはデフォルトのボタンと同様ですが、リンクとしての機能が追加されています。
 */
export const Link: Story = {
  args: {
    href: "https://example.com",
    children: "Link",
  },
};

/**
 * リンクとして機能させた場合に target="_blank" を指定すると、新しいタブで指定されたURLが開きます。これは、外部サイトへのリンクや、ユーザーが現在のページを離れずにリンク先を確認したい場合に使用します。
 */
export const LinkBlank: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    children: "Link",
  },
};

/**
 * ボタンが無効状態（クリックできない）で表示されます。これは、フォームの入力が完了していない場合や、条件を満たしていない場合など、特定の状況下でボタンを無効にする必要があるときに使用します。
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};