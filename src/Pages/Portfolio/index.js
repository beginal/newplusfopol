import React from 'react';
import styled from '@emotion/styled';

const Outer_Box = styled.div`
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20rem;
text-align:center;
 div {
  display: inline-block;
 }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid black;
  background: white;
  margin:0 0.5rem;
  margin-bottom:1rem;
  overflow:hidden;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    .text {
      bottom: 150px;
      z-index: 99;
      display: flex;
    }
  }
  a {
    text-decoration: none;
    img {
      width:100%;
      height: 100%;
    }
  .text {
    display: flex;
    justify-content: center;
    width:100%;
    position: relative;
    transition: bottom .5s;
    background: rgba(255,255,255,.9);
    color:black;
    height: 100%;
    bottom: 0px;
    padding: 3rem 0;
    font-size: 1rem;
    text-align:center;
    font-weight:600;
  }
  }
`

const box_context = [
  { 
    id:1,
    image: 'image/ver1.gif', 
    link: 'https://beginal.github.io/LandingPage/', 
    text: 'Ver.1 이력서페이지' 
  },
  { 
    id:2,
    image: 'image/ver2.png', 
    link: 'https://beginal.github.io/newlanding', 
    text: 'Ver.2 이력서페이지' 
  },
  { 
    id:3,
    image: 'image/trello.gif', 
    link: '',
   text: '트렐로 클론코딩 (Only Image)' 
  },
  { 
    id:4,
    image: 'http://placehold.it/140x180', 
    link: '', 
    text: '내용이 없습니다.' 
  },
  { 
    id:5,
    image: 'http://placehold.it/140x180', 
    link: '', 
    text: '내용이 없습니다.' 
  }
]

const Inner_box = () => {
  return (
    <Outer_Box>
      <div>
        {box_context.map(box => (
          <Box key={box.id}>
            <a href={box.link} target="_blank">
              <img src={box.image} alt={box.text} />
              <div className='text'>
                {box.text}
              </div>
            </a>
          </Box>
        ))}
      </div>
    </Outer_Box>
  )
}

export default Inner_box;


