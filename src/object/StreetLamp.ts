import { Mesh, Group } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export function StreetLamp(): Promise<Group> {
  return new Promise<Group>((resolve) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("./assets/StreetLamp/street_lamp.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("./assets/StreetLamp/street_lamp.obj", (root) => {
        root.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        resolve(root);
      });
    });
  });
}
