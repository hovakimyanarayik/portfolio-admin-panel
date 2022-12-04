import { EyeOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'

const ProjectBody = ({project}) => {
    const navigate = useNavigate()
    
    return ( 
        <div 
            className='card-body'
            onClick={() => navigate(`${project.id}`)}
        >
            <Image
                width='100%'
                src={project.thumbnail}
                preview={{
                    mask: <EyeOutlined style={{fontSize: "25px"}} />
                }}
            />
        </div>
     );
}
 
export default ProjectBody;