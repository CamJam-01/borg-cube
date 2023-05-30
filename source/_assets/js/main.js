import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Scene
const scene = new THREE.Scene();

const borgTexture = new THREE.TextureLoader().load('/assets/images/borg-cube-texture.png');
const cube = new THREE.BoxGeometry( 5, 5, 5 ); 
const cubeMat = new THREE.MeshBasicMaterial({
	map: borgTexture,
}); 
const mesh2 = new THREE.Mesh( cube, cubeMat ); 
scene.add( mesh2 );

// Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

// Textures - Borg Cube
const spaceTexture = new THREE.TextureLoader().load('/assets/images/blue-space.webp');
scene.background = spaceTexture;

// Lights
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 10, 10);
pointLight.intensity = .5;
scene.add(pointLight);

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
// controls.autoRotate = true;
controls.autoRotateSpeed = 5;

// Resize
window.addEventListener("resize", () => {
	// Update Sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update Camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
})

const loop = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
}

loop();