import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink, useHistory } from 'react-router-dom'
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
    marginTop: theme.spacing(3),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
      borderRadius: '150px'
  },
}));

export default function SignUp() {
    
    const classes = useStyles();
    const history = useHistory()
    
    const [user, setuser] = useState({
        fname:"", lname:"", email:"", password:""
    })
    let name, value;
    const handleChange = (e) => {

        name = e.target.name
        value = e.target.value
        setuser({...user, [name]:value})
    }


    const handleSignup = async(e) => {

        e.preventDefault()

        try {
            const { fname, lname, email, password } = user
    
            //API Call    
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, lname, email, password
                })
            })

            const data = res.json()

            if (res.status === 422 || !data) {
                alert("Invalid Registration")
                setuser({
                    fname: "", lname: "", email: "", password: ""
                })
            }
            else {
                alert("Successfully registered")
                history.push('/login')
            }
        }
        catch (err) {
            console.log(err)
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
                Sign up
            </Typography>
            <form className={classes.form} >
                <Grid container spacing={2}>
                      {/* {items.map((x, key) => (
                            <Grid item xs={x.xs} sm={x.sm}>
                            
                                <TextField
                                    type={x.type}
                                    name={x.name}
                                    id={x.id}
                                    value={user.fname}
                                    label={x.label}
                                    required
                                    fullWidth={true}
                                    variant="outlined"

                                />
                            </Grid>
                        ))} */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text"
                            name="fname"                   
                            id="fname"
                            label="First Name"
                            value={user.fname}
                            variant="outlined"
                            required
                            fullWidth
                            autoFocus
                            onChange={handleChange}
                                
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text"
                            name="lname"
                            id="lname"
                            label="Last Name"
                            value={user.lname}
                            required
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type= "email"
                            name="email"
                            id="email"
                            label="Email Address"
                            value={user.email}
                            required
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                              
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            type="password"
                            name="password"
                            id="password"
                            label="Password"
                            value={user.password}
                            required
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                              
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSignup}          
                    >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <NavLink to="/login" variant="body2">
                            Already have an account? Sign in
                        </NavLink>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
    </>
  );
}