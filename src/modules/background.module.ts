import { Module, State, Modules } from "./base.ts";

export default class BackgroundModule extends Module {
  setup(modules: Modules): void {
    this.p.createCanvas(640, 480)
  }

  draw(modules: Modules, state: State): void {
    this.p.background(0);
  }
}
