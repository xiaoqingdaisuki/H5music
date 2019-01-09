import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './my.scss';
import Header from './../component/header';
import Footer from './../component/footer';


class My extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {  
    return (
      <div className="my">
        <Header />
        <Footer />
        <WingBlank size="md">
          <div className="flex">my</div>
        </WingBlank>
      </div>
    )
  }
}

export default My;