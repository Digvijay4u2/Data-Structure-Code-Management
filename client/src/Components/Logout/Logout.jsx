import React, {useEffect} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

const Logout = () => {
    
    const history = useHistory()

    const callLogout = async () => {

        try {
        
            const result = await axios.get('/logout')
        
            if (result.status === 201) {
                
                history.push('/login',{replace:true})
            }
            else {
                
                alert('Something wrong!!!')
            }
        }
        catch (err) {
            
            console.log(err)
        }
    }

    useEffect(() => {
        callLogout()
    }, [])
    
    return (
        <>
            <CircularProgress disableShrink />
        </>
    )
}

export default Logout
