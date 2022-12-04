import React from 'react';
import { Card } from 'antd';
import ProjectTitle from './components/ProjectTitle';
import ProjectBody from './components/ProjectBody';




const ProjectsItem = ({project}) => {
    return ( 
        <Card
            className='project-item' 
            title={<ProjectTitle project={project} />}
        >
            <ProjectBody project={project} />
        </Card>
     );
}

export default ProjectsItem;