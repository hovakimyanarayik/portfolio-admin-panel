import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase.config";
import { changeUser } from "../slices/authSlice";

function useAuth() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    onAuthStateChanged(auth, user => {
        dispatch(changeUser(user))
    })

    async function register({email, password}) {
        if(isLoading) return
        try {
            setError(null)
            setIsLoading(true)
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message);
        }
    }

    async function login({email, password}) {
        if(isLoading) return
        try {
            setError(null)
            setIsLoading(true)
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message);
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

