var width = window.innerWidth;
var height = window.innerHeight;

function init() {
    //scene作成
    var scene = new THREE.Scene();

    //axisの作成
    var axis = new THREE.AxisHelper(500);
    scene.add(axis);

    //renderer作成
    var renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff,1.0);

    //plane作成
    var planegeom = new THREE.PlaneGeometry(180,180);
    var planemate = new THREE.MeshLambertMaterial({color:0xff0000});
    var plane = new THREE.Mesh(planegeom,planemate);
    plane.rotation.x = -(90 * Math.PI) / 180;
    // plane.rotation.y = 0.5;
    scene.add(plane);

    //カメラの作成
    var camera = new THREE.PerspectiveCamera(45, width/height,0.1,1000);
    camera.position.set(500,500,500);
    camera.lookAt(scene.position);

    //ライトの作成
    var light = new THREE.AmbientLight(0x292929);
    scene.add(light);

    //マテリアル追加
    var cubegeom = new THREE.BoxGeometry(5,5,5);
    var cubemate = new THREE.MeshLambertMaterial({color:0x000000});
    var cube = new THREE.Mesh(cubegeom,cubemate);
    cube.position.set(1,1,1);
    scene.add(cube);
    
    renderer.render(scene,camera);
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
}

window.onload = init;