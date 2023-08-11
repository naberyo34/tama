# @tama/design-system

Ark UI + vanilla-extractで作成するデザインシステム。

## Getting Started

```bash
npm i
npm run dev // Storybook が立ち上がる
```

アプリケーションで利用する際はビルドを行う。

```bash
npm run build
```

## 参考

- 実装: [Radix UI design-system](https://github.com/radix-ui/design-system/tree/master)
- 作成するコンポーネントの種類: [Chakra UI components](https://chakra-ui.com/docs/components)

## 実装ルール

### コンポーネントの作成方針

プリミティブなコンポーネント、いわゆる `Atoms` 的なものは `core` 下に作成する。
複数の `core`を組み合わせたコンポーネント、`Molecules` `Organisms` `Templates` 相当のものは `templates` 下に作成する。

### 具体的なロジックは書かない

`onClick` 処理などはすべてアプリケーション側に実装する。

### 必ず forwardRef で実装する

Refを渡せないと後で確実に困るため。

### asChild を禁止する

Ark UIには `asChild` の機能があり、デフォルトで出力されるDOM構造をユーザー定義のものに強制上書きできる。
これはコンポーネントを壊す恐れがあるため、propsからOmitして外部から設定できないようにすること。

### スタイリングの数値は 迷ったら 4n

絶対守る必要はない
