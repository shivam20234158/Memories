import React,{useEffect} from "react";
import {Container,AppBar,Typography,Grow,Grid} from '@mui/material'
import { useDispatch } from "react-redux";

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import memories from './images/img1.jpg'
import useStyles from './styles'
const App = () => {
    const classes=useStyles();
    const dispatch=useDispatch();

    //this dispatchiex the action we required
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxWidth="lg"> 
            <AppBar className ={classes.AppBar} position="static" color="inherit">
                <Typography className ={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className ={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strech" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
