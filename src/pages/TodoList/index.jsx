import React, { useState, useEffect, useRef } from "react";
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
  message,
  Popconfirm,
} from "antd";
import "./index.module.scss";
import {
  getTodoList,
  addTodoList,
  editTodoList,
  deleteTodoList,
} from "@/api/todo.js";
import AddApp from "./AddFrom";
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
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [initialValues, setInitialValues] = useState({});
  const [searchForm, setSearchForm] = useState({
    title: undefined,
    description: undefined,
    completed: undefined,
    page: 1,
    pageSize: 10,
  });
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("新增事项");
  const [action, setAction] = useState("add");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getList();
  }, [searchForm]);

  const getList = () => {
    console.log(searchForm,'getList')
    getTodoList(searchForm).then((res) => {
      const { data = [] } = res;
      setData(data);
      setTotal(res.total || 0);
    });
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

  const handleOpen = () => {
    setTitle("新增事项");
    setOpen(true);
    setAction("add");
    setInitialValues({});
  };

  const handleOk = (values) => {
    console.log(values, "values");
    if (action === "add") {
      addTodoList({
        ...values,
        completed: 0,
      }).then((res) => {
        console.log(res, "add res");
        setOpen(false);
        getList();
      });
    }
    if (action === "edit") {
      editTodoList(values).then((res) => {
        console.log(res, "edit res");
        setOpen(false);
        getList();
      });
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleEdit = (record) => {
    setTitle("编辑事项");
    setInitialValues({ ...record });
    setOpen(true);
    setAction("edit");
  };

  const columns = [
    {
      title: "名称",
      dataIndex: "title",
    },
    {
      title: "描述",
      dataIndex: "description",
    },
    {
      title: "状态",
      dataIndex: "completed",
      render: (_) => {
        const obj = options.find((item) => item.value === _);
        return obj.label;
      },
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>修改</a>
          <Popconfirm
            title="确认删除"
            description="是否确认删除?"
            onConfirm={(e) => confirm(e, record.id)}
            onCancel={cancel}
            okText="确定"
            cancelText="取消"
          >
            <a>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  //delete
  const confirm = (e, id) => {
    console.log(e);
    deleteTodoList({ id }).then((res) => {
      console.log(res, "delete res");
      messageApi.success("删除成功！");
      getList();
    });
  };
  const cancel = (e) => {
    console.log(e);
    // messageApi.error("Click on No");
  };
  //page
  const onPageChange = (page) => {
    console.log(page);
    setSearchForm(() => {
      return { ...searchForm, page };
    });
    getList();
  };
  const showTotal = (total) => `共计 ${total} 条`;
  const pagination = {
    total,
    showTotal,
    onChange: onPageChange,
    current: searchForm.page,
  };
  return (
    <div className="container">
      {contextHolder}
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
          <Button type="primary" onClick={handleOpen}>
            新建
          </Button>
        </Col>
        <Col span={24} className="table-page">
          <Table
            pagination={pagination}
            dataSource={data}
            rowKey="id"
            columns={columns}
          ></Table>
        </Col>
      </Row>
      <Modal title={title} open={open} footer={null} destroyOnHidden>
        <AddApp
          onOk={handleOk}
          onCancel={handleCancel}
          initialValues={initialValues}
        />
      </Modal>
    </div>
  );
};
export default App;
