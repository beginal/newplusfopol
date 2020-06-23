import React from 'react'
import styled from '@emotion/styled';
import Skils from './Skils';
import { Career, Education } from './Carry';

const About_wrap = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  align-items: center;
  margin: 1rem 0;
  padding-top: 8rem;
  background:#459dfa;
  box-shadow:30px 30px 60px 0 rgba(69, 157, 250, 0.4);
  transition: background 0.3s;
  position: relative;
`
const Inner_box = styled.div`
  width:80%;
  border-radius: 2px;
  background: ${props => props.background};
  text-align:center;
  margin: 2rem 3rem;
  transform: skewY(5deg);
  transition: background 0.3s;
  
  .about_title {
    span {
    font-size: 2rem;
    font-weight: 600;
    width:100%;
    border-bottom: 3px solid white;
    padding-bottom: 4px;
    }
    margin-bottom: 2rem;
    color:white;
  }
  .about_skils {
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(-5deg);
  }
`

const About = () => {

  return (
    <>
    <About_wrap>
      <Inner_box>
        {/* <div className="about_title"><span>이력서</span></div>                 */}
          <Career />
          <Education />
        <div className="about_skils">
          <Skils />
        </div>
      </Inner_box>
    </About_wrap>
    </>
  )
}

export default About;
