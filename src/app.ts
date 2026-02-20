import * as THREE from "three";
import { Road } from "./object/Road";
import { Fence } from "./object/Fence";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Car } from "./object/Car";
import { House } from "./object/House";
import { Cactus } from "./object/Cactus";
import { StreetLamp } from "./object/StreetLamp";
import { Tree } from "./object/Tree";
import { FlyingSaucer } from "./object/FlyingSaucer";
import { PalmTree1, PalmTree2 } from "./object/PalmTree";

// RENDERER
const canvas = document.querySelector<HTMLCanvasElement>("#c")!;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);

// SCENE
const scene = new THREE.Scene();

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
const geometry = new THREE.PlaneGeometry(500, 500);
const material = new THREE.MeshLambertMaterial({
  color: 0x348c31,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);
plane.receiveShadow = true;
plane.rotateX(-Math.PI / 2);
scene.add(plane);

// 2. Road
{
  const road1 = new Road();
  road1.mesh.position.z = 200;
  scene.add(road1.mesh);

  const road2 = new Road();
  road2.mesh.position.z = -200;
  scene.add(road2.mesh);

  const road3 = new Road();
  road3.mesh.rotateY(Math.PI / 2);
  road3.mesh.position.x = 200;
  scene.add(road3.mesh);

  const road4 = new Road();
  road4.mesh.rotateY(Math.PI / 2);
  road4.mesh.position.x = -200;
  scene.add(road4.mesh);
}

// 2. Car
const car = new Car();
car.mesh.scale.set(0.5, 0.5, 0.5);
car.mesh.position.set(-200, 4, 200);
scene.add(car.mesh);

// Car light at night
const lightTarget = new THREE.Object3D();
lightTarget.position.set(200, 4, 200);
scene.add(lightTarget);

const headlights = new THREE.SpotLight(0xffffcc, 10, 100, 50);
headlights.castShadow = true;
headlights.position.set(-200, 6, 200);
headlights.target = lightTarget;

// Camera for car
const carCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
carCamera.position.set(-200, 24, 200);
carCamera.lookAt(210, 24, 200);

// 3. Tree
const tree = Tree();
tree.then((obj) => {
  obj.castShadow = true;
  obj.receiveShadow = true;
  obj.scale.set(0.8, 0.8, 0.8);
  obj.position.set(-80, 0, 50);
  scene.add(obj);
});

// 4. House
const house = House();
house.then((obj) => {
  obj.castShadow = true;
  obj.receiveShadow = true;
  scene.add(obj);
});

// 5. Fence
// Left
for (let i = 0; i < 10; i++) {
  const fence = new Fence();
  fence.mesh.scale.set(10, 10, 10);
  fence.mesh.position.set(-150, 0, -140 + 30 * i);
  scene.add(fence.mesh);
}

// Right
for (let i = 0; i < 10; i++) {
  const fence = new Fence();
  fence.mesh.scale.set(10, 10, 10);
  fence.mesh.position.set(150, 0, -140 + 30 * i);
  scene.add(fence.mesh);
}

// Behind
for (let i = 0; i < 10; i++) {
  const fence = new Fence();
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
  const fence = new Fence();
  fence.mesh.scale.set(10, 10, 10);
  fence.mesh.rotateY(Math.PI / 2);
  fence.mesh.position.set(-140 + 30 * i, 0, 150);
  scene.add(fence.mesh);
}

// 6. StreetLamp
const streetLampTemp: [number, number][] = [
  [-1, 1],
  [1, -1],
  [1, 1],
  [-1, -1],
];
const streetLampLight: THREE.PointLight[] = [];

streetLampTemp.forEach((el) => {
  const streetLamp = StreetLamp();
  streetLamp.then((obj) => {
    obj.castShadow = true;
    obj.scale.set(0.2, 0.2, 0.2);
    obj.position.set(160 * el[0], 0, 160 * el[1]);
    scene.add(obj);
  });
});

streetLampTemp.forEach((el) => {
  const _streetLampLight = new THREE.PointLight(0xffff99, 1.5);
  _streetLampLight.castShadow = true;
  _streetLampLight.position.set(150 * el[0], 70, 150 * el[1]);
  _streetLampLight.distance = 300;
  streetLampLight.push(_streetLampLight);
});

// 7. Cactus pot
const cactus = Cactus();
cactus.then((obj) => {
  obj.scale.set(0.05, 0.05, 0.05);
  obj.position.set(-30, 0, 20);
  scene.add(obj);
});

// 8. PalmTree
const palmTree1a = PalmTree1();
palmTree1a.then((obj) => {
  obj.scale.set(0.2, 0.2, 0.2);
  obj.position.set(130, 0, 130);
  scene.add(obj);
});

const palmTree1b = PalmTree1();
palmTree1b.then((obj) => {
  obj.scale.set(0.2, 0.2, 0.2);
  obj.position.set(-130, 0, 130);
  scene.add(obj);
});

for (let i = 0; i < 5; i++) {
  const palmTree = PalmTree2();
  palmTree.then((obj) => {
    obj.scale.set(0.2, 0.2, 0.2);
    obj.position.set(-120 + 60 * i, 0, -130);
    scene.add(obj);
  });
}

// 9. Flying Saucer
const flyingSaucer = FlyingSaucer();
flyingSaucer.then((obj) => {
  obj.scale.set(0.3, 0.3, 0.3);
  obj.position.set(90, 0, -70);
  scene.add(obj);
});

const UFOLightTarget = new THREE.Object3D();
UFOLightTarget.position.set(90, 0, -70);
scene.add(UFOLightTarget);

const UFOLightBottom = new THREE.SpotLight(0xdc143c, 10, 100, 90, 1);
UFOLightBottom.position.set(90, 60, -70);
UFOLightBottom.target = UFOLightTarget;

const UFOLightTop = new THREE.SpotLight(0xdc143c, 5, 100, 90, 1);
UFOLightTop.position.set(90, 110, -70);
UFOLightTop.target = UFOLightTarget;

// EVENT (Keyboard, mouse, etc.)
let isNight = false;
let isWorldCamera = true;
document.addEventListener(
  "keydown",
  (e) => {
    const keyCode = e.code;
    if (keyCode == "Digit1") {
      isNight = false;
    } else if (keyCode == "Digit2") {
      isNight = true;
    } else if (keyCode == "Space") {
      isWorldCamera = !isWorldCamera;
    }
  },
  false
);

// RENDER
function render(time: number): void {
  time *= 0.001;

  // Car animation
  if (car.mesh.position.z == 200) {
    if (car.mesh.position.x < 200) {
      car.mesh.position.x += 1;
      headlights.position.x += 1;
      carCamera.position.x += 1;

      const i = carCamera.position.x;
      if (i >= 150) {
        carCamera.lookAt(200, 24, 350 - i);
      }

      lightTarget.position.x = 200;
    } else {
      car.mesh.rotateY(Math.PI / 2);

      lightTarget.position.z = -200;
      carCamera.lookAt(200, 24, -210);

      car.mesh.position.z -= 1;
    }
  } else if (car.mesh.position.z < 200) {
    if (car.mesh.position.x == 200) {
      if (car.mesh.position.z > -200) {
        car.mesh.position.z -= 1;
        headlights.position.z -= 1;
        carCamera.position.z -= 1;

        const i = carCamera.position.z;
        if (i <= -150) {
          carCamera.lookAt(350 + i, 24, -200);
        }
      } else if (car.mesh.position.z == -200) {
        car.mesh.rotateY(Math.PI / 2);

        lightTarget.position.x = -200;
        carCamera.lookAt(-210, 24, -200);

        car.mesh.position.x -= 1;
      }
    } else {
      if (car.mesh.position.z == -200) {
        if (car.mesh.position.x > -200) {
          car.mesh.position.x -= 1;
          headlights.position.x -= 1;
          carCamera.position.x -= 1;

          const i = carCamera.position.x;
          if (i <= -150) {
            carCamera.lookAt(-200, 24, -350 - i);
          }
        } else {
          car.mesh.rotateY(Math.PI / 2);

          lightTarget.position.z = 200;
          carCamera.lookAt(-200, 24, 210);

          car.mesh.position.z += 1;
        }
      } else {
        car.mesh.position.z += 1;
        headlights.position.z += 1;
        carCamera.position.z += 1;

        const i = carCamera.position.z;
        if (i >= 150) {
          carCamera.lookAt(i - 350, 24, 200);
        }

        if (car.mesh.position.z == 200) {
          car.mesh.rotateY(Math.PI / 2);
          carCamera.lookAt(210, 24, 200);
        }
      }
    }
  }

  // UFO
  flyingSaucer.then((obj) => {
    if (isNight) {
      if (obj.position.y < 80) {
        obj.position.y += 0.5;
        scene.add(UFOLightBottom);
        scene.add(UFOLightTop);
      } else {
        obj.position.y = 80;
      }
    } else {
      if (obj.position.y > 0) {
        obj.position.y -= 0.5;
      } else {
        obj.position.y = 0;
        scene.remove(UFOLightBottom);
        scene.remove(UFOLightTop);
      }
    }
  });

  // Car
  if (isNight) {
    scene.add(headlights);
  } else {
    scene.remove(headlights);
  }

  // Street lamps and world light
  if (isNight) {
    streetLampLight.forEach((lamp) => {
      scene.add(lamp);
      scene.remove(light);
      scene.remove(light2);
    });
  } else {
    streetLampLight.forEach((lamp) => {
      scene.remove(lamp);
      scene.add(light);
      scene.add(light2);
    });
  }

  // Render camera
  if (isWorldCamera) {
    renderer.render(scene, camera);
  } else {
    renderer.render(scene, carCamera);
  }

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
