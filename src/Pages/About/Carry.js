import React from 'react';
import styled from '@emotion/styled';

const Carry_wrap = styled.div`
  .career_title {
    display:block;
    color: #eeeeee;
    font-size: 1.2rem;
    font-weight: 600;
    text-align:left;
    margin-bottom: 1rem;
  }
.career_wrap {
  text-align:left;
  margin-bottom: 2rem;
  &:nth-of-type(2n) {
    /* text-align:right; */
  }
  .title {
    color: black;
    font-size: 1rem;
    font-weight: 500;
  }
  .time {
    font-size: .7rem;
    margin:0 0.2rem;
    margin-top: 3px;
    margin-left: 0.8rem;
    color: #ccdddd;
  }
  .des {
    display: flex;
    flex-direction: column;
    margin: 3px 0;
    margin-left: 0.8rem;
    font-size: 0.8rem;
    color: #222222;
  }
}
  `

const Careers = [
  {
    id:1,
    title: "Front-End 취업준비",
    time: "2018년 11월 - 진행중..",
    des: "아무것도 모르는 상태에서부터 지금까지 독학으로 프론트엔드 취업을 준비했습니다."
  },
]

export const Career = () => {
  return (
    <Carry_wrap>
    <span className="career_title">경력</span>
      {Careers.map(value => (
        <div className="career_wrap" key={value.id}>
        <span className="title">{value.title}</span>
            <p className="time">{value.time}</p>
            <p className="des">{value.des}</p>
        </div>
          ))}  
    </Carry_wrap>
  )
}

export const Education = () => {
  return (
    <Carry_wrap>
    <div  className="career_wrap">        
    <span className="career_title">학력</span>
    <p className="time">2011년 - 2013년</p>
    <p className="des">하남정보고등학교 전자상거래과 졸업</p>
      </div>
    </Carry_wrap>
  )
}

