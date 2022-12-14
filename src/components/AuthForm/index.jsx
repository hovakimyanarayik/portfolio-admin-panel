import React from 'react';
import { Button, Form, Input } from 'antd';



const AuthForm = ({onSubmit}) => {

    const onFinish = (values) => {
        onSubmit(values)
      };

    return ( 
        <Form
        name="basic"
        labelCol={{span: 6}}
        wrapperCol={{span: 12}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{required: true, message: 'Please input your email!'}]}
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
 
export default AuthForm;