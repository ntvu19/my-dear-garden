import * as THREE from "three";
import { Airplane } from "./js/object/Airplane.js";

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
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 100, 200);
camera.lookAt(0, 0, 0);

// LIGHT
{
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(100, 400, 400);
  scene.add(light);
}

// DRAW
// 1. Airplane
var airplane = new Airplane();
airplane.mesh.scale.set(0.25, 0.25, 0.25);
airplane.mesh.position.set(0, 0, 0);
airplane.mesh.rotateY(Math.PI / 4); // 45 degrees
scene.add(airplane.mesh);

// 2.

// EVENT (Keyboard, mouse, etc.)

// RENDER
function render(time) {
  time *= 0.001;

  // Rotate the propeller
  airplane.propeller.rotation.x += 0.3;

  // Render camera
  renderer.render(scene, camera);

  // Call the loop function again
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
