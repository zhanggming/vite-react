import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import * as THREE from "three";
import "./index.less";
import {loadBoxGeometry,resourceTracker} from './useLoadThree'

const resTracker = new resourceTracker();
const track = resTracker.track.bind(resTracker);

export const ThreeJsApp = () => {
  const threeRef = useRef(null);

  const handleBox = ()=>{
    loadBoxGeometry(threeRef.current,track)
  }

  return (
    <div className="container">
      <canvas ref={threeRef} id="c"></canvas>
      <div className="buttonList">
        <Button type="primary" onClick={handleBox}>盒子</Button>
        <Button type="primary">平面圆</Button>
        <Button type="primary">锥形</Button>
      </div>
    </div>
  );
};
export default ThreeJsApp;
