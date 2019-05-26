import React from 'react';
import styled from 'styled-components'
import Board from './components/Board'

const Container = styled.div`
  display: block;
  position: relative;
`;

const GithubLabel = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: auto;
  height: 30px;
  cursor: pointer;
`;

export default class App extends React.Component {
  constructor() {
    super();
    this.setState(
      ['board-1']
    )
  }

  render () {
    return (
      <Container>
        <Board />
        <a href="https://github.com/azrv/react-task-app">
          <GithubLabel src={ require('./images/github_black.png') } />
        </a>
      </Container>
    )
  }
}
