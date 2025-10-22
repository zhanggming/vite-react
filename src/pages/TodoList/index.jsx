import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Form, Select, Input, Button, Row, Col,Modal  } from "antd";
import "./index.css";
import { getTodoList } from "@/api/todo.js";
import AddApp from './AddFrom';
const { Column } = Table;

const options = [
  {
    value: 1,
    label: "完成",
  },
  {
    value: 0,
    label: "未完成",
  },
];

const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [searchForm, setSearchForm] = useState({
    title: "",
    description: "",
    completed: undefined,
  });
  const [open,setOpen] = useState(false)

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    getTodoList().then((res) => {
      console.log(res, "///");
    });
    setData([]);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values, "values");
    setSearchForm({
      ...searchForm,
      ...values,
    });
  };

  const handleOpen = ()=>{
     setOpen(true)
  }

  const handleOk = (values) => {
    console.log(values,'values')
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <Form name="searchForm" form={form} onFinish={onFinish}>
        <Row>
          <Col span={10}>
            <Form.Item label="名称" name="title">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="状态" name="completed">
              <Select
                options={options}
                allowClear
                placeholder="请选择"
              ></Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button onClick={onReset}>重置</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row className="table-box">
        <Col span={24} className="button-list">
          <Button type="primary" onClick={handleOpen}>新建</Button>
        </Col>
        <Col span={24} className="table-page">
          <Table dataSource={data}>
            <Column title="名称" dataIndex="title" key="title" />
            <Column title="描述" dataIndex="description" key="description" />
            <Column title="状态" dataIndex="completed" key="completed" />
          </Table>
        </Col>
      </Row>
      <Modal
        title="新增"
        open={open}
        footer={null}
        destroyOnHidden
      >
        <AddApp         
        onOk={handleOk}
        onCancel={handleCancel}/>
      </Modal>
    </div>
  );
};
export default App;
