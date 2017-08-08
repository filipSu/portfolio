import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import {Router, Route, IndexRoute, hashHistory, applyRouterMiddleware} from 'react-router';
import { useScroll } from 'react-router-scroll';

import './index.scss';

import Projects from './app/components/Projects';
import {MainLayout} from './app/components/MainLayout';
import {MyInfoPanel} from './app/components/MyInfoPanel';
import {ProjectInfoPanel} from './app/components/ProjectInfoPanel';
import {ProjectDetail} from './app/components/ProjectDetail';
import NotFound from './app/components/NotFound';

function initGA() {
  ReactGA.initialize('UA-000000000-0');
  hashHistory.listen((location) => logPageView(location));
}

initGA();

function logPageView(location) {
  if (location.search === '') {
    ReactGA.set({ page: location.pathname});
    ReactGA.pageview(location.pathname);
  }
}

const renderWithMiddleware = applyRouterMiddleware(
  useScroll((prevRouterProps, { location }) => (
    /* do NOT scroll on main page (when going through projects), scroll to top when changing between projects*/
    prevRouterProps && location.pathname !== prevRouterProps.location.pathname
  ))
);

ReactDOM.render(
  <Router history={hashHistory} render={renderWithMiddleware}>
    <Route path='/' component={MainLayout}>
      <IndexRoute components={{content: Projects, sidebarWide: MyInfoPanel}} >
        <Route path='/?page=pageParam'/>
      </IndexRoute>
      <Route path='project/:id' components={{content: ProjectDetail, sidebar: ProjectInfoPanel}} />
      <Route path='*' components={{content: NotFound, sidebarWide: MyInfoPanel}} />
    </Route>
  </Router>,
  document.getElementById('root')
);
