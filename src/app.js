import React from 'react';
import ReactDOM from 'react-dom';

console.log('HERE');

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return <h1>Hello {this.props.name}!!</h1>;
  }
}

((html) => {
  console.log(!!html);
  ReactDOM.render(
  <HelloMessage name="Sebastian" />,
  html.body
 );
})(document || {});
