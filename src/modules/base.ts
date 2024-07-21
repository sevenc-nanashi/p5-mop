import p5 from "p5";
import { Modules } from "./modules.generated.ts";

export type State = {};

export abstract class Module {
  constructor(protected p: p5) {}

  abstract setup(modules: Modules, state: Partial<State>): void;

  abstract draw(modules: Modules, state: State): void;
}

export type { Modules };
