import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { endLoading, getProjects, startLoading } from "../slices/projectsSlice";

function useProjects() {
  const { projects, isLoading } = useSelector((state) => state.projects);
  const projectsCollectionRef = collection(db, "projects");
  const dispatch = useDispatch();

  // stexi error state tanel reduxi statum pahel u mi tex error message component dnel effectov to nayi errorin cuyc ta

  const addProject = useCallback(async (values) => {
    try {
      dispatch(startLoading())
      await addDoc(projectsCollectionRef, values);
      dispatch(getProjects(projectsCollectionRef))
    } catch (error) {
      dispatch(endLoading())
      console.log(error.message);
    }
  }, []);

  const getProjectById = (id) => {
    return projects.find(project => project.id === id)
  };

  const updateProject = useCallback(async (id, values) => {
    const projectDoc = doc(projectsCollectionRef, id)
    dispatch(startLoading())
    await updateDoc(projectDoc, values)
    dispatch(getProjects(projectsCollectionRef))
  })

  const deleteProject = useCallback(async (id) => {
    const projectDoc = doc(projectsCollectionRef, id)
    dispatch(startLoading())
    await deleteDoc(projectDoc)
    dispatch(getProjects(projectsCollectionRef))
  })


  return { 
        projects, 
        isLoading,  
        addProject, 
        getProjectById, 
        updateProject, 
        deleteProject 
    };
}

export default useProjects;
