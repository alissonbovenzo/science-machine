// sizes
var width = window.innerWidth;
var height = window.innerHeight;
var canvasElement = window.document.body;

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

canvasElement.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(2, 50, 50);
// var material = new THREE.MeshBasicMaterial({color: '0xd4d4d4'});
var material = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true, side: THREE.DoubleSide } )
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

//lights
var ambientLights = new THREE.AmbientLight('0xfcfcfc');
scene.add(ambientLights);

//camera
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;
//controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);

//events
function onWindowResizer(){
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

window.addEventListener('resize', onWindowResizer, false);

function render() {
  requestAnimationFrame(render)

  sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.001;

  renderer.render(scene, camera);
}
render();
