import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import RemoveButton from './RemoveButton.js'

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 10px 4px;
  margin-top: 6px;
  border: 1px solid #eee;
  background-color: ${props => props.isActive ? "white" : "lightgreen"};
`;

export default class Item extends React.Component {
  handleClick = () => {
    if(this.props.item.active) {
      this.props.changeItemStatus(this.props.item.id, false)
    } else {
      this.props.changeItemStatus(this.props.item.id, true)
    }
  }

  render() {
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isActive={this.props.item.active}
            onClick={this.handleClick}
          >
          {this.props.item.content}
          <RemoveButton remove={this.props.remove} id={this.props.item.id} />
          </Container>
        )}
      </Draggable>
    )
  }
}
