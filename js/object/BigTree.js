import * as THREE from "three";
import { Colors } from "../variables/Color.js";

var BigTree = function () {
  this.mesh = new THREE.Object3D();

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );

  var leaveMaterial1 = new THREE.MeshPhongMaterial( { color: 0x91e56e } );
  var leaveMaterial2 = new THREE.MeshPhongMaterial( { color: 0xa2ff7a } );
  var rootMaterial = new THREE.MeshPhongMaterial( { color: 0x7d5a4f } );
  
  var root = new THREE.Mesh( geometry, rootMaterial );
  root.position.set( 0, 0, 0 );
  root.scale.set( 0.3, 1.5, 0.3 );

  var squareLeave01 = new THREE.Mesh( geometry, leaveMaterial1 );
  squareLeave01.position.set( 0.5, 1.6, 0.5 );
  squareLeave01.scale.set( 0.8, 0.8, 0.8 );

  var squareLeave02 = new THREE.Mesh( geometry, leaveMaterial1 );
  squareLeave02.position.set( -0.4, 1.3, -0.4 );
  squareLeave02.scale.set( 0.7, 0.7, 0.7 );

  var squareLeave03 = new THREE.Mesh( geometry, leaveMaterial1 );
  squareLeave03.position.set( 0.4, 1.7, -0.5 );
  squareLeave03.scale.set( 0.7, 0.7, 0.7 );

  var squareLeave04 = new THREE.Mesh( geometry, leaveMaterial1 );
  squareLeave04.position.set( 0, 1.2, 0 );
  squareLeave04.scale.set( 1, 2, 1 );

  var squareLeave05 = new THREE.Mesh( geometry, leaveMaterial2 );
  squareLeave05.position.set( 0, 1.2, 0 );
  squareLeave05.scale.set( 1.1, 0.5, 1.1 );

  this.mesh.add( squareLeave01 );
  this.mesh.add( squareLeave02 );
  this.mesh.add( squareLeave03 );
  this.mesh.add( squareLeave04 );
  this.mesh.add( squareLeave05 );
  this.mesh.add( root );
};

export { BigTree };
