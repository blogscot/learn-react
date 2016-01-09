import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  constructor() {
    super();
    this.state = {firstName: "Uno", lastName: "Dos"};

    // wire up the click / change handlers
    this.handleClick = this.handleClick.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
  }

  // Runs (on client and server) before initial rendering
  componentWillMount() {
    this.setState({fullName: this.state.firstName + " " + this.state.lastName});
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({fullName: this.state.firstName + " " + this.state.lastName});
  }

  updateFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  updateLastName(event) {
    this.setState({lastName: event.target.value});
  }

  render() {
    return <div>
      <form>
        First name <input type="text" onChange={this.updateFirstName} value={this.state.firstName}
          placeholder="Please enter your first name" />
        Last name <input type="text" onChange={this.updateLastName} value={this.state.lastName}
          placeholder="Please enter your last name" />
        <button onClick={this.handleClick}>Add</button>
      </form>
      <div>
        Full Name: <span>{this.state.fullName}</span>
      </div>
    </div>
  }
}

ReactDOM.render(<User/>, document.getElementById('example'));
