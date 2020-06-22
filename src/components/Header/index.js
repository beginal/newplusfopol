import React from 'react';
import styled from '@emotion/styled';
import { Route, Link } from 'react-router-dom';


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
  @media (max-width:1000px) {
    display: flex;
    flex-diraction: row;
    position: fixed;
    left:50%;
    z-index: 9;
    width: 0%;
    height: 2.5rem;
    .menu_list {
    display: flex;
    flex-direction:row;
    width:90vh;
    height: 100%;
    border-radius: 10px;
    padding: 0px 10px;
    background: rgba(255,255,255,0.2);
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
  }
`

const Header = () => {
  return (
    <Root_Header>
      <div className="logo"><img src="" alt=""/></div>
      <ul className="menu_list">
       <li><Link to="/"><a>About</a></Link></li>
       <li><Link to="/portfolio"><a>Portfolio</a></Link></li>
       <li><a href="http://github.com/beginal" target="_blank">GitHub</a></li>
      </ul>
      <div></div>
    </Root_Header>
  )
}

export default Header;
