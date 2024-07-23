import p5 from "p5";
import { Module, State, Modules } from "./base.ts";

@(import.meta.hmrify({ reconstruct: true }))
export default class CircleModule extends Module {
  someAttributeThatOnlyCircleModuleHas: number;
  image: p5.Image;

  constructor(protected p: p5) {
    super(p);

    this.image = this.p.loadImage("Untitled.png");

    this.someAttributeThatOnlyCircleModuleHas = 42;
  }

  setup(modules: Modules, state: Partial<State>): void {}

  draw(modules: Modules, state: State): void {
    this.p.circle(50, 50, 80);
    this.p.image(this.image, 100, 0);
  }
}
