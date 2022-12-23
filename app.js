import * as THREE from "three";
import { Airplane } from "./js/object/Airplane.js";
import { SmallStone, MediumStone } from "./js/object/Stone.js";
import { Fence } from "./js/object/Fence.js";
import { OrbitControls } from "./js/OrbitControls.js";
import { Car } from "./js/object/Car.js";
import { BigTree } from "./js/object/BigTree.js";
import { House } from "./js/object/House.js";
import { StreetLamp } from "./js/object/StreetLamp.js";
import { Tree } from "./js/object/Tree.js";
import { Grass } from "./js/object/Grass.js";

// RENDERER
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const textureLoader = new THREE.TextureLoader();

// SCENE
const scene = new THREE.Scene();
textureLoader.load("./assets/sky.jpg", function (texture) {
  scene.background = texture;
});

// CAMERA
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 1;
const far = 2000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 200, 300);
camera.lookAt(0, 0, 0);

const control = new OrbitControls(camera, renderer.domElement);

// LIGHT
{
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(0, 300, 100);
  scene.add(light);
}

// DRAW

//Surface
var geometry = new THREE.PlaneGeometry(300, 300);
var material = new THREE.MeshPhongMaterial({
  color: 0x348c31,
  side: THREE.DoubleSide,
});
var plane = new THREE.Mesh(geometry, material);
plane.rotateX(-Math.PI / 2);
scene.add(plane);

// Road

var geometry = new THREE.PlaneGeometry(300, 90);
var material = new THREE.MeshPhongMaterial({
  color: 0x989898,
  side: THREE.DoubleSide,
});
var walkSide = new THREE.Mesh(geometry, material);
walkSide.rotateX(-Math.PI / 2);
walkSide.position.set(0, 1, 100);
scene.add(walkSide);

var geometry = new THREE.PlaneGeometry(300, 60);
var material = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
var roadSide = new THREE.Mesh(geometry, material);
roadSide.rotateX(-Math.PI / 2);
roadSide.position.set(0, 2, 100);
scene.add(roadSide);

var geometry = new THREE.PlaneGeometry(300, 50);
var material = new THREE.MeshPhongMaterial({
  color: 0x585858,
  side: THREE.DoubleSide,
});
var roadSurface = new THREE.Mesh(geometry, material);
roadSurface.rotateX(-Math.PI / 2);
roadSurface.position.set(0, 3, 100);
scene.add(roadSurface);

for (var i = -140; i < 160; i += 20) {
  var geometry = new THREE.PlaneGeometry(7, 2);
  var material = new THREE.MeshPhongMaterial({
    color: 0xffff33,
    side: THREE.DoubleSide,
  });
  var roadMarkings = new THREE.Mesh(geometry, material);
  roadMarkings.rotateX(-Math.PI / 2);
  roadMarkings.position.set(i, 4, 100);
  scene.add(roadMarkings);
}

// 1. Airplane
var airplane = new Airplane();
airplane.mesh.scale.set(0.25, 0.25, 0.25);
airplane.mesh.position.set(0, 150, 0);
airplane.mesh.rotateY(Math.PI / 4); // 45 degrees
scene.add(airplane.mesh);

// 2. Car
var car = new Car();
car.mesh.scale.set(0.5, 0.5, 0.5);
car.mesh.position.set(-100, 5, 100);
scene.add(car.mesh);

//Car light at night

var lightTarget = new THREE.Object3D();
lightTarget.position.set(0, 5, 100);
scene.add(lightTarget);

const headlights = new THREE.SpotLight(0xffffcc, 10, 100, 50);
headlights.castShadow = true;
headlights.position.set(-100, 10, 100);
headlights.target = lightTarget;
scene.add(headlights);

//3. Tree
// for (var i = 0; i < 5; i++) {
//   var Tree = new BigTree();
//   Tree.mesh.scale.set(20, 20, 20);
//   Tree.mesh.position.x = Math.random() * (100 - -100) - 100;
//   Tree.mesh.position.z = Math.random() * (100 - -100) - 100;
//   Tree.mesh.position.y = 5;
//   // scene.add(Tree.mesh);
// }

//4. Stone

//5. House
var house = new House();
house.mesh.scale.set(10, 10, 10);
house.mesh.position.set(0, 0, 0);
// scene.add(house.mesh);

//6. Fence
var fence = new Fence();
fence.mesh.scale.set(10, 10, 10);
fence.mesh.position.set(-50, 0, 0);
scene.add(fence.mesh);

// 7. StreetLamp
var streetLamp = new StreetLamp();
streetLamp.then((obj) => {
  obj.scale.set(0.1, 0.1, 0.1);
  // scene.add(obj);
});

// 8. Tree
var tree = new Tree();
tree.then((obj) => {
  obj.scale.set(0.1, 0.1, 0.1);
  // scene.add(obj);
});

// 9. Grass
var grass = new Grass();
grass.then((obj) => {
  obj.scale.set(0.3, 0.3, 0.3);
  // scene.add(obj);
});

// Test

// EVENT (Keyboard, mouse, etc.)

var activeMode = 1;
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
  var keyCode = event.which;
  if (keyCode == 49) {
    //1: day
    activeMode = 1;
  } else if (keyCode == 50) {
    //2: night
    activeMode = 2;
  }
  render();
}

// RENDER
function render(time) {
  time *= 0.001;

  // Animation for all object
  airplane.propeller.rotation.x += 0.3;

  car.mesh.position.x += 1;
  headlights.position.x += 1;
  lightTarget.position.x += 1;

  if (car.mesh.position.x > 120) {
    headlights.position.x = -120;
    lightTarget.position.x = 120;
    car.mesh.position.x = -130;
  }

  // Render camera
  renderer.render(scene, camera);

  // Call the loop function again
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
