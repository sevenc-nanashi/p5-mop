# p5-mop / Module Oriented p5.js Template

**English** | [日本語](./README.ja.md)

This is a template for creating p5.js projects in a module-oriented way.

## Features

- TypeScript
- Hot Module Replacement (HMR) support powered by [vite-plugin-hmrify](https://github.com/sevenc-nanashi/vite-plugin-hmrify)

## About Modules

You can define module in `./modules/*.module.ts`.

You can use `this.p` to access p5 instance.
Each module should extend abstract class `Module` (defined in base.ts), and implement the `setup` and `draw` methods.
The constructor corresponds to p5.js's `preload` function.

Please refer `./modules/circle.module.ts` for an example.

## How to Use

### `State`

`State` is a variable that is shared among modules.
Override `State` in `./modules/base.ts` to get started.
You should initialize each variable in the `setup` method of the module.

### `Modules`

You can use `modules` to get instances of other modules.
`modules`'s type is automatically updated in `./modules/modules.generated.ts`. Do not edit this file manually.

## License

This template is licensed under the MIT License.
