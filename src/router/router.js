import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import home from "./../page/home";
import my from "./../page/my";
import account from "./../page/account";
import play from "./../page/play";
import fm from "./../page/fm";
import musicList from "./../page/musicList";
import rankList from "./../page/rankList";
import today from "./../page/today";

// 异步加载举例 本项目暂无使用
// const balance = asyncComponent(() => import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活

export default class router extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/my" component={my} />
          <Route path="/account" component={account} />
          <Route path="/play" component={play} />
          <Route path="/fm" component={fm} />
          <Route path="/musicList" component={musicList} />
          <Route path="/rankList" component={rankList} />
          <Route path="/today" component={today} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  };
};