import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'

const ProjectTitle = ({ work }) => {
    const navigate = useNavigate()
    return ( 
        <div className='work-title'>
            {work.id + ' ' + work.name}
            <div>
                <Button 
                    shape="circle" 
                    type='primary'
                    icon={<EditOutlined />} 
                    onClick={() => navigate(`${work.id}/edit`)}
                />
                <Button 
                    shape='circle'
                    danger 
                    onClick={() => {
                        console.log('delete');
                    }
                }>
                    <DeleteOutlined />
                </Button>
            </div>
        </div>
     );
}
 
export default ProjectTitle;