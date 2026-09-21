import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import * as THREE from "three";
import style from "./index.module.scss";
import {loadBoxGeometry,resourceTracker} from './useLoadThree'

const resTracker = new resourceTracker();
const track = resTracker.track.bind(resTracker);

export const ThreeJsApp = () => {
  const threeRef = useRef(null);

  const handleBox = ()=>{
    console.log(threeRef.current)
    if(threeRef.current){
      loadBoxGeometry(threeRef.current,track)
    }
  }

  return (
    <div className={style.container}>
      <canvas ref={threeRef} className={style.canvas}></canvas>
      <div className={style.buttonList}>
        <Button type="primary" onClick={handleBox}>盒子</Button>
        <Button type="primary">平面圆</Button>
        <Button type="primary">锥形</Button>
      </div>
    </div>
  );
};
export default ThreeJsApp;
