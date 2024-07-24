import p5 from "p5";
import { Module, State, Modules } from "./base.ts";

@(import.meta.hmrify({ reconstruct: true }))
export default class ObjectsModule extends Module {
  image: p5.Image;

  constructor(protected p: p5) {
    super(p);

    this.image = this.p.loadImage("Untitled.png");
  }

  setup(modules: Modules, state: Partial<State>): void {}

  draw(modules: Modules, state: State): void {
    this.p.circle(170, 50, 80);
    this.p.image(this.image, 150, 0);
    this.p.fill(255);
    this.p.textSize(32);
    this.p.text("Try replacing something in this file", 10, 150);
  }
}