var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7',
  database : 'my_db'
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

class Signin extends React.Component {

	constructor(props) {
	    super(props);
	    this.handleEmailChange = this.handleEmailChange.bind(this);
	    this.handlePasswordChange = this.handlePasswordChange.bind(this);
	    this.state = {
	      email:'',
	      password:''
	    };
	}

    handleEmailChange(e){
	    this.setState({email:e.target.value})
	}
	handlePasswordChange(e){
	    this.setState({password:e.target.value})
	}

	signIn(){
	    alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);   
	    axios.post('/signin', {
			email: this.state.email,
			password: this.state.password
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});         
	}

    render() {
        return (
        	<div>
	            <form className="form-signin">
	                <h2 className="form-signin-heading">Please sign in</h2>
	                <label for="inputEmail" className="sr-only">Email address</label>
	                <input type="email" onChange={this.handleEmailChange.bind(this)} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
	                <label for="inputPassword" className="sr-only">Password</label>
	                <input type="password" onChange={this.handlePasswordChange.bind(this)} id="inputPassword" className="form-control" placeholder="Password" required />
	                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn.bind(this)} type="button">Sign in</button>
	            </form>
                  <div>
			        <Link to="/signup">{'Signup'}</Link>
			      </div>
            </div>
        )
    }

}

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


ReactDOM.render(<Signin/>, window.document.querySelector("#app"));

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Signin} path="/"></Route>
        <Route component={Signup} path="/signup"></Route>
    </Router>,
window.document.querySelector("#app"));




