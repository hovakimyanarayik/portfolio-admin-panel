import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase.config";
import { changeUser, endLoading, setError, startLoading } from "../slices/authSlice";

function useAuth() {
    const { user, isLoading, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    onAuthStateChanged(auth, user => {
        dispatch(changeUser(user))
    })

    async function register({email, password}) {
        if(isLoading) return
        try {
            dispatch(startLoading())
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            dispatch(endLoading())
        } catch (error) {
            dispatch(setError(error.message))
        }
    }

    async function login({email, password}) {
        if(isLoading) return
        try {
            dispatch(setError(null))
            dispatch(startLoading())
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            dispatch(endLoading())
        } catch (error) {
            dispatch(setError(error.message))
        }
    }

    function logout() {
        signOut(auth)
    }

    return {
        user,
        isLoading,
        error,
        register,
        login,
        logout
    }
}


export default useAuth;

