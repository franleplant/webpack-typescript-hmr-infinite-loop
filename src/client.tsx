/// <reference path="typings.d.ts" />

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
// import deepForceUpdate from 'react-deep-force-update';
// import { createPath } from 'history/PathUtils';
import { BrowserRouter } from 'react-router-dom';
import createFetch from './utils/createFetch';
import App from './components/App';
// import { updateMeta } from './utils/DOMUtils';
import Routes from './routes';

/* eslint-disable global-require */

// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
const context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: (...styles: Array<any>) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
  // Universal HTTP client
  fetch: createFetch(self.fetch, {
    baseUrl: (window as any).App.apiUrl,
  }),
};

// let onRenderComplete = function initialRenderComplete() {
//   const elem = document.getElementById('css');
//   if (elem) elem.parentNode.removeChild(elem);
//   onRenderComplete = function renderComplete(route, location) {
//     document.title = route.title;
//
//     updateMeta('description', route.description);
//     // Update necessary tags in <head> at runtime here, ie:
//     // updateMeta('keywords', route.keywords);
//     // updateCustomMeta('og:url', route.canonicalUrl);
//     // updateCustomMeta('og:image', route.imageUrl);
//     // updateLink('canonical', route.canonicalUrl);
//     // etc.
//
//
//     // Google Analytics tracking. Don't send 'pageview' event after
//     // the initial rendering, as it was already sent
//     if (window.ga) {
//       window.ga('send', 'pageview', createPath(location));
//     }
//   };
// };

const container = document.getElementById('app');
// let appInstance;

try {
  ReactDOM.render(
    <App context={context}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </App>,
    container,
    // () => onRenderComplete(route, location),
  );
} catch (error) {
  if (__DEV__) {
    throw error;
  }

  console.error(error);

  // TODO: FIX ME. Do a full page reload if error occurs during client-side navigation
  // if (action && currentLocation.key === location.key) {
  //  window.location.reload();
  // }
}
// }

// TODO: FIX ME. Enable Hot Module Replacement (HMR)
// if (module.hot) {
//   module.hot.accept('./router', () => {
//     if (appInstance) {
//       // Force-update the whole tree, including components that refuse to update
//       deepForceUpdate(appInstance);
//     }
//
//     onLocationChange(currentLocation);
//   });
// }
