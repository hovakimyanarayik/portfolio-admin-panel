import React, { useEffect } from 'react';
import {  Layout as AppLayout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { getProjects } from '../slices/projectsSlice';
const { Content} = AppLayout;


const Layout = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())

    // eslint-disable-next-line
  }, [])
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
          style={{marginLeft: '10px'}}
        >
          {children}
        </Content>
        <Footer />
      </AppLayout>
    </AppLayout>
  );
};
export default Layout;