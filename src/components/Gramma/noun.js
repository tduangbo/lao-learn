import { changeLecture } from '../../App';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    RightSquareOutlined,
  } from '@ant-design/icons';
function NounDetails(){
    const onClick = (e) =>{
         changeLecture('NounDetails')
        //console.log( e);
      }
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to Noun details!</h1>
                <p>Learn</p>
                <button onClick={onClick}>
                    <RightSquareOutlined /> Introduction to nound details
                </button>
            </div>
        </>
    )
}
export default NounDetails