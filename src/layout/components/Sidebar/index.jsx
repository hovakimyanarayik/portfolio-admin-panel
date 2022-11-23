import React, { useState } from 'react';
import { AppstoreOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router-dom';


function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
      getItem('My Projects', '1', <AppstoreOutlined />),
      getItem('Add New Project', '2', <PlusCircleOutlined />),
      ];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    const handleClick = e => {
      switch(e.key) {
        case '1': {
          navigate('/projects')
          break;
        }
        case '2': {
          navigate('/add')
          break;
        }
      }
    }

    return ( 
        <Sider 
          collapsible 
          collapsed={collapsed}  
          onCollapse={(value) => setCollapsed(value)}
        >
            <div className="logo" />
            <Menu 
              theme="dark" 
              defaultSelectedKeys={['1']} 
              mode="inline"  
              items={items} 
              onClick={handleClick}

            />
        </Sider>
     );
}
 
export default Sidebar;