import React from 'react';
import ProjectForm from '../../components/ProjectForm';
import useProjects from '../../hooks/useProjects';
import useStorage from '../../hooks/useStorage';


const AddProject = () => {
    const {addProject, isLoading} = useProjects()

    // es uploadingi logikan tanel hooki mej initial mi hat nkari link tal ban u addProjecti jamanak qcel valuesi mej u erevi uploadingne pahel mejy

    const {isUploading, downloadURL, uploadFile, removeFileURL} = useStorage()

    const onSubmit = (values) => {
        addProject({...values, thumbnail: downloadURL})
        removeFileURL()
    }

    if(isLoading) {
        return <h1>Loading...</h1>
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