import React from 'react';
import { Card } from 'antd';
import ProjectTitle from './components/ProjectTitle';
import ProjectBody from './components/ProjectBody';




const ProjectsItem = ({work}) => {
    return ( 
        <Card
            className='project-item' 
            title={<ProjectTitle work={work} />}
        >
            <ProjectBody work={work} />
        </Card>
     );
}

export default ProjectsItem;