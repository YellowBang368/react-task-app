import React from 'react';
import styles from './../css/sidebar.module.css'
import classNames from 'classnames/bind';
import styled from 'styled-components'

let cx = classNames.bind(styles);

const Img = styled.img`
  width: 80%;
  height: auto;
  margin: auto;
  pointer: cursor;
`;

export default class Sidebar extends React.Component {
  state = {isActive: false}

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    let sidebarStyles = cx({
      sidebar: true,
      active: this.state.isActive,
    })

    let buttonStyles = cx({
      openButton: true,
      active: this.state.isActive
    })

    let containerStyles = cx({
      sidebarContainer: true,
      active: this.state.isActive
    })

    return (
      <div className={containerStyles}>
        <aside className={sidebarStyles}>
          <Img src={ require('./../images/github_white.png') } />
        </aside>
        <button className={buttonStyles} onClick={this.handleClick} />
      </div>
    )
  }
}
