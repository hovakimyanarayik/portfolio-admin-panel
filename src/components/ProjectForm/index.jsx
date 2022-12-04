import React from 'react';
import { FileImageOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';

const { Item } = Form


const ProjectForm = ({initialValues = {}, onSubmit}) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        onSubmit(values)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    //   const normFile = (e) => {
    //     console.log('Upload event:', e);
    //     if (Array.isArray(e)) {
    //       return e;
    //     }
    //     return e?.fileList;
    //   };

    return ( 
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Item
                label="Project Name"
                name="name"
                rules={[{ required: true, message: 'Please input project name!' }]}
            >
                <Input />
            </Item>

            <Item
                label="Source Code"
                name="srcCodeUrl"
                rules={[{ required: true, message: 'Please input source code!' }]}
            >
                <Input />
            </Item>

            <Item
                label="Demo URL"
                name="demoUrl"
                rules={[{ required: true, message: 'Please input demo URL!' }]}
            >
                <Input />
            </Item>

            <Item
                label="Thumbnail"
                name="thumbnail"
                rules={[{ required: true, message: 'Please input thumbnail!' }]}
            >
                <Input />
            </Item>

            {/* <Item label="Image">
                <Item 
                    name="image" 
                    valuePropName="fileList" 
                    // getValueFromEvent={normFile}
                    noStyle
                    // rules={[{ required: true, message: 'Please upload image!' }]}
                >
                    <Upload.Dragger name="files">
                        <p className="ant-upload-drag-icon">
                        <FileImageOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag Image to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Item>
            </Item> */}

            <Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Item>
        </Form>
     );
}
 
export default ProjectForm;