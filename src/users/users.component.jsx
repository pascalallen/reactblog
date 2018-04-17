import React, { Component } from 'react';
class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        { this.state.users.map(user => <li>{user.name}</li>)}
      </ul>
    )
  }
}

export default Users