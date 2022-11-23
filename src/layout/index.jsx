import React from 'react';
import {  Layout as AppLayout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
const { Content, Footer } = AppLayout;


const Layout = ({children}) => {
  return (
    <AppLayout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar />
      <AppLayout className="site-layout">
        <Header />
        <Content
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Arayik Hovakimyan
        </Footer>
      </AppLayout>
    </AppLayout>
  );
};
export default Layout;