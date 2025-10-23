import React, { useState, useEffect, useImperativeHandle } from "react";
import {
  Space,
  Table,
  Tag,
  Form,
  Select,
  Input,
  Button,
  Row,
  Col,
  Modal,
} from "antd";
const { TextArea } = Input;
export const AddApp = ({ ref, ...props }) => {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({});
  useEffect(()=>{
    console.log(props.initialValues,'props.initialValues')
    form.setFieldsValue({
      ...props.initialValues,
    })
    setInitialValues({
      ...initialValues,
      ...props.initialValues,
    })
  },[props.initialValues])
  const onFinish = (values) => {
    console.log(values);
    const { onOk } = props;
    if (onOk) {
      onOk({ ...values });
    }
  };
  const onReset = () => {
    const { onCancel } = props;
    if (onCancel) {
      onCancel();
    }
  };
  const handleSetValues = (values) => {
    setInitialValues({
      ...initialValues,
      ...values,
    });
  };
  useImperativeHandle(ref, () => {
    return {
      handleSetValues,
    };
  },[]);
  const options = [
    {
      label:'未完成',
      value:0,
    },
    {
      label:'已完成',
      value:1,
    },
  ]
  return ( 
    <Form name="addForm" form={form} onFinish={onFinish} initialValues={initialValues}>
       <Form.Item
        label="名称"
        name="id"
        hidden
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="名称"
        name="title"
        rules={[{ required: true, message: "请输入名称!" }]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="描述" name="description">
        <TextArea placeholder="maxLength is 200" rows={4} maxLength={200} />
      </Form.Item>
       <Form.Item label="状态" name="completed">
        <Select options={options} placeholder="请选择"/>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button onClick={onReset}>取消</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddApp;
