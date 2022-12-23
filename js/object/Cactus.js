import { Mesh } from "three";
import { OBJLoader } from "../OBJLoader.js";
import { MTLLoader } from "../MTLLoader.js";

var Cactus = function () {
  return new Promise(function (resolve, reject) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("../../assets/Cactus/cactus.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("../../assets/Cactus/cactus.obj", (root) => {
        root.traverse(function (child) {
          if (child instanceof Mesh) {
            child.castShadow = true;
          }
        });
        resolve(root);
      });
    });
  });
};

export { Cactus };
