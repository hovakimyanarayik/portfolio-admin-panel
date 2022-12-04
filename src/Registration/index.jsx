import React from 'react';
import {auth} from '../firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, Form, Input } from 'antd';

const register = async ({email, password}) => {
    console.log(email, password);
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

const Registration = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
        register(values)
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

export default Registration;