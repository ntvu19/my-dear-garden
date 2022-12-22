import * as THREE from "three";
import { Colors } from "../variables/Color.js";

var House = function () {
  this.mesh = new THREE.Object3D();

  var geomBase = new THREE.BoxGeometry(5, 5, 5);
  var matBase = new THREE.MeshPhongMaterial({ color: 0xffe4b5});

  var base = new THREE.Mesh(geomBase, matBase);
  base.castShadow = true;
  base.receiveShadow = true;
  base.position.set(0, 0, 0);
  this.mesh.add(base);

  var geomRoof = new THREE.ConeGeometry(3.5, 3, 4);
  var matRoof = new THREE.MeshPhongMaterial({ color: 0x8b4513});

  var roof = new THREE.Mesh(geomRoof, matRoof);
  roof.castShadow = true;
  roof.receiveShadow = true;
  roof.position.set(0, 4, 0);
  roof.rotateY(Math.PI / 4);
  this.mesh.add(roof);
};

export { House };
