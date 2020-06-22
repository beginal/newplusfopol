import React from 'react'
import styled from '@emotion/styled';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';

const Root_Context = styled.div`

`
const Context = () => {
  return (
    <Root_Context>
      <Route exact path="/" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </Root_Context>
  )
}

export default Context
