import React from 'react';
import styled from '@emotion/styled';

const Footers = styled.div`
  background: black;
  display: flex;
  margin-top: 6rem;
  padding: 2rem 0rem 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  p {
    margin-bottom: 2px;
  }
  h2 {
    font-size:1.5rem;
    padding-bottom: 3px;
    border-bottom : 2px solid white;
  }
  * {
    color: white;
  }
  .links {
    display: flex;
    .moveit {
      margin: 0.5rem;
      background: white;
      width: 64px;
      height: 64px;
      border-radius:50px;
      display: flex;
      align-items:center;
      justify-content: center;
      transition: background 1s;
       &:hover {
         background: green;
         cursor:pointer;
       }
       img {
         width: 60px;
         height: 60px;
         border-radius:50px;
       }
    }
  }
`;

const Footer = () => {

  return (
    <Footers>
      <h2>Junho Ham</h2>
      <div className="links">
        <a href="https://github.com/beginal" target="blank">
          <div className="moveit">
            <img src="image/github.png" alt="github" ></img>
          </div>
        </a>
        <a href="mailto:jun10ho26@gmail.com">
          <div className="moveit">
            <img src="image/mail.png" alt="email" ></img>
          </div>
        </a>
      </div>
    </Footers>
  )
}

export default Footer
