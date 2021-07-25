import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink, useHistory} from 'react-router-dom'
import AppNav from '../../Navbar/Navbar'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '150px'
  },
}));

export default function SignIn() {

  const classes = useStyles();

  const history = useHistory();

  const [user, setuser] = useState({
    email:"",  password: ""
  })
  
  let name, value
  const handleChange = (e) => {

    name = e.target.name
    value = e.target.value
    setuser({...user, [name]:value})
  }

  const handleLogin = async(e) => {

    e.preventDefault()


    try {
      
      
      const { email, password } = user
    

      //API Call
      const res = await fetch("/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })
    
      //const data = await res.json()

      if (res.status === 201) {
        history.push('/dash')
      }
      
      else {
        alert('Invalid Credentials')
      }
    }
    catch (err) {
        
      console.log(err);
    }

  }

  return (
    <>
    <AppNav />
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    id = "email"
                    label = "Email Address"
                    name = "email"
                    autoFocus
                    value = {user.email}
                    variant ="outlined"
                    margin ="normal"
                    required
                    fullWidth
                    onChange = {handleChange}
                  />
                <TextField
                
                    name ="password"
                    label ="Password"
                    type ="password"
                    id ="password"
                    value = {user.password}
                    variant ="outlined"
                    margin ="normal"
                    required
                    fullWidth
                    onChange = {handleChange}
                  />
                {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleLogin}
                  >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <NavLink to='/register' variant="body2">
                            {"Don't have an account? Sign Up"}
                        </NavLink>
                    </Grid>
                </Grid>
            </form>
        </div>
    
      </Container>
  </>
  );
}