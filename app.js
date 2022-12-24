import * as THREE from "three";
import { Road } from "./js/object/Road.js";
import { SmallStone, MediumStone } from "./js/object/Stone.js";
import { Fence } from "./js/object/Fence.js";
import { OrbitControls } from "./js/OrbitControls.js";
import { Car } from "./js/object/Car.js";
import { BigTree } from "./js/object/BigTree.js";
import { House } from "./js/object/House.js";
import { Cactus } from "./js/object/Cactus.js";
import { StreetLamp } from "./js/object/StreetLamp.js";
import { Tree } from "./js/object/Tree.js";
import { Grass } from "./js/object/Grass.js";

// RENDERER
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
const textureLoader = new THREE.TextureLoader();

// SCENE
const scene = new THREE.Scene();
// textureLoader.load("./assets/sky.jpg", function (texture) {
//   scene.background = texture;
// });

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
const color = 0xffffff;
const light = new THREE.SpotLight(color, 1);
light.castShadow = true;
light.position.set(0, 300, 200);
scene.add(light);

const light2 = new THREE.DirectionalLight(color, 0.5);
light2.position.set(0, 300, 200);
scene.add(light2);

// DRAW

// 1. Surface
var geometry = new THREE.PlaneGeometry(500, 500);
var material = new THREE.MeshLambertMaterial({
  color: 0x348c31,
  side: THREE.DoubleSide,
});
var plane = new THREE.Mesh(geometry, material);
plane.receiveShadow = true;
plane.rotateX(-Math.PI / 2);
scene.add(plane);

// 2. Road
{
  var road1 = new Road();
  road1.mesh.position.z = 200;
  scene.add(road1.mesh);

  var road2 = new Road();
  road2.mesh.position.z = -200;
  scene.add(road2.mesh);

  var road3 = new Road();
  road3.mesh.rotateY(Math.PI / 2);
  road3.mesh.position.x = 200;
  scene.add(road3.mesh);

  var road4 = new Road();
  road4.mesh.rotateY(Math.PI / 2);
  road4.mesh.position.x = -200;
  scene.add(road4.mesh);
}

// 2. Car
var car = new Car();
car.mesh.scale.set(0.5, 0.5, 0.5);
car.mesh.position.set(-200, 4, 200);
scene.add(car.mesh);

//Car light at night

var lightTarget = new THREE.Object3D();
lightTarget.position.set(200, 4, 200);
scene.add(lightTarget);

const headlights = new THREE.SpotLight(0xffffcc, 10, 100, 50);
headlights.castShadow = true;
headlights.position.set(-200, 4, 200);
headlights.target = lightTarget;
scene.add(headlights);

// 3. Tree
var tree = new Tree();
tree.then((obj) => {
  obj.castShadow = true;
  obj.receiveShadow = true;
  obj.scale.set(0.2, 0.2, 0.2);
  obj.position.set(-80, 0, 50);
  scene.add(obj);
});

//4. Stone

//5. House
var house = new House();
house.then((obj) => {
  obj.castShadow = true;
  obj.receiveShadow = true;
  scene.add(obj);
});

//6. Fence
// Left
for (let i = 0; i < 10; i++) {
  let fence = new Fence();
  fence.mesh.scale.set(10, 10, 10);
  fence.mesh.position.set(-150, 0, -140 + 30 * i);
  scene.add(fence.mesh);
}

// Right
for (let i = 0; i < 10; i++) {
  let fence = new Fence();
  fence.mesh.scale.set(10, 10, 10);
  fence.mesh.position.set(150, 0, -140 + 30 * i);
  scene.add(fence.mesh);
}

// Behind
for (let i = 0; i < 10; i++) {
  let fence = new Fence();
  fence.mesh.scale.set(10, 10, 10);
  fence.mesh.rotateY(Math.PI / 2);
  fence.mesh.position.set(-140 + 30 * i, 0, -150);
  scene.add(fence.mesh);
}

// Front
for (let i = 0; i < 10; i++) {
  if (i == 4 || i == 5) {
    continue;
  }
  let fence = new Fence();
  fence.mesh.scale.set(10, 10, 10);
  fence.mesh.rotateY(Math.PI / 2);
  fence.mesh.position.set(-140 + 30 * i, 0, 150);
  scene.add(fence.mesh);
}

// 7. StreetLamp
var streetLamp1 = new StreetLamp();
streetLamp1.then((obj) => {
  obj.castShadow = true;
  obj.receiveShadow = true;
  obj.scale.set(0.2, 0.2, 0.2);
  obj.position.set(-160, 0, 160);
  scene.add(obj);
});

// const streetLamp1Light = new THREE.PointLight(0xffff99, 1.5);
// streetLamp1Light.castShadow = true;
// streetLamp1Light.position.set(-150, 70, 150);
// streetLamp1Light.distance = 300;
// scene.add(streetLamp1Light);

var streetLamp2 = new StreetLamp();
streetLamp2.then((obj) => {
  obj.scale.set(0.2, 0.2, 0.2);
  obj.position.set(160, 0, -160);
  scene.add(obj);
});

// const streetLamp2Light = new THREE.PointLight(0xffff99, 1.5);
// streetLamp2Light.castShadow = true;
// streetLamp2Light.position.set(150, 70, -150);
// streetLamp2Light.distance = 300;
// scene.add(streetLamp2Light);

var streetLamp3 = new StreetLamp();
streetLamp3.then((obj) => {
  obj.scale.set(0.2, 0.2, 0.2);
  obj.position.set(160, 0, 160);
  scene.add(obj);
});

// const streetLamp3Light = new THREE.PointLight(0xffff99, 1.5);
// streetLamp3Light.castShadow = true;
// streetLamp3Light.position.set(150, 70, 150);
// streetLamp3Light.distance = 300;
// scene.add(streetLamp3Light);

var streetLamp4 = new StreetLamp();
streetLamp4.then((obj) => {
  obj.scale.set(0.2, 0.2, 0.2);
  obj.position.set(-160, 0, -160);
  scene.add(obj);
});

// const streetLamp4Light = new THREE.PointLight(0xffff99, 1.5);
// streetLamp4Light.castShadow = true;
// streetLamp4Light.position.set(-150, 70, -150);
// streetLamp4Light.distance = 300;
// scene.add(streetLamp4Light);

// 8. Cactus
var cactus = new Cactus();
cactus.then((obj) => {
  obj.scale.set(0.05, 0.05, 0.05);
  obj.position.set(-30, 0, 20);
  scene.add(obj);
});

// 9. Grass
var grass = new Grass();
grass.then((obj) => {
  obj.scale.set(0.3, 0.3, 0.3);
  // scene.add(obj);
});

// Test

// EVENT (Keyboard, mouse, etc.)

// var activeMode = 1;
// document.addEventListener("keydown", onDocumentKeyDown, false);
// function onDocumentKeyDown(event) {
//   var keyCode = event.which;
//   if (keyCode == 49) {
//     //1: day
//     activeMode = 1;
//   } else if (keyCode == 50) {
//     //2: night
//     activeMode = 2;
//   }
//   render();
// }

// RENDER
function render(time) {
  // Milisecond (ms) -> Second (s)
  time *= 0.001;

  // Animation for all object
  // Car animation
  if (car.mesh.position.z == 200) {
    // At the bottom-left corner
    if (car.mesh.position.x < 200) {
      // Car position
      car.mesh.position.x += 1;
      headlights.position.x += 1;

      // Direction of light
      lightTarget.position.x = 200;
    } else {
      // Reach the bottom-right corner
      // Rotate 90 degrees
      car.mesh.rotateY(Math.PI / 2);

      // Change direction of light
      lightTarget.position.z = -200;

      // Change position of car
      car.mesh.position.z -= 1;
    }
  } else if (car.mesh.position.z < 200) {
    if (car.mesh.position.x == 200) {
      if (car.mesh.position.z > -200) {
        // Car position
        car.mesh.position.z -= 1;
        headlights.position.z -= 1;
      } else if (car.mesh.position.z == -200) {
        // Reach the top-right corner
        // Rotate 90 degrees
        car.mesh.rotateY(Math.PI / 2);

        // Change direction of light
        lightTarget.position.x = -200;

        car.mesh.position.x -= 1;
      }
    } else {
      if (car.mesh.position.z == -200) {
        if (car.mesh.position.x > -200) {
          // Car position
          car.mesh.position.x -= 1;
          headlights.position.x -= 1;
        } else {
          // Rotate 90 degrees
          car.mesh.rotateY(Math.PI / 2);

          // Change direction of light
          lightTarget.position.z = 200;

          car.mesh.position.z += 1;
        }
      } else {
        // Reach the top-left corner
        // Car position
        car.mesh.position.z += 1;
        headlights.position.z += 1;

        if (car.mesh.position.z == 200) {
          // Rotate 90 degrees
          car.mesh.rotateY(Math.PI / 2);
        }
      }
    }
  }

  // Render camera
  renderer.render(scene, camera);

  // Call the loop function again
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
