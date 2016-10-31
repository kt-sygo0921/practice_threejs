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

    //カメラの作成
    var camera = new THREE.PerspectiveCamera(45, width/height,0.1,1000);
    camera.position.set(200,200,200);

    //ライトの作成
    var light = new THREE.AmbientLight();
    scene.add(light);


    

    
}