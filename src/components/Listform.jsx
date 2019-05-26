import React from 'react';
import listFormStyles from './../css/listform.module.css'

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
    this.props.handleSubmitForm();
  }

  handleListNameChange(event) {
    this.setState({listName: event.target.value});
  }

  render() {
    return (
      <form className={listFormStyles.form} onSubmit={this.handleSubmit}>
        <input
          className={listFormStyles.input}
          type="text"
          placeholder="listName"
          value={this.state.listName}
          onChange={this.handleListNameChange}
        />
        <button className={listFormStyles.button} onClick={() =>
          this.props.addNewList(this.state.listName)
        }>Create new list</button>
      </form>
    );
  }
}
