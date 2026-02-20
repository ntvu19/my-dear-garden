import { Mesh, Group } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export function Tree(): Promise<Group> {
  return new Promise<Group>((resolve) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("./assets/Tree/tree.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("./assets/Tree/tree.obj", (root) => {
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
