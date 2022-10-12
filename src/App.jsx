import { useEffect } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas = document.getElementById('myThreeJsCanvas')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xFFC0CB, 0.5);
    ambientLight.castShadow = true;
    ambientLight.physicallyCorrectLights = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    spotLight.physicallyCorrectLights = true;
    scene.add(spotLight);

    //const sphereGeometry = new THREE.SphereGeometry(12, 64, 32);
    //const sphereTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/GanyuHail/3dArt/main/uniPinch1.jpg');
    //const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });
    //const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    //scene.add(sphereMesh);

    console.log(GLTFLoader);
    const loader = new GLTFLoader().setPath('https://raw.githubusercontent.com/GanyuHail/bl3/main/src/');
    loader.load('baesLogo1.gltf', function (gltf) {

      scene.add(gltf.scene);

      renderer.render();

    });

    //sphereGeometry.userData = { URL: "https://github.com/GanyuHail/3dArt/blob/main/Hi%20Res%20-.jpg" };

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      //gltf.scene.rotation.x += 0.001;
      //gltf.scene.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default App;
