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
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Gramma from './components/Gramma/welcome';
import NounDetails from './components/Gramma/noun';
import useLectureComponents from './components/Gramma/useLectureComponents';

import {
 
 switchLecture
} from './components/Gramma/grammaSlice';
import { useSelector, useDispatch } from 'react-redux'
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
  getItem('ມ.1', '1', <UserOutlined />,[getItem('Unit_1', 'unit_1', <PieChartOutlined />, [getItem("lesson 1", 'Xp8Z-3K0J1o'), getItem("lesson 2", 'Zmwoky4FzC8'),getItem("lesson 3", 'vEHM4miU_M8')]), 
 // getItem('Unit_2', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_3', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_4', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_5', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_6', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_7', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_8', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_9', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_10', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_11', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  ]),
  getItem('ມ.2', '267', <UserOutlined/>,[
    //getItem('Unit_1', 'unit_1', <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]), 
  // getItem('Unit_2', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_3', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_4', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_5', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_6', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_7', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_8', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_9', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_10', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_11', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  ]),

  getItem('ມ.3', '3', <UserOutlined/>, [
    //getItem('Unit_1', 'unit_1', <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]), 
  // getItem('Unit_2', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_3', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_4', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_5', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_6', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_7', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_8', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_9', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_10', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_11', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  ]),
  getItem('ມ.4', '4', <UserOutlined/>, [
    //getItem('Unit_1', 'unit_1', <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]), 
  // getItem('Unit_2', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_3', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_4', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_5', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_6', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_7', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_8', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_9', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_10', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_11', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  ]),
  getItem('ມ.5', '5', <UserOutlined/>, [
    //getItem('Unit_1', 'unit_1', <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]), 
  // getItem('Unit_2', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_3', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_4', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_5', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_6', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_7', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_8', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_9', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_10', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_11', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  ]),
  getItem('ມ.6', 'sub2', <TeamOutlined />, [
    //getItem('Unit_1', 'unit_1', <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]), 
  // getItem('Unit_2', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_3', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_4', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_5', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_6', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_7', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_8', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_9', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_10', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_11', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  ]),
  getItem('Files', '7', <FileOutlined/>,
   [
    //getItem('Unit_1', 'unit_1', <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]), 
  // getItem('Unit_2', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_3', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_4', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_5', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_6', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_7', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_8', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_9', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_10', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  // getItem('Unit_11', 'rokGy0huYEA',  <PieChartOutlined />, [getItem("lesson 1", 'yDTbnlNtZbA'), getItem("lesson 2", 'yDTbnlNtZbA'),getItem("lesson 3", 'yDTbnlNtZbA')]),
  ]),

  getItem('Chemistry', 'learn chemistry', <FileOutlined />),
  getItem('Learn Gramma', 'learn gramma', <FileOutlined />),
  getItem('🍻🍻🍻', '3VCwLvI5z10', <FileOutlined />),
];

export default function BasicExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="NounDetails/*" element={<App name="NounDetails" />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export function changeLecture( details){
  console.log(details)
 this.set('NounDetails')
}
const App = (props='') => {
  const [collapsed, setCollapsed] = useState(false);
 // const [lecture, setLecture ] = useState('yDTbnlNtZbA');
 const lecture = useSelector((state) => state.gramma.value)
  function set (){
   // setLecture("ddddddddddd");
  }
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  //const lecture = useLectureComponents('');
  const dispatch = useDispatch()
  const onClick = (e) =>{
    if(e.key === 'learn gramma'){
       openInNewTab('https://www.khanacademy.org/humanities/grammar')
      return;
    }
  //  setLecture(e.key)
  console.log( e.key);
    dispatch(switchLecture(e.key))
  // lecture =  useLectureComponents(e.key)
    //console.log( e);
  }
  
  console.log(props.name)
  console.log("lecture " + lecture)
  
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
            {(lecture === 'learn gramma')?  <Gramma></Gramma>: lecture === 'nounDetails'? <NounDetails></NounDetails>: <Lecture embedId={lecture}></Lecture>}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Salavanh High School ©1995-96 Created by T Duangboudda
        </Footer>
      </Layout>
    </Layout>
  );
};





