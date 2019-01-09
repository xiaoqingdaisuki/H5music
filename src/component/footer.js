import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import './footer.scss';
import PropTypes from 'prop-types';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
    };

    this.router = this.router.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  router(e) {
  }

  render() {
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
            selected={this.state.selectedTab === 1}
            onPress={() => {
              this.setState({
                selectedTab: 1,
              });
            }}
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
            selected={this.state.selectedTab === 2}
            onPress={() => {
              this.setState({
                selectedTab: 2,
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="账户"
            key="account"
            selected={this.state.selectedTab === 3}
            onPress={() => {
              this.setState({
                selectedTab: 3,
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer;