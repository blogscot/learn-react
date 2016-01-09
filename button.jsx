import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0}

    // we need to wire up 'this'
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter+1})
  }

  render() {
    return <div>
             <h1>Let's Count!</h1>
             <div>Click Count: {this.state.counter}</div>
             <button onClick={this.increment}>Click Me</button>
           </div>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('example'));
