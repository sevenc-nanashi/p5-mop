import { Module, State, Modules } from "./base.ts";

@(import.meta.hmrify({ reconstruct: true }))
export default class BackgroundModule extends Module {
  setup(modules: Modules, state: Partial<State>): void {
    this.p.createCanvas(640, 480);
  }

  draw(modules: Modules, state: State): void {
    this.p.background(128);
  }
}
