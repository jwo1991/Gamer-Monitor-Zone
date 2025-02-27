const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('particles-container').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

const particlesGeometry1 = new THREE.BufferGeometry();
const particlesCount1 = 100;
const positions1 = new Float32Array(particlesCount1 * 3);

for (let i = 0; i < particlesCount1 * 3; i++) {
  positions1[i] = (Math.random() - 0.5) * 20;
}

particlesGeometry1.setAttribute('position', new THREE.BufferAttribute(positions1, 3));

const particlesGeometry2 = new THREE.BufferGeometry();
const particlesCount2 = 100;
const positions2 = new Float32Array(particlesCount2 * 3);

for (let i = 0; i < particlesCount2 * 3; i++) {
  positions2[i] = (Math.random() - 0.5) * 20;
}

particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));

const particlesGeometry3 = new THREE.BufferGeometry();
const particlesCount3 = 100;
const positions3 = new Float32Array(particlesCount3 * 3);

for (let i = 0; i < particlesCount3 * 3; i++) {
  positions3[i] = (Math.random() - 0.5) * 20;
}

particlesGeometry3.setAttribute('position', new THREE.BufferAttribute(positions3, 3));

const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load('img/gcl.png');
const texture2 = textureLoader.load('img/cascos.png');
const texture3 = textureLoader.load('img/cohete.png');
const texture4 = textureLoader.load('img/monitor.png');

const particlesMaterial1 = new THREE.PointsMaterial({
  size: 0.3,
  map: texture1,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const particlesMaterial2 = new THREE.PointsMaterial({
  size: 0.3,
  map: texture2,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const particlesMaterial3 = new THREE.PointsMaterial({
  size: 0.3,
  map: texture4,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const particles1 = new THREE.Points(particlesGeometry1, particlesMaterial1);
const particles2 = new THREE.Points(particlesGeometry2, particlesMaterial2);
const particles3 = new THREE.Points(particlesGeometry3, particlesMaterial3);

scene.add(particles1);
scene.add(particles2);
scene.add(particles3);

const neonParticlesGeometry = new THREE.BufferGeometry();
const neonParticlesCount = 50;
const neonPositions = new Float32Array(neonParticlesCount * 3);

for (let i = 0; i < neonParticlesCount * 3; i++) {
  neonPositions[i] = (Math.random() - 0.5) * 20;
}

neonParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(neonPositions, 3));

const neonParticlesMaterial = new THREE.PointsMaterial({
  size: 0.15,
  color: 0x2196F3, 
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/spark1.png'),
  depthWrite: false
});

const neonParticles = new THREE.Points(neonParticlesGeometry, neonParticlesMaterial);
scene.add(neonParticles);

const rocketGeometry = new THREE.BufferGeometry();
const rocketCount = 50;
const rocketPositions = new Float32Array(rocketCount * 3);

for (let i = 0; i < rocketCount * 3; i++) {
  rocketPositions[i] = (Math.random() - 0.5) * 20;
}

rocketGeometry.setAttribute('position', new THREE.BufferAttribute(rocketPositions, 3));

const rocketMaterial = new THREE.PointsMaterial({
  size: 0.3,
  map: texture3,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const rockets = new THREE.Points(rocketGeometry, rocketMaterial);
scene.add(rockets);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  particles1.rotation.y += 0.0005;
  particles1.rotation.x += 0.00025;
  particles2.rotation.y += 0.0005;
  particles2.rotation.x += 0.00025;
  particles3.rotation.y += 0.0005;
  particles3.rotation.x += 0.00025;
  neonParticles.rotation.y += 0.0005;
  neonParticles.rotation.x += 0.00025;
  rockets.rotation.y += 0.0005;
  rockets.rotation.x += 0.00025;
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
