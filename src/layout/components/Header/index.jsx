import { Typography } from 'antd';
import { Header as HeaderAnt } from 'antd/es/layout/layout';
import React from 'react';


const Header = () => {

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
            <Typography.Link>Log Out</Typography.Link>
        </HeaderAnt>
     );
}
 
export default Header;