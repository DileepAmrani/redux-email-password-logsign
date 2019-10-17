import React from 'react'
import './Home.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { Header, Input, AddButton, Edit } from '../../Component/index'
import { firebaseApp } from '../../Config/Firebase/firebase'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            allTodo: []
        }
    }

    render() {
        console.log(this.state.allTodo)
        return (
            <div>
                <Header />
        

                <Grid container justify="center" >
                    <Grid item xs={10} sm={10} md={6} lg={4}>
                  <h1>Home</h1>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home