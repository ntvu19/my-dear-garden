import * as THREE from "three";

export class BigTree {
  mesh: THREE.Object3D;

  constructor() {
    this.mesh = new THREE.Object3D();

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const leaveMaterial1 = new THREE.MeshPhongMaterial({ color: 0x91e56e });
    const leaveMaterial2 = new THREE.MeshPhongMaterial({ color: 0xa2ff7a });
    const rootMaterial = new THREE.MeshPhongMaterial({ color: 0x7d5a4f });

    const root = new THREE.Mesh(geometry, rootMaterial);
    root.position.set(0, 0, 0);
    root.scale.set(0.3, 1.5, 0.3);

    const squareLeave01 = new THREE.Mesh(geometry, leaveMaterial1);
    squareLeave01.position.set(0.5, 1.6, 0.5);
    squareLeave01.scale.set(0.8, 0.8, 0.8);

    const squareLeave02 = new THREE.Mesh(geometry, leaveMaterial1);
    squareLeave02.position.set(-0.4, 1.3, -0.4);
    squareLeave02.scale.set(0.7, 0.7, 0.7);

    const squareLeave03 = new THREE.Mesh(geometry, leaveMaterial1);
    squareLeave03.position.set(0.4, 1.7, -0.5);
    squareLeave03.scale.set(0.7, 0.7, 0.7);

    const squareLeave04 = new THREE.Mesh(geometry, leaveMaterial1);
    squareLeave04.position.set(0, 1.2, 0);
    squareLeave04.scale.set(1, 2, 1);

    const squareLeave05 = new THREE.Mesh(geometry, leaveMaterial2);
    squareLeave05.position.set(0, 1.2, 0);
    squareLeave05.scale.set(1.1, 0.5, 1.1);

    this.mesh.add(squareLeave01);
    this.mesh.add(squareLeave02);
    this.mesh.add(squareLeave03);
    this.mesh.add(squareLeave04);
    this.mesh.add(squareLeave05);
    this.mesh.add(root);
  }
}
