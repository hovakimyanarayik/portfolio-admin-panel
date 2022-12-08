import { FileImageOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import React from 'react';


const UploadField = ({ imageUrl, onUpload, handleRemoveFile }) => {

    const uploadImage = (options) => {
        onUpload(options)
    }

    const uploadButton = (
        <div>
            <p className="ant-upload-drag-icon">
            <FileImageOutlined />
            </p>
            <p className="ant-upload-text">Click or drag Image to this area to upload project thumbnail </p>
        </div>
      );

      return (
        <Upload.Dragger 
        name="file"
        accept="image/*"
        customRequest={uploadImage}
        onRemove={handleRemoveFile}
        >
            {imageUrl ? (
                <img
                src={imageUrl}
                alt="thumbnail"
                style={{
                    width: '100%',
                }}
                />
            ) : (
                uploadButton
            )}
        </Upload.Dragger>
      );
}
 
export default UploadField;