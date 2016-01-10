import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  constructor() {
    super();
    this.state = {firstName: "Uno", lastName: "Dos"};
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
        First name <input type="text" onChange={this.updateFirstName.bind(this)} value={this.state.firstName}
          placeholder="Please enter your first name" />
        Last name <input type="text" onChange={this.updateLastName.bind(this)} value={this.state.lastName}
          placeholder="Please enter your last name" />
        <button onClick={this.handleClick.bind(this)}>Add</button>
      </form>
      <div>
        Full Name: <span>{this.state.fullName}</span>
      </div>
    </div>
  }
}

ReactDOM.render(<User/>, document.getElementById('example'));
