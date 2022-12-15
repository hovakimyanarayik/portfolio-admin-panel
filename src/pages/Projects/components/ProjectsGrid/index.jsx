import React from 'react';
import ProjectsItem from '../ProjectsItem';

import './style.css'
import useProjects from '../../../../hooks/useProjects';

const ProjectsGrid = () => {
    const {projects, isLoading} = useProjects()

    if(isLoading) {
        return <h1>Loading...</h1>
    }
    return ( 
        <div className='works-grid'>
            {projects.map(project => <ProjectsItem key={project.id} project={project} />)}
        </div>
     );
}

export default ProjectsGrid;