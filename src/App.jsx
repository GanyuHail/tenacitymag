import { useEffect } from 'react';
import * as THREE from 'three';
import { SphereGeometry } from 'three';
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
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const sphereGeometry = new THREE.SphereGeometry(12, 64, 32);
    const sphereTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/GanyuHail/3dArt/main/uniPinch1.jpg');
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    const controls = new OrbitControls(camera, renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function onPointerMove(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }

    function render() {

      raycaster.setFromCamera(pointer, camera);

      var intersects = raycaster.intersectObject(sphereMesh);

      for (var i = 0; i < intersects.length; i++) {
        var faceIndex = intersects[i].faceIndex;
        if (faceIndex == 0 || (faceIndex % 2) == 0) {
          intersects[i].object.geometry.faces[faceIndex].color.setHex(0xffffff);
          intersects[i].object.geometry.faces[faceIndex + 1].color.setHex(0xffffff);
          intersects[i].object.geometry.colorsNeedUpdate = true;
        } else {
          intersects[i].object.geometry.faces[faceIndex].color.setHex(0xffffff);
          intersects[i].object.geometry.faces[faceIndex - 1].color.setHex(0xffffff);
          intersects[i].object.geometry.colorsNeedUpdate = true;
        }
      }
      renderer.render(scene, camera);
    };

    const animate = () => {
      sphereMesh.rotation.x += 0.001;
      sphereMesh.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  };

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default App;
