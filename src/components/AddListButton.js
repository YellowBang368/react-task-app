import React from 'react';
import buttonStyles from './../css/addButton.module.css';
import NewList from './Listform';

export default class AddListButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isClicked: false,
    }
  }

  handleClick = () => {
    this.setState({
      isClicked: true,
    })
  }

  handleSubmitForm = () => {
    this.setState({
      isClicked: false,
    })
  }

  render () {
    let content;
    if(this.state.isClicked) {
      content = <NewList addNewList={this.props.addNewList} handleSubmitForm={this.handleSubmitForm} />
    } else {
      content = <button onClick={this.handleClick} className={buttonStyles.plus}></button>
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}
