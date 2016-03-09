import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (<h1> Hello {this.props.name}!! </h1>);
  }
}

((html) => {
  ReactDOM.render(
  <HelloMessage name="Sebastian" />,
  html.body
 );
})(document || {});
