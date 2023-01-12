import { useEffect } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import DRACOLoader from 'three-dracoloader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let selectedObject = null;

function App() {
  useEffect(() => {

    const progressBar = document.getElementById('progress-bar');
    THREE.DefaultLoadingManager.onProgress = function (url, loaded, total) {
      progressBar.value = (loaded / total) * 100;
    };
    THREE.DefaultLoadingManager.onStart = function (url, loaded, total) {
      progressBar.value = (loaded / total) * 100;
    };
    const progressBarContainer = document.querySelector('.progress-bar-container');
    THREE.DefaultLoadingManager.onLoad = function () {
      progressBarContainer.style.display = 'none';
    };

    const scene = new THREE.Scene();
    scene.background = '/src/landscape.jpeg';

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.x = 25;
    camera.position.z = 25;
    camera.position.y = 25;
    camera.lookAt(0, 0, 0);

    const canvas = document.getElementById('myThreeJsCanvas')
    const renderer = new THREE.WebGLRenderer({
      canvas, antialias: true, 
    });
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const spotLight = new THREE.SpotLight(0xADD8E6, 1.2);
    //spotLight.castShadow = true;
    spotLight.position.set(50, 64, 32);
    spotLight.physicallyCorrectLights = true;
    spotLight.castShadow = true;
    scene.add(spotLight);

    const ambientLight = new THREE.AmbientLight(0xFAEACD, 1.0);
    ambientLight.physicallyCorrectLights = true;
    scene.add(ambientLight);

    // const spotLight2 = new THREE.SpotLight(0xffffff, 1.5);
    // // //spotLight.castShadow = true;
    // spotLight2.position.set(-12, -64, -32);
    // spotLight.physicallyCorrectLights = true;
    // scene.add(spotLight2);

    const loader = new GLTFLoader().setPath('https://raw.githubusercontent.com/GanyuHail/oestropill/main/src/');
    var dracoLoader = new DRACOLoader();
    DRACOLoader.setDecoderPath('/three-dracoloader');
    loader.setDRACOLoader(dracoLoader);

    loader.load('oestrobotpink.glb', function (glb) {
      scene.add(glb.scene);
    });
    //   function (xhr) {
    //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //   },
    scene.receiveShadow = true; 

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('click', onMouseDown);
    window.addEventListener('touchend', touchEnd);

    function onPointerMove(event) {
      if (selectedObject) {
        //selectedObject.material.color.set('white');
        selectedObject = null;
      }

      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      for (let i = 0; i < intersects.length; i++) {
        const intersect = intersects[i];

        if (intersect && intersect.object) {
          selectedObject = intersect.object;
          intersect.object.material.color.set(0xFFFFFF);
        }
      }
    };

    function onMouseDown(event) {
      if (selectedObject) {
        window.location.href = "https://landing.oestrogeneration.org/";
      }
    };

    function touchEnd(event) {
      if (selectedObject) {
        window.location.href = "https://landing.oestrogeneration.org/";
      }
    };

    function render() {
      renderer.render(scene, camera);
    };

    window.requestAnimationFrame(render);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    renderer.setAnimationLoop(function () {
      renderer.render(scene, camera);
    });
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default App;
