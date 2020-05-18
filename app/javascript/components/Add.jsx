import React from "react"
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Add extends React.Component {
  render () {
    return (
      <Row>
        <Col span={6} offset={9}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => {}}
            onFinishFailed={() => {}}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Add
