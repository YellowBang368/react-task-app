import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 0 4px;
  margin: 12px 0;
  border-radius: 3px;
  text-overflow: hidden;
  background-color: "white";
`;

const form = {
  width: "100%",
  height: "28px",
}

const input = {
  width: "calc(100% - 20px)",
  height: "100%",
  border: "none",
  background: "white",
  padding: "0 10px",
}

export default class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemContent: "",
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewItem(this.state.itemContent, this.props.listId)
    this.setState({itemContent: ""})
  }

  handleItemContentChange = (event) => {
    this.setState({itemContent: event.target.value});
  }

  render() {
    return (
      <Container>
        <form style={form} onSubmit={this.handleSubmit}>
          <input
            style={input}
            type="text"
            placeholder="New task"
            value={this.state.itemContent}
            onChange={this.handleItemContentChange}
          />
          <button style={{display: 'none'}}>Add item</button>
        </form>
      </Container>
    )
  }
}
