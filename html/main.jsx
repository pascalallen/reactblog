var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;

class Posts extends React.Component {
  render() {
    var json = {"active":{"label":"Active","value":"12"},"automatic":{"label":"Automatic","value":"8"},"waiting":{"label":"Waiting","value":"1"},"manual":{"label":"Manual","value":"3"}};
    var arr = [];
    Object.keys(json).forEach(function(key) {
      arr.push(json[key]);
    });
    return <ul>{arr.map(item => <PostsChild key={item.label} label={item.label} value={item.value} />)}</ul>;
  }
}

class PostsChild extends React.Component {
  render() {
    return <li>{this.props.label + " - " + this.props.value}</li>;
  }
}

ReactDOM.render(<Posts />, document.getElementById('myapp'));

class Signup extends React.Component{
  render() {
      return (
        <div>
          <form className="form-signin">
            <h2 className="form-signin-heading">Please sign up</h2>
            <label for="inputName" className="sr-only">Name</label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
             
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
          </form>
          <div>
	        <Link to="/">{'Signin'}</Link>
	      </div>
        </div>
         
      )
    }
}


// ReactDOM.render(<Signin/>, window.document.querySelector("#app"));

// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route component={Signin} path="/"></Route>
//         <Route component={Signup} path="/signup"></Route>
//     </Router>,
// window.document.querySelector("#app"));




