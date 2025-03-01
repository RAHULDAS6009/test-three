import { OrbitControls } from 'three/examples/jsm/Addons.js';
import './style.css'

import * as THREE from 'three';
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer=new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera); 

const geometry=new THREE.TorusGeometry(10,3,16,100);
const material=new THREE.MeshStandardMaterial({color:0xFF6347});
const torus=new THREE.Mesh(geometry,material);

scene.add(torus);
const pointLight=new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
const ambientLight=new THREE.AmbientLight(0xffffff);
scene.add(pointLight,ambientLight)
const lightHelper=new THREE.PointLightHelper(pointLight);
const gridHelper=new THREE.GridHelper(200,50);
scene.add(lightHelper,gridHelper);

const controls=new OrbitControls(camera,renderer.domElement);

function addStar(){
  const geometry=new THREE.SphereGeometry(0.25,24,24);
  const material=new THREE.MeshStandardMaterial({color:0xffffff})
  const star=new THREE.Mesh(geometry,material);
  const [x,y,z] =Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStar)

//texture mapping

const spaceTexture=new THREE.TextureLoader().load('https://media-hosting.imagekit.io//b3cd3eb9dab74a93/space.jpg?Expires=1835405656&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WmKMiVonPEk-Tmri-aC4Y0ZkboGn2H6vlL1gilISxk2QTmsDJBeeEA2NMmn2M6acasD-ANGDcLB~4DXsW~nZ7U6ri7sCQ0YxYQiW5-zXEI1j-wvFUM4FAg2Z3rRJYU6YbqdAVGythPbGMAq1Q22ZsWbAGR69TK-G6vyIMtGqNkL2Zoenxmwf31mfxP3siFJ6X7dVam59A0hhET3YLxwQON6DKI8aylvuGuqPcnbpLttcuBaFoMZdxZofdwfvpxYWeQeZzd7gFuJL5qCPHr50Z-PIqt2VnuXe6j3BElqG3allGQZTN55BLThPACKfe0iy-xglRDhkIjkh-AsbSUaeOg__');
scene.background=spaceTexture

//Avatar

const elonTexture=new THREE.TextureLoader().load('https://media-hosting.imagekit.io//507002a8b9824451/elon.png?Expires=1835405520&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eEtHXXJdyFlc9ZtRT59SF1CiLLZO0e3b3aqs4C2WyqIsaPCflJMhG0fjG44HAXUprppXRpdChkQ5WC4Edr~tL7LNVSmzArSdDLnOMiGTwqpCaGCEBEycKotyQ4Vfx-xsAJrLcGS-GCdbFlgmZDNKKI-9cD7as1FoVwMqhd92QDNDSJOeBhdpjvPLA4ux0lABpT~UE028uF0swTyNoOHK8TsvlMVQGub2BR05jykZjjvD~Ym5j85PaYFxJ0leMK1Sv8ooZuTQJoB4jF~qFeoRS~oYRDZIupzDPvUBq3~nVpnhe~wqwFBehPCiG7VFT6~JqPzcmp6HeFeQ-d8Mh2HoFQ__');
const elon=new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map:elonTexture})
)

scene.add(elon);



const moonTexture = new THREE.TextureLoader().load('https://media-hosting.imagekit.io//331048a31c1145d2/moon.jpg?Expires=1835405675&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OKJmpeEzIfcqYSRM9apn0epOFcrn7T9r2J4VsH40GtLtgF8hAx0QudwGb6ZiB5jdo5LloKqiL1e10kUZGuya5OMKyA25qWcPIXb54g2fvls4pG3xpJZ74n9fLrKpYJBRpR9sMZSr4wkrAD9JG6SURZL0LKeW6nff98xLwaaJsX5-cFmHWum8Z4CO-J1A348fkQN~jZsEkWOTvHzQGelZv3Y0wkhSwfcVBO4GDLRYZoWlago8esMayR2ojcqzpUHc0jTc5urgaxKMRoTZbM~p6-z4C0rCAjvoAyHRx6Lo6ZB1Ybk5LsK1Lm~-uKwbDJ4Ci5bjjlSnYpHUCQrZUfYPUA__');
const normalTexture = new THREE.TextureLoader().load('https://media-hosting.imagekit.io//71ae674fcb2644c4/normal.jpg?Expires=1835405665&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ra6XYtK5pm-i0mv2R-X1gNnXJCZxHXyYXeNKxX8gmfjCjELxb6SzPLaV-7yDzzvWxc852ExAyjX8m8ZBOwejw8tD8KtZVkX~ItVwDhvJdIp-No1Al1WawI-hdWrTq53ojvbco-iaJ-cTghjrm~05h5Nr-~-Y3vjkGsBJ-pEFAaUmlgocvMjks~mWY5mZi5fwgyJK2n7ytvi0eXvUP5ZXxwOWpGyW5vwAkRNb5BeTVb5N4PpIwOmN~GRvw7zcVudh6dX6jiwsEjVw7sUVoCLQ-rcAeMKcPaF0yFU~CXKHwiODXBeQXZUkfwQzIUZfMaoxRF2IwbkNSAsW2f2zKVezfg__');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

function moveCamera(){
  const t=document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  elon.rotation.y += 0.01;
  elon.rotation.z += 0.01;

  camera.position.z = t* -0.01;
  camera.position.x = t* -0.01;
  camera.position.y = t* -0.01;

}

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x +=0.01;
  torus.rotation.y +=0.005;
  torus.rotation.z +=0.01;

  controls.update();

  renderer.render(scene,camera);
}

animate()

moon.position.z=30;
moon.position.setX(-10);
document.body.onscroll=moveCamera