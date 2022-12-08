import React from 'react';
import useAuth from '../../hooks/useAuth';
import AuthForm from '../../components/AuthForm';
import Typography from 'antd/es/typography/Typography';
import { useNavigate } from 'react-router-dom';
import useMessage from '../../hooks/useMessage';
import { useEffect } from 'react';


const Registration = () => {
  const {isLoading, register, error} = useAuth()
  const navigate = useNavigate()
  const { message, contextHolder } = useMessage()

  useEffect(() => {
    if(error) {
      message.error(error)
    }
  }, [error])

  function onSubmit(values) {
    register(values)
  }
  
    if(isLoading) {
      return <h1>Loading...</h1>
    }
    return (
      <>
        {contextHolder}
        <AuthForm onSubmit={onSubmit} error={error} />
        <Typography.Link onClick={() => navigate('/login')}>Already have an account?</Typography.Link>
      </>
    );
}

export default Registration;