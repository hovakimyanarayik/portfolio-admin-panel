import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from '../../../../../../hooks/useProjects';

import './style.css'

const ProjectTitle = ({ project }) => {
    const navigate = useNavigate()
    const {deleteProject} = useProjects()
    return ( 
        <div className='work-title'>
            {project.name}
            <div>
                <Button 
                    shape="circle" 
                    type='primary'
                    icon={<EditOutlined />} 
                    onClick={() => navigate(`${project.id}/edit`)}
                />
                <Button 
                    shape='circle'
                    danger 
                    onClick={() => {
                        deleteProject(project.id)
                    }
                }>
                    <DeleteOutlined />
                </Button>
            </div>
        </div>
     );
}
 
export default ProjectTitle;