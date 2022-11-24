import React from 'react';
import { Button, Form, Input } from 'antd';



const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return ( 
        <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 8}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Login"
          name="login"
          rules={[{required: true, message: 'Please input your login!'}]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!'}]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          wrapperCol={{offset: 8, span: 16}}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
     );
}
 
export default LoginForm;