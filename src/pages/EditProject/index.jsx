import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from '../../components/ProjectForm';
import useProjects from '../../hooks/useProjects';
import useStorage from '../../hooks/useStorage';


const EditProject = () => {
    const { slug } = useParams()
    const {isLoading, getProjectById, updateProject} = useProjects()
    const updatableProject = getProjectById(slug)
    const {downloadURL, isUploading, removeFileURL, uploadFile} = useStorage()

    const onSubmit = (values) => {
        updateProject(slug, {...values, thumbnail: downloadURL || updatableProject.thumbnail})
    }
    if(isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            Edit page {slug}
            <ProjectForm 
                initialValues={updatableProject}
                onUpload={uploadFile} 
                handleRemoveFile={removeFileURL} 
                isUploading={isUploading} 
                onSubmit={onSubmit} 
                imageUrl={downloadURL ? downloadURL : updatableProject.thumbnail}
            />
        </div>
     );
}

export default EditProject;