import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from '../../components/ProjectForm';
import useProjects from '../../hooks/useProjects';
import useStorage from '../../hooks/useStorage';
import { Skeleton } from 'antd';
import Typography from 'antd/es/typography/Typography';




const EditProject = () => {
    const { slug } = useParams()
    const {isLoading, getProjectById, updateProject} = useProjects()
    const updatableProject = getProjectById(slug)
    const {downloadURL, isUploading, removeFileURL, uploadFile} = useStorage()

    const onSubmit = (values) => {
        updateProject(slug, {...values, thumbnail: downloadURL || updatableProject.thumbnail})
    }
    if(isLoading) {
        return <Skeleton />
    }
    return (
        <div>
            <Typography.Title>Edit Project "{updatableProject.name}"</Typography.Title>
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