import React, { useEffect, useState } from 'react';
import mockData from '../../../../mock/MOCK_DATA.json'
import ProjectsItem from '../ProjectsItem';

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../../firebase.config';

import './style.css'
import useProjects from '../../../../hooks/useProjects';

const ProjectsGrid = () => {
    // const projectsCollectionRef = collection(db, 'projects')
    // const [projects, setProjects] = useState([])
    

    // useEffect(() => {
    //     const getProjects = async () => {
    //         const data = await getDocs(projectsCollectionRef)
    //         setProjects(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    //     }

    //     getProjects()
    // }, [])
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