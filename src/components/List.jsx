import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item'
import NewItem from './Itemform';
import RemoveButton from './RemoveButton';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 340px;
  border-radius: 3;
  margin: 0 10px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 0px #c4c4c4;
  padding-top: 25px;
  padding-bottom: 15px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40px;
`;

const Title = styled.h3``;

export default class List extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.list.title}</Title>
        <NewItem
          addNewItem={this.props.addNewItem}
          listId={this.props.list.id}
        />
        <Droppable droppableId={this.props.list.id}>
        {(provided, snapshot) => (
          <ItemList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
          {this.props.items.map((item, index) => {
            return (
              <Item
                key={item.id}
                listId={this.props.list.id}
                item={item}
                index={index}
                remove={this.props.removeItem}
                changeItemStatus={this.props.changeItemStatus}
              />
            )
          })
        }
        {provided.placeholder}
        </ItemList>
        )}
        </Droppable>
        <RemoveButton remove={this.props.removeList} listId={this.props.list.id}/>
      </Container>
    )
  }
}
