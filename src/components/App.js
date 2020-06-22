import React from 'react'
import styled from '@emotion/styled';
import Header from './Header';
import Context from '../Pages';
import Footer from './Footer';
import Card from './Card';

const Root = styled.div`
  display: flex;
  .header {
    width: 20%;
  }
  .pages {
     width: 100%;
    .context {
      width: 80%;
    }
    .footer {
      
    }
  }
`

const App = () => {
  return (
    <Root>
    <Header className="header" />
    <div className="pages">
    <Card />
    <Context className="context" />
    <Footer className="footer" />
    </div>
    </Root>
  )
}

export default App
