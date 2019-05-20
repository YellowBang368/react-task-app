import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import RemoveButton from './RemoveButton.js'

const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 6px;
  border-radius: 3px;
  box-shadow: 0px 3px 8px 0 #c4c4c4;
  text-overflow: hidden;
  background-color: ${props => props.isActive ? "white" : "#e6e6e6"};
`;

const Content = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  padding: 10px 4px;
`;

const ItemText = styled.p`
  margin: 0;
  text-decoration: ${props => props.isActive ? "none" : "line-through"};
`;

export default class Item extends React.Component {
  handleClick = () => {
    this.props.changeItemStatus(this.props.item.id, !this.props.item.active)
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
          >
            <Content onClick={this.handleClick}>
              <ItemText
                isActive={this.props.item.active}
              >
                {this.props.item.content}
              </ItemText>
            </Content>
            <RemoveButton remove={this.props.remove} listId={this.props.listId} itemId={this.props.item.id} />
          </Container>
        )}
      </Draggable>
    )
  }
}
