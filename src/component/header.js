import React, { Component } from 'react';
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import './header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }
  
  render() {
    return (
      <div className="header">
        <div style={this.state.navState === 1 ? {display: 'block'} : {display: 'none'}}>
          <SearchBar className="search" placeholder="Search" maxLength={20} /> 
        </div>
        <div style={this.state.navState === 1 ? {display: 'none'} : {display: 'block'}}>
        <NavBar className="title" mode="light" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,]
          }>
          NavBar
        </NavBar>
        </div>
      </div>
    );
  }
}
