import React, { Component } from 'react';
import { List } from 'antd-mobile';
import './my.scss';
import Header from './../component/header';
import Footer from './../component/footer';


class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 2
    };
    this.switchNav = this.switchNav.bind(this);
  }

  // 父组件传值
  switchNav(e) {
    this.setState({
      navState: e
    })
  }

  render() { 
    const nav = this.state.navState
    const Item = List.Item;

    return (
      <div className="my">
        <Header nav={nav} />
        <Footer selected={nav} onSwitchNav={this.switchNav} />
        <div className="musicList">
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >
              本地音乐
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >
              最近播放
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >
              我的收藏
            </Item>
          </List>
          <List renderHeader={() => '我的歌单'}>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >
              我的歌单
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >
              我的歌单2
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >
              我的歌单3
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              我的歌单4
            </Item>
          </List>
        </div>
      </div>
    )
  }
}

export default My;