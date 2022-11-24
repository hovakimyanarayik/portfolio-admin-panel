import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../../mock/MOCK_DATA.json'
import ProjectForm from '../../components/ProjectForm';


const EditPage = () => {
    const { slug } = useParams()
    console.log(slug);

    const projectData = mockData.find(data => data.id === +slug)
    return ( 
        <div>
            Edit page {slug}
            <ProjectForm initialValues={projectData} />
        </div>
     );
}

export default EditPage;