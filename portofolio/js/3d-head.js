import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.137.5/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.137.5/examples/js/loaders/GLTFLoader.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-model').appendChild(renderer.domElement);

// Load the 3D model (face.glb)
const loader = new GLTFLoader();
let faceModel;

// Load and add the 3D model to the scene
loader.load('assets/sculpture/face.glb', (gltf) => {
  faceModel = gltf.scene;
  scene.add(faceModel);
  console.log("Model Loaded:", faceModel);

  // Scale the model
  faceModel.scale.set(2, 2, 2);
  faceModel.position.set(0, 0, 0);  // Center the model

}, undefined, (error) => {
  console.error("Error loading model:", error);
});

// Position the camera
camera.position.set(0, 0, 5);  // Closer to the model

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
