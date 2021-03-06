import React, {Component} from 'react';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">React Blog</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <!-- child routes -->
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main