import './style.css'
import * as THREE from 'three'

const canvas = document.querySelector('#scene')

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x111827)

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
)
camera.position.set(3, 2, 5)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
const material = new THREE.MeshStandardMaterial({ color: 0x22c55e })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.position.set(3, 4, 5)
scene.add(directionalLight)

function animate() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
