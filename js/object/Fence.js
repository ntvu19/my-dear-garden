import * as THREE from "three";
import { Colors } from "../variables/Color.js";

var Fence = function () {
  //
  this.mesh = new THREE.Object3D();
  var matBrown = new THREE.MeshLambertMaterial({ color: 0xa3785f });
  var wood = [];
  var geomWood = new THREE.BoxGeometry(1, 1, 1);
  for (var i = 0; i < 4; i++) {
    wood[i] = new THREE.Mesh(geomWood, matBrown);
    this.mesh.add(wood[i]);
    wood[i].castShadow = true;
    wood[i].receiveShadow = true;
  }
  wood[0].scale.set(0.15, 1.7, 0.4);
  wood[1].scale.set(0.15, 1.8, 0.4);
  wood[2].scale.set(0.1, 0.3, 3.2);
  wood[3].scale.set(0.1, 0.3, 3.2);

  wood[0].position.set(0, 1.2, -1);
  wood[1].position.set(0, 1, 1);
  // wood[2].position.set(.12,1.5,0);
  wood[2].position.set(0, 1.5, 0);
  wood[3].position.set(0.12, 0.9, 0);

  wood[3].rotation.x = 3.14 / 32;
  wood[2].rotation.x = -3.14 / 32;
  wood[2].rotation.y = 3.14 / 32;

  this.mesh.position.set(3, 0, 2);
  this.mesh.rotation.y = 3.14 / 5;

};

export { Fence };
