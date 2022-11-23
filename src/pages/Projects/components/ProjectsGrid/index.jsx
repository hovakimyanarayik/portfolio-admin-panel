import React from 'react';
import mockData from '../../../../mock/MOCK_DATA.json'
import ProjectsItem from '../ProjectsItem';

import './style.css'

const ProjectsGrid = () => {

    return ( 
        <div className='works-grid'>
            {mockData.map(work => <ProjectsItem key={work.id} work={work} />)}
        </div>
     );
}
 
export default ProjectsGrid;