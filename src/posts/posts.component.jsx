import React, { Component } from 'react';
class Posts extends Component {
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

export default Posts