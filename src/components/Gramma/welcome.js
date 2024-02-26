import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    RightSquareOutlined,
  } from '@ant-design/icons';
  import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import { changeLecture } from '../../App_v';
  import './gramma.css'
  import { useSelector, useDispatch } from 'react-redux'
import { switchLecture } from './grammaSlice';
function gramma(){
    return(
        <>
        <TheNoun></TheNoun>
        <TheVerb></TheVerb>
        <ThePronoun></ThePronoun>
        <TheModifier></TheModifier>
        <ThePrepositionConjunction></ThePrepositionConjunction>
        <TheCommaApostrophe></TheCommaApostrophe>
        <TheColonSemiColon></TheColonSemiColon>
        <SentencesAndClauses></SentencesAndClauses>
        <ConventionStandardEnglish></ConventionStandardEnglish>
        <UsageAndStyle></UsageAndStyle>
       
        
        </>
    )
}
{/* <Link to="/Complete"><button> Submit Test</button></Link> */}
function TheNoun(){
    const dispatch = useDispatch()
    const onClick = (e) =>{
      dispatch(switchLecture('nounDetails'));
     }
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to Noun!</h1>
                <p>Learn</p>
                
                <button onClick={onClick}>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
                
            </div>
        </>
    )
}

function TheVerb(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to verb!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}

function ThePronoun(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to pronoun!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}

function TheModifier(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to modifier!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}


function ThePrepositionConjunction(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to preposition and conjection!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}
function TheCommaApostrophe(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to the comma and the apostrophe!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}

function TheColonSemiColon(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to the colon, semicolon, and more!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}
function SentencesAndClauses(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to the sentences and clauses!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}

function ConventionStandardEnglish(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to conventions of standard English!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}

function UsageAndStyle(){
    return (
        <>
            <div className='gramma'>
        
                <h1> Welcome to usage and style!</h1>
                <p>Learn</p>
                <button>
                    <RightSquareOutlined /> Introduction to gramma
                </button>
            </div>
        </>
    )
}


export default gramma;