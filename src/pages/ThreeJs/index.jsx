import React, { useEffect, useRef } from "react";
import * as THREE from "three";
export const ThreeJsApp = () => {
  const threeRef = useRef(null);
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (threeRef.current) {
      /*********************创建渲染器********************************/
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: threeRef.current,
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
      const color = 0xFFFFFF;
      const intensity = 3;
      const light =  new THREE.DirectionalLight(color,intensity);
      light.position.set(-1,2,4)
      scene.add(light);
      //几何体
      const boxWidth = 1;
      const boxHeight = 1;
      const boxDepth = 1;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      //材质
      // const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
      //网格对象，包含集合体、材质
      //多个
      const cubes = [
        makeInstance(geometry, 0x44aa88,  0,scene),
        makeInstance(geometry, 0x8844aa, -2,scene),
        makeInstance(geometry, 0xaa8844,  2,scene),
      ]
      //单个
      // const cube = new THREE.Mesh(geometry, material);
      // scene.add(cube);
      /*********************场景和摄像机添加到渲染器********************************/
      //添加动画
      function renderFrame(time){
        time *= 0.001;
        //多个
        cubes.forEach((cube,ndx)=>{
          const speed = 1 + ndx * .1;
          const rot = time * speed;
          cube.rotation.x = rot;
          cube.rotation.y = rot;
        })
        //单个
        // cube.rotation.x = time;
        // cube.rotation.y = time;
        renderer.render(scene, camera);
        requestAnimationFrame(renderFrame)
      }
      requestAnimationFrame(renderFrame)
    }
  };

  const makeInstance = (geometry,color,x,scene)=>{
     const material = new THREE.MeshPhongMaterial({color});
     const cube = new  THREE.Mesh(geometry,material);
     scene.add(cube);
     cube.position.x = x;
     return cube;
  }

  return (
    <div className="container">
      <canvas ref={threeRef} width={1920} height={1080}></canvas>
    </div>
  );
};
export default ThreeJsApp;
