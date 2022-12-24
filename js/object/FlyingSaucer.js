import { Mesh } from "three";
import { OBJLoader } from "../OBJLoader.js";
import { MTLLoader } from "../MTLLoader.js";

var FlyingSaucer = function () {
  return new Promise(function (resolve, reject) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("../../assets/FlyingSaucer/flying_saucer.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("../../assets/FlyingSaucer/flying_saucer.obj", (root) => {
        root.traverse(function (child) {
          if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        resolve(root);
      });
    });
  });
};

export { FlyingSaucer };
