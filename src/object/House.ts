import { Mesh, Group } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export function House(): Promise<Group> {
  return new Promise<Group>((resolve) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("./assets/House/house.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("./assets/House/house.obj", (root) => {
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
