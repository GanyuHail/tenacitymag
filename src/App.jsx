import { useEffect } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import DRACOLoader from 'three-dracoloader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let selectedObject = null;

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.x = 0;
    camera.position.z = 0;
    camera.position.y = 20;
    camera.lookAt(0, 0, 0);

    const canvas = document.getElementById('myThreeJsCanvas')
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xFFC0CB, 2);
    ambientLight.castShadow = true;
    ambientLight.physicallyCorrectLights = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.castShadow = true;
    spotLight.position.set(12, 64, 32);
    spotLight.physicallyCorrectLights = true;
    scene.add(spotLight);

    var progress = document.createElement('div');
    var progressBar = document.createElement('div');

    progress.appendChild(progressBar);
    document.body.appendChild(progress);

    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
      progressBar.style.width = (loaded / total * 100) + '%';
    };

    for (var i = 0; i < 10; i++) addRandomPlaceHoldItImage();

    const loader = new GLTFLoader().setPath('https://raw.githubusercontent.com/GanyuHail/bl3/main/src/');
    var dracoLoader = new DRACOLoader();
    DRACOLoader.setDecoderPath('/three-dracoloader');
    loader.setDRACOLoader(dracoLoader);

    loader.load('baesLogoMaster5.gltf', function (gltf) {
      scene.add(gltf.scene);
    });
    //   function (xhr) {
    //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //   },

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
          intersect.object.material.color.set("say no to transphobia");
        }
      }
    };

    function onMouseDown(event) {
      if (selectedObject) {
        window.location.href = "https://baesianz.com/";
      }
    };

    function touchEnd(event) {
      if (selectedObject) {
        window.location.href = "https://baesianz.com/";
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
