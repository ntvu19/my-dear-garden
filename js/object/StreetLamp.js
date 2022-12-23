import { Mesh } from "three";
import { OBJLoader } from "../OBJLoader.js";
import { MTLLoader } from "../MTLLoader.js";

var StreetLamp = function () {
  return new Promise(function (resolve, reject) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("../../assets/StreetLamp/street_lamp.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("../../assets/StreetLamp/street_lamp.obj", (root) => {
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

export { StreetLamp };
