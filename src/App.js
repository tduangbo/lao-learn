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

  getItem('Learn Gramma', 'learn gramma', <FileOutlined />),
  getItem('🍻🍻🍻', '3VCwLvI5z10', <FileOutlined />),
];

export default function BasicExample() {
  return (
    <BrowserRouter>
      {/* <div>
      <nav>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Error">Error</Link>
          </li>
          <li>
            <Link to="/Abort">Abort</Link>
          </li>
          <li>
            <Link to="/Print">Print</Link>
          </li>
          <li>
            <Link to="/Complete">Complete</Link>
          </li>
          <li>
            <Link to="/AnotherLink">Another Link</Link>
          </li>
        </ul>
      </nav>
      </div>
      <hr /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="NounDetails/*" element={<App name="NounDetails" />} />
        <Route path="Abort/*" element={<Abort />} />
        <Route path="Print/*" element={<Print/>} />
        <Route path="Complete/*" element={<Complete/>} />
        <Route path="AnotherLink/*" element={<AnotherLink/>} /> 
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
  //const lecture = useLectureComponents('');
  const dispatch = useDispatch()
  const onClick = (e) =>{
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

//export default App;


function Home() {
  
  return (
    <div style={{textAlign: "center", backgroundColor: "#E1FFEE"}}>
      <h2 >Test</h2>
      <form action="/Complete">
    
        <label>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1"> I have a kite</label><br></br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1"> I have a dog</label><br></br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1"> I have a bird</label><br></br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1"> I have a bike</label>
        </label>
        <br></br>
        <br></br>
            <Link to="/Complete"><button> Submit Test</button></Link>
        
      </form>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h2>Error</h2>
    </div>
  );
}

function Abort() {
  return (
    <div>
      <h2>Abort</h2>
    </div>
  );
}

function Complete() {
  return (
    <div>
      <h2>
        Completed!!!
      </h2>
    </div>
  );
}
function Print() {
  console.log("console.log for printing ")
  return (
    <div>
      <h2>Print</h2>
    </div>
  );
}
function AnotherLink() {
  return (
    <div>
      <h2>Another Link</h2>
    </div>
  );
}
