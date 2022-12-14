import React from 'react';
import useAuth from '../../hooks/useAuth';
import AuthForm from '../../components/AuthForm';
import Typography from 'antd/es/typography/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
import ErrorDisplay from '../../components/ErrorDisplay';


const Registration = () => {
  const {isLoading, register, error, user} = useAuth()
  const navigate = useNavigate()


  function onSubmit(values) {
    register(values)
  }
  
  if(user) {
    return <Navigate to={'/projects'} replace/>
  }
    if(isLoading) {
      return <h1>Loading...</h1>
    }
    return (
      <ErrorDisplay error={error}>
        <Typography.Title>Sign Up</Typography.Title>
        <AuthForm onSubmit={onSubmit}/>
        <Typography.Link onClick={() => navigate('/login')}>Already have an account?</Typography.Link>
      </ErrorDisplay>
    );
}

export default Registration;