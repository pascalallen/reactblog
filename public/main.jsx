class Posts extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
    	<div>
	    	<table className="table table-hover table-sm">
	    		<thead>
	    			<tr>
	    				<th>Thumbnail</th>
	    				<th>Title</th>
	    				<th>Body</th>
	    				<th>User</th>
	    			</tr>
	    		</thead>
	    		<tbody>
		          { this.state.posts.map(post => <tr><td><img src="http://via.placeholder.com/35x35" className="img-thumbnail"/></td><td><a href={'/posts/' + post.id}>{post.title}</a></td><td>{post.body}</td><td>{post.userId}</td></tr>)}
		          </tbody>
	      	</table>
      	</div>
    )
  }
}

class Users extends React.Component {
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

class AddUser extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

class DeleteUser extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}


// ReactDOM.render(<DeleteUser/>, document.getElementById('deleteUser'));
// ReactDOM.render(<AddUser/>, document.getElementById('addUser'));
ReactDOM.render(<Posts/>, document.getElementById('posts'));
// ReactDOM.render(<Users/>, document.getElementById('users'));