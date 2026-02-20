import { Mesh, Group } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export function PalmTree1(): Promise<Group> {
  return new Promise<Group>((resolve) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("./assets/PalmTree1/palm_tree.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("./assets/PalmTree1/palm_tree.obj", (root) => {
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

export function PalmTree2(): Promise<Group> {
  return new Promise<Group>((resolve) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load("./assets/PalmTree2/palm_tree.mtl", (mtl) => {
      mtl.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load("./assets/PalmTree2/palm_tree.obj", (root) => {
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
