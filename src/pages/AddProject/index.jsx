import React from 'react';
import LoginForm from '../../components/LoginForm';
import ProjectForm from '../../components/ProjectForm';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';


const AddProject = () => {
    const projectsCollectionRef = collection(db, 'projects')


    const onSubmit = async (values) => {
        await addDoc(projectsCollectionRef, values)
    }
    return ( 
        <div style={{marginTop: "50px"}}>
            <ProjectForm onSubmit={onSubmit} />
        </div>
     );
}
 
export default AddProject;