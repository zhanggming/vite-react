import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import  "./index.css";
import {getTodoList} from '@/api/todo.js'
const { Column } = Table;

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    getTodoList().then(res=>{
      console.log(res,'///')
    })
    setData([])
  };
  return (
    <div className='container'>
      <Table dataSource={data}>
        <Column title="名称" dataIndex="title" key="title" />
        <Column title="描述" dataIndex="description" key="description" />
        <Column title="状态" dataIndex="completed" key="completed" />
      </Table>
    </div>
  );
};
export default App;
