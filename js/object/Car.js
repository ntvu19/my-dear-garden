import * as THREE from "three";

var Car = function () {
  this.mesh = new THREE.Object3D();

  //Create Wheel
  var geombackWheel = new THREE.BoxGeometry(12, 12, 33);
  var matbackWheel = new THREE.MeshPhongMaterial({ color: 0x333333 });

  var backWheel = new THREE.Mesh(geombackWheel, matbackWheel);
  backWheel.castShadow = true;
  backWheel.receiveShadow = true;
  backWheel.position.set(-18, 6, 0);
  this.mesh.add(backWheel);

  var geomfrontWheel = new THREE.BoxGeometry(12, 12, 33);
  var matfrontWheel = new THREE.MeshPhongMaterial({ color: 0x333333 });

  var frontWheel = new THREE.Mesh(geomfrontWheel, matfrontWheel);
  backWheel.castShadow = true;
  backWheel.receiveShadow = true;
  frontWheel.position.set(18, 6, 0);
  this.mesh.add(frontWheel);

  //Create Car Frame
  var geomFrame = new THREE.BoxGeometry(60, 15, 30);
  var matFrame = new THREE.MeshPhongMaterial({ color: 0xcc0033 });

  var frame = new THREE.Mesh(geomFrame, matFrame);
  frame.castShadow = true;
  frame.receiveShadow = true;
  frame.position.set(0, 12, 0);
  this.mesh.add(frame);

  //Create Cabin
  var geomCabin = new THREE.BoxGeometry(33, 12, 24);
  var matCabin = new THREE.MeshPhongMaterial({ color: 0xffffff });

  var cabin = new THREE.Mesh(geomCabin, matCabin);
  cabin.castShadow = true;
  cabin.receiveShadow = true;
  cabin.position.set(-6, 25.5, 0);
  this.mesh.add(cabin);
};

export { Car };
