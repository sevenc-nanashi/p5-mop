import p5 from "p5";
import { Module, Modules, State } from "./modules/base.ts";

const modules = import.meta.glob("./modules/*.module.ts");

const moduleInstances: Modules = {} as unknown as Modules;
const state = {} as unknown as State;

const p5Instance = new p5((p: p5) => {
  p.preload = () => {
    // @ts-expect-error
    p._incrementPreload();
    (async () => {
      for (const module of Object.values(modules)) {
        const moduleJs = (await module()) as { default: typeof Module };
        // @ts-expect-error
        const moduleInstance = new moduleJs.default(p5Instance);

        // @ts-expect-error
        moduleInstances[moduleJs.default.name] = moduleInstance;
      }
      // @ts-expect-error
      p._decrementPreload();
    })();
  };

  p.setup = () => {
    for (const module of Object.values(moduleInstances)) {
      (module as Module).setup(moduleInstances, state);
    }
  };

  let prevEndedSuccessfully = true;
  p.draw = () => {
    try {
      for (const module of Object.values(moduleInstances)) {
        p.push();
        module.draw(moduleInstances, state);
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

if (import.meta.hot) {
  import.meta.hot.accept(
    [
      /* mop-modules */
    ] as readonly string[],
    (modules: (unknown | undefined)[]) => {
      for (const module of modules) {
        if (module) {
          (async () => {
            const moduleJs = module as { default: typeof Module };

            // @ts-expect-error
            const moduleInstance = new moduleJs.default(p5Instance);

            // @ts-expect-error
            moduleInstances[moduleJs.default.name] = moduleInstance;

            moduleInstance.setup(moduleInstances, state);

            console.info(`[p5-mop:hmr] Reloaded module: ${moduleJs.default.name}`);
          })();
        }
      }
    },
  );
}
