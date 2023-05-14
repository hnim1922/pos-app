import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Checkbox, Col, Form, Input, InputNumber, Layout, Menu, Modal, Radio, Row, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleClick = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm()

  return (
    <>
      <Layout style={{ minHeight: '90vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" style={{
            height: "32px",
            margin: "16px",
            fontSize: "150%",
            fontWeight: "bolder",
            color: "White",
            textAlign: "center",
          }}>Menu</div>
          <Menu theme='dark'
            mode="inline"
            style={{ paddingTop: "30%" }}
            defaultSelectedKeys={['1']}
            items={[
              {
                key: 'drinks',
                label: 'Drinks/ Thức Uống',
                // onClick: onClick
              },
              {
                key: 'breakfast',
                label: 'Breakfast/ Bữa Sáng',
                // onClick: onClick

              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ background: colorBgContainer, textAlign: "center", paddingBottom: "6%" }}> <h1 style={{ fontSize: "150%", }}>Coffee Shop Name</h1></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="Mocha"
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="coffee"
                      src="https://example.com/coffee.jpg"
                    />
                  }
                >
                  <Button type="primary" onClick={handleClick}>
                    Add to Order
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Cafe Sữa Đá"
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="coffee"
                      src="https://example.com/coffee.jpg"
                    />
                  }
                >
                  <Button type="primary" onClick={handleClick}>
                    Add to Order
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Cafe Đen"
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="coffee"
                      src="https://example.com/coffee.jpg"
                    />
                  }
                >
                  <Button type="primary" onClick={handleClick}>
                    Add to Order
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingTop: "5%" }}>
              <Col span={8}>
                <Card
                  title="Mocha"
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="coffee"
                      src="https://example.com/coffee.jpg"
                    />
                  }
                >
                  <Button type="primary" onClick={handleClick}>
                    Add to Order
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Cafe Sữa Đá"
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="coffee"
                      src="https://example.com/coffee.jpg"
                    />
                  }
                >
                  <Button type="primary" onClick={handleClick}>
                    Add to Order
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Cafe Đen"
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="coffee"
                      src="https://example.com/coffee.jpg"
                    />
                  }
                >
                  <Button type="primary" onClick={handleClick}>
                    Add to Order
                  </Button>
                </Card>
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      <Modal
        title="Customize coffee"
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" htmlType="submit" form="planForm">
            Add to order
          </Button>
        ]}
      >
        <div style={{ display: 'flex', height: '100%', marginTop: '5%' }}>
          <Form form={form}
            id="planForm"
            labelCol={{ span: 13 }}
            wrapperCol={{ span: 11 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: 'Please input plan name !' }]}
            >
              <Radio.Group>
                <Radio value="Hot"> Hot </Radio>
                <Radio value="Cold"> Cold </Radio>
                <Radio value="Blended"> Blended </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Size"
              name="size"
              rules={[{ required: true, message: 'Please input plan name !' }]}
            >
              <Radio.Group>
                <Radio value="S"> S </Radio>
                <Radio value="M"> M </Radio>
                <Radio value="L"> L </Radio>
                <Radio value="XL"> XL </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Whipped Cream"
              name="Whipped"
              rules={[{ required: true, message: 'Please input plan name !' }]}
            >
              <Radio.Group>
                <Radio value="yes"> Yes </Radio>
                <Radio value="no"> No </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Milk"
              name="milk"
              rules={[{ required: true, message: 'Please input plan name !' }]}
            >
              <Radio.Group>
                <Radio value="yes"> Whole Milk </Radio>
                <Radio value="no"> Almond Milk </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Chocolate Sauce"
              name="choco"
              rules={[{ required: true, message: 'Please input plan name !' }]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price">
              $14
            </Form.Item>
          </Form >
        </div >
      </Modal>
    </>

  );
};

export default App;
