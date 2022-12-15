import React from 'react';
import { useEffect } from 'react';
import useMessage from '../../hooks/useMessage';

const ErrorDisplay = ({error, children}) => {
    const {message, contextHolder} = useMessage()
    useEffect(() => {
        if(error) {
            message.error(error)
        }

        // eslint-disable-next-line
    }, [error])
    return ( 
        <>
        {contextHolder}
        {children}
        </>
     );
}
 
export default ErrorDisplay