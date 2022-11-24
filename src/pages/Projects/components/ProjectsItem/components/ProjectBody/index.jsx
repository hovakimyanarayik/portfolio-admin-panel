import { EyeOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'

const ProjectBody = ({work}) => {
    const navigate = useNavigate()
    
    return ( 
        <div 
            className='card-body'
            onClick={() => navigate(`${work.id}`)}
        >
            <Image
                width='100%'
                src="https://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/cover/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg"
                preview={{
                    mask: <EyeOutlined style={{fontSize: "25px"}} />
                }}
            />
        </div>
     );
}
 
export default ProjectBody;