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
      getItem('My Projects', '/', <AppstoreOutlined />),
      getItem('Add New Project', '/add', <PlusCircleOutlined />),
      ];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate()

    const onClick = ({ key }) => {
      navigate(key)
    }

    return ( 
        <Sider 
          collapsible 
          collapsed={collapsed}  
          onCollapse={(value) => setCollapsed(value)}
          style={{zIndex: 100}}
        >
            <div className="logo" />
            <Menu 
              theme="dark" 
              mode="inline"  
              defaultSelectedKeys={['/projects']}
              items={items} 
              onClick={onClick}

            />
        </Sider>
     );
}
 
export default Sidebar;