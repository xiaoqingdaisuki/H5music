import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import './footer.scss';
import PropTypes from "prop-types";

class Footer extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: '',
    };

    this.state.selected = this.props.selected
    this.router = this.router.bind(this)
  }


  // 修改导航栏状态
  router(e) {
    this.props.onSwitchNav(e);
    if (e === 1) {
      this.context.router.history.push('/')
    } else if (e === 2) {
      this.context.router.history.push('/my')
    } else if (e === 3) {
      this.context.router.history.push('/account')
    }
  }

  render() {
    const tab = this.state.selected;

    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#F6AD49"
          barTintColor="#FFFFFF"
        >
          <TabBar.Item
            title="发现"
            key="home"
            icon={<Icon type="search" />}
            selectedIcon={<Icon type="search" />}
            selected={tab === 1}
            onPress={
              this.router.bind(this, 1)
            }
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="我的"
            key="my"
            selected={tab === 2}
            onPress={this.router.bind(this, 2)}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="账号"
            key="account"
            selected={tab === 3}
            onPress={this.router.bind(this, 3)}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer;