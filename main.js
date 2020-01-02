let scene, camera, renderer, cube, canvas;

function init() {
     scene = new THREE.Scene();
        // scene.background = new THREE.Color( 0xffffff );

     camera = new THREE.PerspectiveCamera(
        75, //degrees for fov
        window.innerWidth / window.innerHeight, //aspect ratio (width/height)
        0.1, //near plane
        1000 //far plane
    );

     renderer = new THREE.WebGLRenderer({antialias: true, canvas, alpha: true,});
        // renderer.setClearColor(0xff0000, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // var colors = [0xff3f00, 0xff8c00, 0xffd400, 0xb2ff00, 0x10ff00, 0x00ff3b, 0x00ffb2, 0x00c7ff, 0x0083ff, 0x0037ff, 0x5000ff, 0x8c00ff, 0xbf00ff, 0xe500ff, 0xff00c3, 0xff007b, 0xff0043, 0xff0026];

    // for (;;) {}

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x0fffff});
     cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    
}

function animate(){
    requestAnimationFrame(animate);

    

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    cube.rotation.z -= 0.1;

    // cube.rotation.x = 1.5;
    // cube.rotation.y = 1;
    // cube.rotation.z = 1.3;

    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, windw.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();