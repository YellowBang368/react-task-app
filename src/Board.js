import React from 'react';
import initialList from './initialList';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import List from './List';
import AddListButton from './addListButton'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-left: 80px;
`;

class Board extends React.Component {
  state = initialList;

  onDragEnd = result => {
    const { source, destination, draggableId } = result;

    if(!destination) {
      return;
    }

    const startList = this.state.lists[source.droppableId];
    const finishList = this.state.lists[destination.droppableId];

    // nothing changed
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // index changed
    if(destination.droppableId === source.droppableId) {
      const newItems = startList.items;
      newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, draggableId);

      const newStartList = {
        ...startList,
        items: newItems
      }

      const newState = {
        ...this.state,
        lists: {
          ...this.state.lists,
          [startList.id]: newStartList
        }
      }

      this.setState(newState);
      return;
    }

    // column changed and possibly index
    const newStartListItems = startList.items
    newStartListItems.splice(source.index, 1)
    const newFinishListItems = finishList.items
    newFinishListItems.splice(destination.index, 0, draggableId)
    const newStartList = {
      ...startList,
      items: newStartListItems
    }

    const newFinishList = {
      ...finishList,
      items: newFinishListItems
    }

    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [startList.id]: newStartList,
        [finishList.id]: newFinishList,
      }
    }
    this.setState(newState);
  };

  addNewList = listName => {
    const lastListId = this.state.listOrder[this.state.listOrder.length - 1]
    const newListId = "list-" + (parseInt(lastListId.split("-")[1]) + 1);

    const newState = {
      ...this.state,
      listOrder: [
        ...this.state.listOrder,
        newListId
      ],
      lists: {
        ...this.state.lists,
        [newListId]: {
          id: newListId,
          title: listName,
          items: [],
        },
      },
    }

    this.setState(newState);
  }

  addNewItem = (itemContent, listId) => {
    const lastItemId = Object.keys(this.state.items)[Object.keys(this.state.items).length - 1];
    const newItemId = "item-" + (parseInt(lastItemId.split("-")[1]) + 1);

    const newItem = {
      [newItemId]: {
        id: newItemId,
        content: itemContent,
        active: true,
      }
    }

    const newList = {
      [listId]: {
        ...this.state.lists[listId],
        items: this.state.lists[listId].items.concat(newItemId),
      }
    }


    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        ...newList,
      },
      items: {
        ...this.state.items,
        ...newItem
      },
    }

    this.setState(newState);
  }

  removeList = (listId, itemId) => {
    // TODO:
    // It doesn't delete from state
    const newListOrder = this.state.listOrder.filter(currentListId => {
      return currentListId !== listId
    })
    const newState = {
      ...this.state,
      listOrder: newListOrder
    }
    this.setState(newState)
  }

  removeItem = (listId, itemId) => {
    console.log("remove " + itemId + " from " + listId);
    const newItems = this.state.lists[listId].items.filter(currentItemId => {
      return currentItemId !== itemId
    })

    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [listId]: {
          ...this.state.lists[listId],
          items: newItems,
        }
      },
      items: {
        ...this.state.items,
      }
    }
    this.setState(newState)
  }

  changeItemStatus = (itemId, newStatus) => {
    const newItem = this.state.items[itemId]
    newItem.active = newStatus
    const newState = {
      ...this.state,
      items: {
        ...this.state.items,
        [itemId]: newItem
      },
    }
    this.setState(newState);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.listOrder.map(currentListId => {
            const currentList = this.state.lists[currentListId];
            const currentItems = currentList.items.map(itemId => this.state.items[itemId])

            return (
              <List
                key={currentList.id}
                list={currentList}
                items={currentItems}
                addNewItem={this.addNewItem}
                removeList={this.removeList}
                removeItem={this.removeItem}
                changeItemStatus={this.changeItemStatus}
              />
            )})}
            <AddListButton addNewList={this.addNewList} />
        </Container>
      </DragDropContext>
    )
  }
}

export default Board;
