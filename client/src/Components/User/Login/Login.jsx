import React,{ useState } from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory()
     
    const [user, setUser] = useState({
        email: "", password:""
    })
    let name,value
    const handleLogin = (e) => {
        name = e.target.name
        value = e.target.value


        setUser({...user, [name]: value })
    }

    const LoginUser = async (e) => {
        e.preventDefault()

        const { email, password } = user

        const res = await fetch("/login", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        //const data = res.json()
        
        history.push('/dash')

        // if (res.status === 400 || !data) {
        //     alert('Invalid Credentials')
        // }
        // else {
        //     alert('Login is successful')
        //     history.push('/dash')
        // }
    }

    return (
      
        <div className="form_container">
            <div className="form_des">
                <h1>Welcome</h1>
            </div>
            <div className="form_header">
                <h1>Login</h1>
                <form method="POST">
                        <div className="inputbox">
                            <i className="far fa-envelope"></i>
                            <input type="email" value={user.email} name="email"
                            onChange={ handleLogin} placeholder="Enter Email" />
                        </div>
                        <div className="inputbox">
                            <i className="far fa-lock"></i>
                            <input type="password" value={user.password} name="password"
                            onChange={handleLogin } placeholder="Enter Password" />
                        </div>
                    <input type="Submit" value="Login" onClick={ LoginUser}/>
                </form>
                <p><a href="#">Forgot Password?</a></p>
                <p><NavLink to="/register">Not Registered?</NavLink></p>
                
            </div>
        </div>
      
    )
}

export default Login
