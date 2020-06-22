import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';


const Porfile_wrap = styled.div`
  display: flex;
  margin: 3rem 0;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const Porfile_box = styled.div`
  display: flex;
  justify-content: center;
  position: relative; 
  align-items:center;
  width: 390px;
  background: white;
  border: 1px solid rgba(99,99,99,.08);
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(99,99,99,.2);
  margin: 5px;
  padding: 10px;
  .image {
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 0 20px;
    img {
      border-radius: 6px;
    }
  }
  .resume {    
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    .name {
      display: flex;
      justify-content: center;
      margin:0;
      margin-bottom: 10px;
      font-size: 1.5rem;
      font-weight: 600;
    }
    p {
      display: flex;
      justify-content: left;
      align-items:center;
      margin-bottom: 4px;
      color: #333333;
    .svg {
      font-size: 1rem;
      margin-right: 10px;
      opacity: 0.7;
    }
    font-size: 0.8rem;
    }
  }
  
`
const ProfileState = {
  name: "함 준 호",
  birthday: "1995.10.26",
  phone: '010-9215-9984',
  email: 'jun10ho26@gmail.com',
  text: [
    "블라블라",
    "블라블라22",
  ]
}

const Porfile = () => {

  const { name, birthday, text, email, phone } = ProfileState;

  return (
    <Porfile_wrap>
      <Porfile_box>
        <div className="image">
          <img src="http://placehold.it/150x200" alt=""/>
        </div>
        <div className="resume">
          <p className="name">{name}</p>
          <p>{birthday}</p>
          <p>{email}</p>
          <p className="phone">{phone}</p>
        </div>
      </Porfile_box>
    </Porfile_wrap>
  )
}

export default Porfile
