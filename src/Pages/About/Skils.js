import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled';

const Title = styled.h2`
  margin-top: 1.5rem;
  color: ${props => props.color || "black"};
  font-size: 2rem;
  font-weight: 600;
  div {
    border-bottom: 3px solid ${props => props.color || "black"};
  }
`
const P = styled.p`
  color: ${props => props.color || "#666666"};
  margin-top:0.7rem;
  margin-bottom: 0.3rem;
  font-size: 0.7rem;
`

const WhiteBox = styled.div`
  background: white;
  width: 250px;
  margin-bottom: 2rem;
`
const BoxList = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align:left;
    img {
      height:24px;
      margin: 0 6px;
      border-radius: 8px;
    }
    span {
    text-align:left;
    color: #333333;
    font-size: 0.8rem;
    margin: 3px 4px;
    }
    padding: 3px 0;

    & + & {
      border-top: 1px solid #333333
    }`


const Skils_wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: white;
  width:300px;
  align-items: center;
  border-radius: 5px;
`

const skillslist = [
  {
    id:1,
    image :"image/html.jpg", 
    text:"HTML / CSS",
    deep: "html 기본 구조를 이해하고 있습니다.",
    toggle: true
  },
  {
    id:2,
    image :"image/js.png", 
    text:"JavaScript",
    deep: "자바스크립트에 능숙합니다.",
    toggle: false
  },
  {
    id:3,
    image :"image/react.png", 
    text:"React",
    deep: "리액트를 이용해 앱을 만들어봤습니다.",
    toggle: false
  },
  {
    id:4,
    image :"image/node.png", 
    text:"Node.js",
    deep: "node,express를 사용 해봤습니다.",
    toggle: false
  },
  {
    id:5,
    image :"image/git.jpg", 
    text:"Git",
    deep: "깃허브를 꾸준히 쓰고있습니다.",
    toggle: false
  }
]

const Skill = () => {
  
  const toggleSkill = (skill) => {
    skill.toggle = !skill.toggle
    console.log(skill.toggle)
  }
  
  return (
    <Skils_wrap>
      <Title><div>Skills</div></Title>
      <WhiteBox>
        {
        skillslist.map(skill => (
        <BoxList key={skill.id}
        onClick={() =>toggleSkill(skill)}
        ><img src={skill.image} alt=""/>
        <div>
        <span>{skill.text}</span>
        <P>{skill.deep}</P>
        </div>
        </BoxList>
        ))}
      
      </WhiteBox>
    </Skils_wrap>
  )
}

export default Skill;