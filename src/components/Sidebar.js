import React from 'react';
import styles from './../css/sidebar.module.css'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

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

        </aside>
        <button className={buttonStyles} onClick={this.handleClick} />
      </div>
    )
  }
}
