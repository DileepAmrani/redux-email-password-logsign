import React from 'react'
import './SignUp.css'
import { Header, Input, Button} from '../../Component/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'


import { Signup } from '../../Config/Redux/action'
class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }


    
    render() {
        console.log(this.props.history)
        return (
            <div className="signup">
                <Header />
                <Grid container justify="center" >
                <Grid item xs={10} sm={10} md={6} lg={4}>
                <Paper className="loginBox">
                <div >
                    <span className="heading">Sign Up</span>
                    <Input name="Email"  type="email" onchange={(e)=>this.setState({email: e.target.value})}/>
                    <Input name="Password"  type="password" onchange={(e)=>this.setState({password: e.target.value})}/>
                    <span style={{color: 'red'}}>{this.props.signuperror}</span>                    
                    <Button name="Sign Up" onclick={()=> this.props.Signup(this.state, this.props.history)}/>

                    <span onClick={()=>this.props.history.push('/')}>Already have Account? Login. </span>
                </div>
                </Paper>
                </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        signuperror: state.signuperror 
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        Signup: (data, path)=> dispatch(Signup(data, path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)