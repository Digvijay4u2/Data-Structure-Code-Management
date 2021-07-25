import React,{ useState } from 'react'
import './register.css'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "", password: ""
    })
    let name, value
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault()
        const { email, password } = user


        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify({
                email, password
            })
        })

        const data = res.json()
        
        
        alert("Successfully Registratered!!!")
        
        history.push('/login')

        // if (res.status === 422 || !data) {
        //     alert("Invalid Registration")
        // }
        // else {
        //     alert("Successfully registered")
        //     history.push('/login')
        // }
    }

    return (
      
        <div className="form_container">
            <div className="form_des">
                <h1>Welcome</h1>
            </div>
            <div className="form_header">
                <h1>Register</h1>
                    <form method="POST">
                        <div className="inputbox">
                            <i className="far fa-envelope"></i>
                            <input type="email" value={user.email} name="email"
                                onChange={handleInputs}
                                placeholder="Enter Email" />                          
                        </div>
                        <div className="inputbox">
                            <i className="far fa-lock"></i>
                            <input type="password" value={user.password} name="password"
                                onChange={handleInputs}
                                placeholder="Enter Password" />                          
                        </div>
                    <input type="Submit" value="Register" onClick={PostData}/>
                    </form>
                    <p><a href="#">Forgot Password?</a></p>
            </div>
        </div>
      
    )
}

export default Register
