import React from 'react';

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
  }

  handleItemContentChange = (event) => {
    this.setState({itemContent: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="itemName"
          value={this.state.itemContent}
          onChange={this.handleItemContentChange}
        />
        <button>Add item</button>
      </form>
    )
  }
}
