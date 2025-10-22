import React, { useState, useEffect } from "react";
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
export const AddApp = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    const { onOk } = props;
    if (onOk) {
      onOk({...values});
    }
  };
  const onReset = () => {
    const { onCancel } = props;
    if (onCancel) {
      onCancel();
    }
  };
  return (
    <Form name="addForm" form={form} onFinish={onFinish}>
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
