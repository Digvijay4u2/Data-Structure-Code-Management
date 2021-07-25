import React, {useState, useEffect} from 'react'
import './about.css'
import Sidebar from '../Sidebar/NewSidebar'
import { useHistory } from 'react-router'


const About = () => {

    const history = useHistory()
    const [userData, setuserData] = useState()
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const callAbout = async () => {
        try {
            const res = await fetch('/dash', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            
            if (res.status === 200) {
                const data = await res.json()
                console.log(data)
                setuserData(data)
            }
            else {
              await sleep(100)
              history.push('/login')
            }
            
        }
        catch (err) {
            console.log(err)
            history.push('/login')
        }
    }
    useEffect(() => {
        callAbout()
    }, [])
    
    return (
        <>
            <Sidebar />
            <h2 style={{display:'flex', justifyContent:'center'}}>{userData}</h2>
            
        </>
    )
}

export default About
