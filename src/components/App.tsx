import React from 'react';
import PropTypes from 'prop-types';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
};

// TODO abstract this common context
interface Props {
  context: {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: any,
    // Universal HTTP client
    fetch: any,
  },
  //TODO
  children: any,
};

interface State {}

export default class App extends React.PureComponent<Props, State> {
  static childContextTypes = ContextType


  getChildContext() {
    return this.props.context;
  }


  render() {
    return React.Children.only(this.props.children);
  }
}
