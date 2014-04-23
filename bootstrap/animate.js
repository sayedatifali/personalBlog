// Our Javascript will go here.

var cube, camera, renderer;
var windowHalfX, windowHalfY; 
var geometry;

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//	camera.position.y = 150;
//	camera.position.z = 500;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth / 2, window.innerHeight / 2);
	document.body.appendChild( renderer.domElement );

	geometry = new THREE.CubeGeometry(2,2,2);

	for (var i = 0; i < geometry.faces.length; i += 2) {
		var hex = Math.random() * 0xfff0ff;
		geometry.faces[i].color.setHex(hex);
		geometry.faces[i + 1].color.setHex(hex);
	}

	var material = new THREE.MeshBasicMaterial( { vertexcolors: THREE.FaceColors, overdraw: 0.5 } );
	cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;

	window.addEventListener('resize', onWindowResize, false);

}

function render() {
	requestAnimationFrame(render);
//				cube.rotation.x += 0.1;
//				cube.rotation.y += 0.1;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
render();
