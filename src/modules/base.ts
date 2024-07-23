import p5 from "p5";
import BackgroundModule from "./background.module.ts";
import CircleModule from "./circle.module.ts";

export type State = {};

export abstract class Module {
  setupExecuted = false;
  constructor(protected p: p5) {}

  abstract setup(modules: Modules, state: Partial<State>): void;

  abstract draw(modules: Modules, state: State): void;
}

export type Modules = {
  BackgroundModule: BackgroundModule;
  CircleModule: CircleModule;
};
