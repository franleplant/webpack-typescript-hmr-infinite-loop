/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <NavLink to="/about" className={s.link} activeClassName={s.linkActive}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={s.link}
          activeClassName={s.linkActive}
        >
          Contact
        </NavLink>
        <span className={s.spacer}> | </span>
        <NavLink to="/login" className={s.link} activeClassName={s.linkActive}>
          Log in
        </NavLink>
        <span className={s.spacer}>or</span>
        <NavLink to="/register" className={cx(s.link, s.highlight)}>
          Sign up
        </NavLink>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
