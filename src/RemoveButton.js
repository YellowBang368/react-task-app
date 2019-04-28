import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: red;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;
  display: none;
`;

export default class RemoveButton extends React.Component {
  handleClick = () => {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <Container onClick={this.handleClick}>X</Container>
    )
  }
}
