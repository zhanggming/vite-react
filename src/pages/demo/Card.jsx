import { useState, useEffect } from "react";
import { Button } from "antd";
export const Card = ()=>{
  console.log('child render')

  const [count, setCount] = useState(0);

 const handleClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(()=>{},[
    console.log('child useEffect')
  ])
  return (
    <div className="card">
      <div className="card-body">
         <Button type="primary" onClick={handleClick}>
          子组件：{count}
        </Button>
      </div>
    </div>
  )
}
export default Card