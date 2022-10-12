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

    const ambientLight = new THREE.AmbientLight(0xFFC0CB, 1);
    ambientLight.castShadow = true;
    ambientLight.physicallyCorrectLights = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(12, 64, 32);
    spotLight.physicallyCorrectLights = true;
    scene.add(spotLight);

    const loader = new GLTFLoader().setPath('https://raw.githubusercontent.com/GanyuHail/bl3/main/src/');
    loader.load('baesLogoMaster4.gltf', function (gltf) {
      scene.add(gltf.scene);
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function onPointerMove(event) {

      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components

      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

    }

    function render() {

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
      }
      renderer.render(scene, camera);
    }

    window.addEventListener('pointermove', onPointerMove);
    window.requestAnimationFrame(render);

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
