import React from 'react';
import ProjectForm from '../../components/ProjectForm';
import useProjects from '../../hooks/useProjects';
import useStorage from '../../hooks/useStorage';
import { Skeleton } from 'antd';


const AddProject = () => {
    const {addProject, isLoading} = useProjects()

    const {isUploading, downloadURL, uploadFile, removeFileURL} = useStorage()

    const onSubmit = (values) => {
        addProject({...values, thumbnail: downloadURL})
        removeFileURL()
    }

    if(isLoading) {
        return <Skeleton />
    }
    return ( 
        <div style={{marginTop: "50px"}}>
            <ProjectForm 
                onUpload={uploadFile} 
                handleRemoveFile={removeFileURL} 
                isUploading={isUploading} 
                onSubmit={onSubmit} 
                imageUrl={downloadURL}
            />
        </div>
     );
}

export default AddProject;