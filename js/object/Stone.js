import * as THREE from "three";
import { Colors } from "../variables/Color.js";

const PI = 3.14;
const matStone = new THREE.MeshLambertMaterial({ color: 0x9eaeac });

var SmallStone = function () {
  var geomStone = new THREE.DodecahedronGeometry(1, 0);
  var stone = new THREE.Mesh(geomStone, matStone);
  stone.castShadow = true;
  stone.rotation.set(0, 0, PI / 2);
  stone.scale.set(1, 1, 1);
  return stone;
};

var MediumStone = function () {
  var geomStone = new THREE.DodecahedronGeometry(1, 0);
  var stone = new THREE.Mesh(geomStone, matStone);
  stone.castShadow = true;
  stone.rotation.set(0, 12, PI / 2);
  stone.scale.set(3, 1, 1);
  return stone;
};

export { SmallStone, MediumStone };
