import React from 'react';
import { FileImageOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
import UploadField from '../UploadField';

const { Item } = Form


const ProjectForm = ({initialValues = {}, onSubmit, onUpload, isUploading, handleRemoveFile, imageUrl}) => {
    const onFinish = (values) => {
        onSubmit(values)
      };

    return ( 
        <Form
            name="basic"
            labelCol={{span: 6}}
            wrapperCol={{span: 12}}
            initialValues={initialValues}
            onFinish={onFinish}
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

            <Item wrapperCol={{ offset: 8, span: 8 }}>
                <UploadField 
                    handleRemoveFile={handleRemoveFile} 
                    onUpload={onUpload}
                    imageUrl={imageUrl} 
                />
            </Item>

            <Item wrapperCol={{ offset: 11, span: 11 }}>
                <Button type="primary" htmlType="submit" disabled={isUploading}>
                    Submit
                </Button>
            </Item>
        </Form>
     );
}
 
export default ProjectForm;