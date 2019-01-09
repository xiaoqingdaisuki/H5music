import React, { Component } from 'react';
import { WingBlank, Flex, Grid, Carousel, Icon } from 'antd-mobile';
import './home.scss';
import Header from './../component/header';
import Footer from './../component/footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {  
    const data1 = Array.from(new Array(6)).map(() => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));

    return (
      <div className="home">
        <Header />
        <Footer />
        <WingBlank size="md">
          <div className="carouselBox">
            <Carousel
              autoplay={true}
              autoplayInterval={3000}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
          <div className="btnList">
            <Flex>
              <Flex.Item>
                <div className="btnItem">
                  <div className="btnBox">
                    <img className="btnIcon" src={require("./../assets/images/radio.png")}></img>
                  </div>
                  <p className="btnText">私人电台</p>
                </div>
              </Flex.Item>
              <Flex.Item>
                <div className="btnItem">
                  <div className="btnBox">
                    <img className="btnIcon" src={require("./../assets/images/每日推荐-01.png")}></img>
                  </div>
                  <p className="btnText">每日推荐</p>
                </div>
              </Flex.Item>
              <Flex.Item>
                <div className="btnItem">
                  <div className="btnBox">
                    <img className="btnIcon" src={require("./../assets/images/16.png")}></img>
                  </div>
                  <p className="btnText">歌单</p>
                </div>
              </Flex.Item>              
              <Flex.Item>
                <div className="btnItem">
                  <div className="btnBox">
                    <img className="btnIcon" src={require("./../assets/images/排行榜.png")}></img>
                  </div>
                  <p className="btnText">排行榜</p>
                </div>
              </Flex.Item>
            </Flex>
          </div>
          <div className="recommend">
            <div className="recommendTitle">
              <span className="recommendText">推荐歌单</span>
              <span className="recommendIcon"><Icon type="right" /></span>
            </div>
            <Grid 
              data={data1}
              hasLine={false}
              columnNum={3}
              itemStyle={{width: '100px', height: '180px'}}
              activeStyle={false}
              renderItem={dataItem => (
                <div>
                  <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                  <div style={{ color: '#000', fontSize: '14px', margin: '0', textAlign: 'left' }}>
                    <span>I am title.aaaaaaaaa</span>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="new">
            <div className="newTitle">
              <span className="newText">最新音乐</span>
              <span className="newIcon"><Icon type="right" /></span>
            </div>
            <Grid 
              data={data1}
              hasLine={false}
              columnNum={3}
              itemStyle={{width: '100px', height: '180px'}}
              activeStyle={false}
              renderItem={dataItem => (
                <div>
                  <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                  <div style={{ color: '#888', fontSize: '14px', margin: '0',textAlign: 'left'  }}>
                    <p style={{ color: '#000' }}>歌名</p>
                    <p>歌手</p>
                  </div>
                </div>
              )}
            />
          </div>
        </WingBlank>
      </div>
    )
  }
}

export default Home;