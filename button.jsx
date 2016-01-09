import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};

    // we need to wire up 'this'
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({ counter: this.state.counter-1});
  }

  increment() {
    this.setState({ counter: this.state.counter+1});
  }

  render() {
    return <div>
             <h1>Let's Count!</h1>
             <div>Click Count: {this.state.counter}</div>
             <button onClick={this.increment}>Increment</button>
             <button onClick={this.decrement}>Decrement</button>
           </div>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('example'));
