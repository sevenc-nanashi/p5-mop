import p5 from "p5";
import { Modules, State } from "./modules/base.ts";
import BackgroundModule from "./modules/background.module.ts";
import ObjectsModule from "./modules/objects.module.ts";

const state = {} as unknown as State;

new p5((p: p5) => {
  const modules: Modules = {
    BackgroundModule: new BackgroundModule(p),
    ObjectsModule: new ObjectsModule(p),
  };

  p.setup = () => {
    for (const module of Object.values(modules)) {
      module.setup(modules, state);
      module.setupExecuted = true;
    }
  };

  let prevEndedSuccessfully = true;
  p.draw = () => {
    try {
      for (const module of Object.values(modules)) {
        if (!module.setupExecuted) {
          module.setup(modules, state);
          module.setupExecuted = true;
        }
      }
      for (const module of Object.values(modules)) {
        p.push();
        module.draw(modules, state);
        p.pop();
      }
      prevEndedSuccessfully = true;
    } catch (e) {
      p.push();

      p.fill(255, 0, 0);
      p.textSize(32);
      p.textAlign(p.LEFT, p.TOP);
      p.text(String(e), 10, 30);
      p.pop();
      if (prevEndedSuccessfully) {
        console.error(e);
      }
      prevEndedSuccessfully = false;
    }
  };
});
