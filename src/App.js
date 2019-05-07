import React from 'react';
import styled from 'styled-components'
import Board from './Board'
import Sidebar from './Sidebar'

const Container = styled.div`
  display: block;
  position: relative;
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
        <Sidebar />
        <Board />
      </Container>
    )
  }
}
