import React, { Component } from 'react';
import { List, Card } from 'antd-mobile';
import './account.scss';
import Header from './../component/header';
import Footer from './../component/footer';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 3
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
      <div className="account">
        <Header nav={nav} />
        <Footer selected={nav} onSwitchNav={this.switchNav} />
        <div>
          <div className="userCard">
            <Card full>
              <Card.Header
                title="xiaoqing daisuki"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span style={{border:'1px solid rgb(200,200,200)', borderRadius: '20px', fontSize: '14px', padding: '2px'}}>签到></span>}
              />
              <Card.Body>
                <div>This is content of `Card`</div>
              </Card.Body>
            </Card>
          </div>
          <div className="userList">
            <List>
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
               onClick={() => {}}
              >
                我的消息
              </Item>
            </List>
          </div>
          <div className="userFunction">
            <List>
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
               onClick={() => {}}
              >
                分享
              </Item>
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >
                关于
              </Item>
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >
                作者：github.com/xiaoqingdaisuki
              </Item>
            </List>
          </div>
          <div className="exit">
            <List>
              <Item align="middle" onClick={() => {}}>
                退出登录
              </Item>
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default Account;