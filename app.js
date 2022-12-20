import * as THREE from "three";

// RENDERER
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// SCENE
const scene = new THREE.Scene();

// CAMERA

// LIGHT

// DRAW

// EVENT

// RENDER
function render(time) {
  time *= 0.001;
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
