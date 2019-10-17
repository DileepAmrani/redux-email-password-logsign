import React from 'react'
import './Login.css'
import { Header, Input, Button} from '../../Component/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { LogIn } from '../../Config/Redux/action'
import { connect } from 'react-redux'


class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.inputs = React.createRef()
        this.inputs1 = React.createRef()

    }

    loginAuth = ()=>{
        // console.log(this.inputs.current)
        // if(this.state.email === "" ){
        // }
        this.props.LogIn(this.state, this.props.history)
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Header />
                <Grid container justify="center" >
                <Grid item xs={10} sm={10} md={6} lg={4}>
                <Paper className="loginBox">
                <div >
                    <span className="heading">Login</span>
                    <Input ref={this.inputs} name="Email"  type="email" onchange={(e)=>this.setState({email: e.target.value})}/>
                    <Input name="Password"  type="password" onchange={(e)=>this.setState({password: e.target.value})}/>
                    <span style={{color: 'red'}}>{this.props.loginerror}</span>
                    <Button name="Login" onclick={()=> this.loginAuth()}/>
                    <span onClick={()=>this.props.history.push('/signup')}>Don't have Account? Sign Up </span>
                </div>
                </Paper>
                </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        loginerror: state.loginerror
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        LogIn: (data, path)=> dispatch(LogIn(data, path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)