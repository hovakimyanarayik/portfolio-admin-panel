import React from 'react';
import {  Layout as AppLayout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
const { Content} = AppLayout;


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
        <Footer />
      </AppLayout>
    </AppLayout>
  );
};
export default Layout;