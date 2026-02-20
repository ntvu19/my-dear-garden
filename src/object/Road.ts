import * as THREE from "three";

export class Road {
  mesh: THREE.Object3D;

  constructor() {
    this.mesh = new THREE.Object3D();

    {
      const geometry = new THREE.PlaneGeometry(500, 60);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
      });
      const roadSide = new THREE.Mesh(geometry, material);
      roadSide.receiveShadow = true;
      roadSide.rotateX(-Math.PI / 2);
      roadSide.position.y = 1;
      this.mesh.add(roadSide);
    }

    {
      const geometry = new THREE.PlaneGeometry(500, 50);
      const material = new THREE.MeshPhongMaterial({
        color: 0x585858,
        side: THREE.DoubleSide,
      });
      const roadSurface = new THREE.Mesh(geometry, material);
      roadSurface.receiveShadow = true;
      roadSurface.rotateX(-Math.PI / 2);
      roadSurface.position.y = 2;
      this.mesh.add(roadSurface);
    }

    {
      for (let i = -240; i < 260; i += 20) {
        const geometry = new THREE.PlaneGeometry(7, 2);
        const material = new THREE.MeshPhongMaterial({
          color: 0xffff33,
          side: THREE.DoubleSide,
        });
        const roadMarkings = new THREE.Mesh(geometry, material);
        roadMarkings.receiveShadow = true;
        roadMarkings.rotateX(-Math.PI / 2);
        roadMarkings.position.set(i, 3, 0);
        this.mesh.add(roadMarkings);
      }
    }
  }
}
