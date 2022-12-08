import Typography from 'antd/es/typography/Typography';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import useAuth from '../../hooks/useAuth';
import useMessage from '../../hooks/useMessage';


const Login = () => {
    const {login, isLoading, error} = useAuth()
    const {message, contextHolder} = useMessage()
    const navigate = useNavigate()

    useEffect(() => {
        if(error) {
            message.error(error)
        }
    }, [error])

    function onSubmit(values) {
        login(values)
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }
    return ( 
        <div style={{marginTop: "50px"}}>
            {contextHolder}
            <AuthForm onSubmit={onSubmit} error={error} />
            <Typography.Link onClick={() => navigate('/registration')}>Don't have an account?</Typography.Link>
        </div>
     );
}

export default Login;