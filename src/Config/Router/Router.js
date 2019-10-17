import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Login, SignUp, Home } from '../../Container/index'

class BasicRouter extends React.Component{
    render(){
        return(
            <Router>
               <Route exact path="/" component={Login} />
               <Route  path="/signup" component={SignUp} />
               <Route  path="/home" component={Home} />
            </Router>
        )
    }
}

export default BasicRouter