module Sample.Directives {
    appDirectives.directive('visualizer', [() => {
        return {
            scope: {
                file: '=',
                width: '=',
                height: '=',
            },
            restrict: 'E',
            templateUrl: '/views/visualizer.html',
            link: Visualizer
        }
    }]);

    export class Visualizer {
        width: number = 800;
        height: number = 600;
        file: any;

        camera: any;
        controls: any;
        scene: any;
        renderer: any;

        stats: any;
        container: any;

        constructor(scope, element, attrs: ng.IAttributes) {
            scope.$watch('file', (file) => {
                loader.load("assets/" + file.name + ".vtk");
            });

            if (!Detector.webgl) Detector.addGetWebGLMessage();

            this.camera = new THREE.PerspectiveCamera(60, this.width / this.width, 0.001, 10000);
            this.camera.position.z = 25;
            this.camera.position.y = 0;
            this.camera.position.x = 0;

            this.scene = new THREE.Scene();

            this.scene.add(this.camera);

            // light

            var dirLight = new THREE.DirectionalLight(0xffffff);
            dirLight.position.set(200, 200, 1000).normalize();

            this.camera.add(dirLight);
            this.camera.add(dirLight.target);

            ////

            // renderer

            this.renderer = new THREE.WebGLRenderer({ antialias: false });
            this.renderer.setSize(this.width, this.height);

            this.container = document.getElementById('visualizer');
            this.container.appendChild(this.renderer.domElement);

            ///////
            this.controls = new THREE.TrackballControls(this.camera, this.container);

            this.controls.rotateSpeed = 5.0;
            this.controls.zoomSpeed = 5;
            this.controls.panSpeed = 2;

            this.controls.noZoom = false;
            this.controls.noPan = false;

            this.controls.staticMoving = true;
            this.controls.dynamicDampingFactor = 0.3;

            ///////
            this.stats = new Stats();
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.top = '0px';
            document.body.appendChild(this.stats.domElement);

            //

            window.addEventListener('resize', onWindowResize, false);

            var loader = new THREE.VTKLoader();
            loader.addEventListener('load', (event) => {


                for (var i = 0; i < this.scene.children.length; i++) {
                    var child = this.scene.children[i];

                    if (child.name == 'figure') {
                        this.scene.remove(child);
                    }
                }

                console.log(this.scene.children[this.scene.children.length - 1]);

                var material = new THREE.MeshLambertMaterial({ color: 0xdddddd, side: THREE.DoubleSide });
                var geometry = event.content;
                var mesh = new THREE.Mesh(geometry, material);
                mesh.name = "figure";
                this.scene.add(mesh);
            });

            //
            animate();


            function onWindowResize() {
                //camera.aspect = window.innerWidth / window.innerHeight;
                //camera.updateProjectionMatrix();

                //renderer.setSize(window.innerWidth, window.innerHeight);

                //controls.handleResize();
            }

            function animate() {
                requestAnimationFrame(animate);

                this.controls.update();
                this.renderer.render(this.scene, this.camera);

                this.stats.update();
            }
        }
    }
}
