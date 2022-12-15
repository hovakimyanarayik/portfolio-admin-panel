import { Image } from 'antd';
import React from 'react';

import './style.css'

const ProjectBody = ({project}) => {
    
    return ( 
        <div 
            className='card-body'
            onClick={() => window.open(project.demoUrl, '_blank')}
        >
            <Image
                width='100%'
                src={project.thumbnail}
                preview={false}
            />
        </div>
     );
}
 
export default ProjectBody;