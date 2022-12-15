import { Typography } from 'antd';
import { Header as HeaderAnt } from 'antd/es/layout/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  // 
  const {user} = useSelector(state => state.auth)

  const navigate = useNavigate()


  const { logout } = useAuth()

    return ( 
        <HeaderAnt
        className="site-layout-background"
        style={{
          padding: 0,
          paddingRight: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
        >
          {user ? (
            <>
              <Typography.Paragraph style={{color: 'white'}}>{user.email}</Typography.Paragraph>
              <Typography.Link style={{color: 'lightred'}} onClick={logout}>Log Out</Typography.Link>
              </>
          ) : (
            <Typography.Link onClick={() => navigate('/login')}>Login</Typography.Link>

          )}

        </HeaderAnt>
     );
}
 
export default Header;