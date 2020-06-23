import React,{ useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Route, Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';

const Root_Header = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  width: 200px;
  height: 80vh;
  background:white;
   .menu_list {
    display: flex;
    justify-content:space-between;
    flex-direction:column;
    height: 30%;
    li {
      a {
        font-size:2rem;
        margin-bottom: 2rem;
        font-weight: 600;
        color: black;
        &:hover {
          text-decoration:none;
          background: linear-gradient(transparent 45%, #f6303e 46%, #f6303e 85%, transparent 86%)
        }
      }
    }
  }
  .tabs {
    visibility:hidden;
    z-index:-2;
  }
  @media (max-width:1000px) {
    display: flex;
    position:relative;
    left:50%;
    z-index: 20;
    width: 0%;
    .menu_list {
    display:${props => props.hide ? 'none' : 'flex'};
    align-items:center;
    flex-direction:column;
    position: fixed;
    width: 30%;
    height: 30%;
    border-radius: 10px;
    padding: 1rem 10px;
    background: rgba(255,255,255,0.5);
      li {        
        a {
          font-size:1.5rem;
          font-weight: 600;
          color: black;
          &:hover {
            text-decoration:none;
            background: linear-gradient(transparent 45%, #f6303e 46%, #f6303e 85%, transparent 86%)
          }
        }
      }
    }
    .tabs {
    visibility:visible;
    position:fixed;
    right:5px;
    top:10px;
    z-index:5;
    width: 60px;
    height: 45px;
    transition: .5s ease-in-out;
    cursor: pointer;
     span {
      display: block;
      position: absolute;
      height: 7px;
      width: 80%;
      background: #333333;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transition: .25s ease-in-out;
      &:nth-of-type(1) {
        top:0px;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        top:18px;
      }
      &:nth-of-type(4) {
        top:36px;
      }
    }
  }
      .open span {
        &:nth-of-type(1) {
        top:18px;
        width:0%;
        left:50%;
        }
        &:nth-of-type(2) {
          transform: rotate(45deg);
        }
        &:nth-of-type(3) {
          transform: rotate(-45deg);
        }
        &:nth-of-type(4) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
      }
}
`


const Header = () => {

  const [togglekey, setTogglekey] = useState(false)

  const toggleTabs = () => {
    setTogglekey(!togglekey)
  }
  useEffect(() => {
    console.log(togglekey)
  }, [togglekey])

  return (
    <Root_Header hide={togglekey}>
      <div className="logo"><img src="" alt=""/></div>
      <ul className="menu_list">
       <li><Link to="/"><a>About</a></Link></li>
       <li><Link to="/portfolio"><a>Portfolio</a></Link></li>
       <li><a href="http://github.com/beginal" target="_blank">GitHub</a></li>
      </ul>
      <div className={"tabs " + (togglekey ? '' : 'open')} onClick={toggleTabs}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Root_Header>
  )
}

export default Header;
