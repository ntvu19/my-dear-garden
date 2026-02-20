import * as THREE from "three";

export class Car {
  mesh: THREE.Object3D;

  constructor() {
    this.mesh = new THREE.Object3D();

    const geombackWheel = new THREE.BoxGeometry(12, 12, 33);
    const matbackWheel = new THREE.MeshPhongMaterial({ color: 0x333333 });

    const backWheel = new THREE.Mesh(geombackWheel, matbackWheel);
    backWheel.castShadow = true;
    backWheel.receiveShadow = true;
    backWheel.position.set(-18, 6, 0);
    this.mesh.add(backWheel);

    const geomfrontWheel = new THREE.BoxGeometry(12, 12, 33);
    const matfrontWheel = new THREE.MeshPhongMaterial({ color: 0x333333 });

    const frontWheel = new THREE.Mesh(geomfrontWheel, matfrontWheel);
    backWheel.castShadow = true;
    backWheel.receiveShadow = true;
    frontWheel.position.set(18, 6, 0);
    this.mesh.add(frontWheel);

    const geomFrame = new THREE.BoxGeometry(60, 15, 30);
    const matFrame = new THREE.MeshPhongMaterial({ color: 0xcc0033 });

    const frame = new THREE.Mesh(geomFrame, matFrame);
    frame.castShadow = true;
    frame.receiveShadow = true;
    frame.position.set(0, 12, 0);
    this.mesh.add(frame);

    const geomCabin = new THREE.BoxGeometry(33, 12, 24);
    const matCabin = new THREE.MeshPhongMaterial({ color: 0xffffff });

    const cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    cabin.position.set(-6, 25.5, 0);
    this.mesh.add(cabin);
  }
}
