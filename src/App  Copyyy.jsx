import { useState, useRef, useEffect,useImperativeHandle } from "react";
import { Button } from "antd";
import Card from "./Card";
import "./App.css";
function App() {
  console.log('parent render')
  const [count, setCount] = useState(0);
  /**页面上从0开始计数，当点击自增按钮时，计数器加1*/
  const intervalRef = useRef(null);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log('parent useEffect')
    // return () => {
    //   handleStop();
    // };
  }, []);
  // useEffect(() => {
  //   if (count >= 10) {
  //     handleStop();
  //   }
  // }, [count]);

  const handleStart = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };
  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <div className="card">
        <Button type="primary" onClick={handleClick}>
          父组件：{count}
        </Button>
        <Card/>
      </div>
    </>
  );
}

export default App;
