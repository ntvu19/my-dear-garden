import * as THREE from "three";

var Road = function () {
  // Create 3D object
  this.mesh = new THREE.Object3D();

  // Road side
  {
    var geometry = new THREE.PlaneGeometry(500, 60);
    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    var roadSide = new THREE.Mesh(geometry, material);
    roadSide.receiveShadow = true;
    roadSide.rotateX(-Math.PI / 2);
    roadSide.position.y = 1;
    this.mesh.add(roadSide);
  }

  // Road surface
  {
    var geometry = new THREE.PlaneGeometry(500, 50);
    var material = new THREE.MeshPhongMaterial({
      color: 0x585858,
      side: THREE.DoubleSide,
    });
    var roadSurface = new THREE.Mesh(geometry, material);
    roadSurface.receiveShadow = true;
    roadSurface.rotateX(-Math.PI / 2);
    roadSurface.position.y = 2;
    this.mesh.add(roadSurface);
  }

  // Road markings
  {
    for (var i = -240; i < 260; i += 20) {
      var geometry = new THREE.PlaneGeometry(7, 2);
      var material = new THREE.MeshPhongMaterial({
        color: 0xffff33,
        side: THREE.DoubleSide,
      });
      var roadMarkings = new THREE.Mesh(geometry, material);
      roadMarkings.receiveShadow = true;
      roadMarkings.rotateX(-Math.PI / 2);
      roadMarkings.position.set(i, 3, 0);
      this.mesh.add(roadMarkings);
    }
  }
};

export { Road };
