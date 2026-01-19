import * as THREE from "three";
export class resourceTracker{
    constructor(){
        this.resources = new Set();
    }
    track(resource){
        if(resource.dispose){
           this.resources.add(resource);
        }
        return resource;
    } 
    untrack(resource){
        this.resources.delete(resource);
    }
    dispose(){
        for(const resource of this.resources){
            resource.dispose();
        }
        this.resources.clear();
    }
}
//Primitives
//盒子
export const useLoadBoxGeometry = () => {

}
//盒子
export const loadBoxGeometry = (canvas,track) => {
    if (canvas) {
        /*********************创建渲染器********************************/
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: canvas,
        });
        /*********************创建相机********************************/
        //视野范围
        const fov = 75;
        //画布宽高比
        const aspect = 2;
        //近平面
        const near = 0.1;
        //远平面
        const far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;
        /*********************创建场景********************************/
        const scene = new THREE.Scene();
        //添加光照
        const color = 0xffffff;
        const intensity = 3;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
        //几何体
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = track(new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth));
        //材质
        // const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
        //网格对象，包含集合体、材质
        //多个
        const cubes = [
            makeInstance(geometry, 0x44aa88, 0, scene),
            makeInstance(geometry, 0x8844aa, -2, scene),
            makeInstance(geometry, 0xaa8844, 2, scene),
        ];
        //单个
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);
        /*********************场景和摄像机添加到渲染器********************************/
        //添加动画
        function renderFrame(time) {
            time *= 0.001;
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
            //多个
            cubes.forEach((cube, ndx) => {
                const speed = 1 + ndx * 0.1;
                const rot = time * speed;
                cube.rotation.x = rot;
                cube.rotation.y = rot;
            });
            //单个
            // cube.rotation.x = time;
            // cube.rotation.y = time;
                    // loadCircleGeometry(canvas,scene)
            renderer.render(scene, camera);
            requestAnimationFrame(renderFrame);
        }
        requestAnimationFrame(renderFrame);
    }
};
//平面圆
export const loadCircleGeometry = (canvas,scene)=>{
    const radius = 7;
    const segments = 32;
    const geometry = new THREE.CircleGeometry(radius,segments);
    const material = new THREE.MeshBasicMaterial({color:0xffff00});
    const circle = new THREE.Mesh(geometry,material);
    scene.add(circle)
}
//创建多个网格
const makeInstance = (geometry, color, x, scene) => {
    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = x;
    return cube;
};
//判断是否需要调整大小-绘图缓冲区-独立像素比
const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const pixeRatio = window.devicePixelRatio;
    // const width = canvas.clientWidth;
    // const height = canvas.clientHeight;
    const width = Math.floor(canvas.clientWidth * pixeRatio);
    const height = Math.floor(canvas.clientHeight * pixeRatio);
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
};