import { useEffect } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function App() {
  useEffect(() => {

    var progress = document.createElement('div');
    var progressBar = document.createElement('div');

    progress.appendChild(progressBar);

    document.body.appendChild(progress);

    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
      progressBar.style.width = (loaded / total * 100) + '%';
    };

    function addRandomPlaceHoldItImage() {
      var r = Math.round(Math.random() * 4000);
      new THREE.ImageLoader(manager).load("https://freight.cargo.site/t/original/i/bbe49bb129e6a1d3cef7c48208958ccbf3c2cf9c869ebf9ec8a5acb6dbd1f6ce/Baseianz-planet-red-green-white-10.ico" + r + '/' + r);
    };

    for (var i = 0; i < 10; i++) addRandomPlaceHoldItImage();

    const loader = new GLTFLoader().setPath('https://raw.githubusercontent.com/GanyuHail/bl3/main/src/');
    loader.load('baesLogoMaster4.gltf', function (gltf) {
      scene.add(gltf.scene);
      scene.rotation.x += 0.01;
      scene.rotation.y += 0.01;
      console.log(scene.rotation)
    });
    
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
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xFFC0CB, 1);
    ambientLight.castShadow = true;
    ambientLight.physicallyCorrectLights = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.castShadow = true;
    spotLight.position.set(12, 64, 32);
    spotLight.physicallyCorrectLights = true;
    scene.add(spotLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function onPointerMove(event) {

      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components

      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

    }

    function onPointerMove( event ) {

			if ( selectedObject ) {

				selectedObject.material.color.set( '#69f' );
				selectedObject = null;

			}

			pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			raycaster.setFromCamera( pointer, camera );

			const intersects = raycaster.intersectObject( group, true );

			if ( intersects.length > 0 ) {

				const res = intersects.filter( function ( res ) {

					return res && res.object;

				} )[ 0 ];

				if ( res && res.object ) {

					selectedObject = res.object;
					selectedObject.material.color.set( '#f00' );

				}

      }

    };

    window.addEventListener('pointermove', onPointerMove);
    window.requestAnimationFrame(render);

    const animate = () => {
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
