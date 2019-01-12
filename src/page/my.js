import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/fm">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {}}
              >
                最近播放
              </Item>
            </Link>
            <Link to="/fm">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {}}
              >
                私人电台
              </Item>
            </Link>
            <Link to="/today">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {}}
              >
                每日推荐
              </Item>
            </Link>
            <Link to="/musicList">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {}}
              >
                歌单
              </Item>
            </Link>
            <Link to="/rankList">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {}}
              >
                排行榜
              </Item>
            </Link>
          </List>
          <List renderHeader={() => '我的歌单'}>
            <Link to="/musicList">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {}}
              >
                我的歌单
              </Item>
            </Link>
            <Link to="/musicList">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {}}
              >
                我的歌单2
              </Item>
            </Link>
          </List>
        </div>
      </div>
    )
  }
}

export default My;