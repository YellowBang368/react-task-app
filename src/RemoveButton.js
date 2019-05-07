import React from 'react';
import styled from 'styled-components';
import buttonStyles from './removeButton.module.css'

const Container = styled.h2``;

export default class RemoveButton extends React.Component {
  handleClick = () => {
    this.props.remove(this.props.listId, this.props.itemId);
  }

  render() {
    return (
      <Container className={buttonStyles.close} onClick={this.handleClick}/>
    )
  }
}
