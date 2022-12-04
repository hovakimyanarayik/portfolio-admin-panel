import { Typography } from 'antd';
import { Header as HeaderAnt } from 'antd/es/layout/layout';
import React from 'react';
import { auth } from '../../../firebase.config'
import { signOut } from 'firebase/auth';


const Header = () => {

  const logout = async () => {
    await signOut(auth)
  }

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
            <Typography.Link onClick={() => {
              logout()
              console.log(auth, 'logged out');
            }}>Log Out</Typography.Link>
        </HeaderAnt>
     );
}
 
export default Header;