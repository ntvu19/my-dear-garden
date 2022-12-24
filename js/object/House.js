import { Mesh } from "three";
import { OBJLoader } from "../OBJLoader.js";
import { MTLLoader } from "../MTLLoader.js";

var House = function () {
  return new Promise(function (resolve, reject) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("../../assets/House/house.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("../../assets/House/house.obj", (root) => {
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

export { House };
