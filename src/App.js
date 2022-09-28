import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './styles.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import Lecture from './lecture';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  console.log("this is key ++++++++" + key)
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('ມ.1', '1', <UserOutlined />,[getItem('Team 11', '9', <PieChartOutlined />, [getItem("ຊັ້ນຮຽນທີ 6", 'yDTbnlNtZbA')]), getItem('Team 12', 'rokGy0huYEA')]),
  getItem('ມ.2', '267', <UserOutlined/>),

  getItem('ມ.3', '3', <UserOutlined/>),
  getItem('ມ.4', '4', <UserOutlined/>),
  getItem('ມ.5', '5', <UserOutlined/>),
  getItem('ມ.6', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('ມ.7', '7', <UserOutlined/>),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [lecture, setLecture ] = useState('yDTbnlNtZbA');

  const onClick = (e) =>{
    setLecture(e.key)
    console.log( e);
  }
  
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu 
         onClick={onClick}
        theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} 
        />
      </Sider>
      <Layout className="site-layout">
    
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Lecture embedId={lecture}></Lecture>
            yDTbnlNtZbA
            rokGy0huYEA
         
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;