import React from 'react';

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
  getChildContext() {
    return this.props.context;
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
