import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { getProjects, startLoading, setError } from "../slices/projectsSlice";

function useProjects() {
  const { projects, isLoading, error } = useSelector((state) => state.projects);
  const projectsCollectionRef = collection(db, "projects");
  const dispatch = useDispatch();

  const addProject = useCallback(async (values) => {
    try {
      dispatch(startLoading())
      await addDoc(projectsCollectionRef, values);
      dispatch(getProjects(projectsCollectionRef))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }, []);

  const getProjectById = (id) => {
    return projects.find(project => project.id === id)
  };

  const updateProject = useCallback(async (id, values) => {
    try {
      const projectDoc = doc(projectsCollectionRef, id)
      dispatch(startLoading())
      await updateDoc(projectDoc, values)
      dispatch(getProjects(projectsCollectionRef))
    } catch (error) {
      dispatch(setError(error.message))
    }
  })

  const deleteProject = useCallback(async (id) => {
    try {
      const projectDoc = doc(projectsCollectionRef, id)
      dispatch(startLoading())
      await deleteDoc(projectDoc)
      dispatch(getProjects(projectsCollectionRef))
    } catch (error) {
      dispatch(setError(error.message))
    }
  })


  return { 
        projects, 
        isLoading,
        error,
        addProject, 
        getProjectById, 
        updateProject, 
        deleteProject 
    };
}

export default useProjects;
