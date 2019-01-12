import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, SearchBar } from 'antd-mobile';
import './header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { nav } = this.props // 导航栏
    return (
      <div className="header">
        <div style={nav === 1 ? {display: 'block'} : {display: 'none'}}>
          <Link to="">
            <img className="listImg" src={require('./../assets/images/播放列表.png')} alt="播放列表" />
          </Link>
          <SearchBar className="search" placeholder="Search" maxLength={20} /> 
        </div>
        <div style={nav === 1 ? {display: 'none'} : {display: 'block'}}>
        <NavBar 
          className="title" 
          mode="light" 
          icon={
            <Link to="">
              <img className="listImg" src={require('./../assets/images/播放列表.png')} alt="播放列表" />
            </Link> 
          }
          onLeftClick={() => console.log('onLeftClick')}
        >
          {nav === 2 ? "我的音乐" : "帐号"}
        </NavBar>
        </div>
      </div>
    );
  }
}
