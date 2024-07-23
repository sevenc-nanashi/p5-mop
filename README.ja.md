# p5-mop / モジュール指向 p5.js テンプレート

[English](./README.md) | **日本語**

モジュール指向で p5.js プロジェクトを作成するためのテンプレートです。

## 機能

- TypeScript
- [vite-plugin-hmrify](https://github.com/sevenc-nanashi/vite-plugin-hmrify) による Hot Module Replacement（HMR）サポート

## モジュールについて

`./modules/*.module.ts` でモジュールを定義できます。

`this.p` を使って p5.js のインスタンスにアクセスできます。
各モジュールは `base.ts` の抽象クラス `Module` を拡張し、`setup` と `draw` メソッドを実装する必要があります。
コンストラクタは p5.js の `preload` 関数に対応します。

例については `./modules/circle.module.ts` を参照してください。

## 使い方

### `State`

`State` はモジュール間で共有される変数です。
`./modules/base.ts` で `State` をオーバーライドしてください。
モジュールの `setup` メソッドで初期化するのを推奨します。

### `Modules`

他のモジュールのインスタンスを取得するには `modules` を使用できます。
`modules` の型は `./modules/modules.generated.ts` で自動的に更新されます。このファイルを手動で編集しないでください。

## ライセンス

MIT Licenseの下で提供されています。
