import React from 'react';

export default class NewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListNameChange = this.handleListNameChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleListNameChange(event) {
    this.setState({listName: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="listName"
          value={this.state.listName}
          onChange={this.handleListNameChange}
        />
        <button onClick={() =>
          this.props.addNewList(this.state.listName)
        }>Create new list</button>
      </form>
    );
  }
}
