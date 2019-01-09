import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './account.scss';
import Header from './../component/header';
import Footer from './../component/footer';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {  
    return (
      <div className="account">
        <Header />
        <Footer />
        <WingBlank size="md">
          <div className="flex">account</div>
        </WingBlank>
      </div>
    )
  }
}

export default Account;