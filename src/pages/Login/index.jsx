import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';
import Typography from 'antd/es/typography/Typography';
import AuthForm from '../../components/AuthForm';
import ErrorDisplay from '../../components/ErrorDisplay';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {login, isLoading, error, user} = useAuth()
    const navigate = useNavigate()

    function onSubmit(values) {
        login(values)
    }

    if(user) {
        return <Navigate to={'/'} replace/>
    }
    if(isLoading){
        return <Skeleton />
    }
    return ( 
        <ErrorDisplay error={error}>
                <Typography.Title>Sign In</Typography.Title>
                <AuthForm onSubmit={onSubmit}/>
                <Typography.Link onClick={() => navigate('/registration')}>Don't have an account?</Typography.Link>
        </ErrorDisplay>
     );
}

export default Login;