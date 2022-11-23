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
            <p>{work.thumbnail}</p>
        </div>
     );
}
 
export default ProjectBody;