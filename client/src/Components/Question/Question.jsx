import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import './question.css'
import Sidebar from '../Sidebar/NewSidebar'
const Question = () => {

    const history = useHistory()
    const [userData, setuserData] = useState({})
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


    const [question, setquestion] = useState({
        title: "", link: "", topic: "", details: ""
    })

    let name, value
    const handleChange = (e) => {
        name = e.target.name
        value = e.target.value
        setquestion({...question,[name]:value})
    }

    const handleSubmit = async(e) => {
        
        e.preventDefault()

        try {

            const {title,link,topic,details} = question
            const userId = userData

            const res = await fetch('/addquestion', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId,title,link,topic,details
                })
            })

            if (res.status === 201) {
                
                alert('Added successfully')
                history.push('/dash')
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    

    return (
        <>
            <Sidebar />
            <h2 style={{textShadow: '2px 0 0 #000', color:'#9fa8da', display:'flex', fontWeight:'bold', justifyContent:'center', fontFamily: 'Satisfy, cursive'}}>Add Your Question Here</h2>
            <div className="container">
                <div className="adjust">
                    <form >
                        <div className="inputbox">
                            <label>Title</label><br/>
                            <input type="text" name="title" value={question.title}
                                onChange={handleChange} />
                        </div>
                        <br />
                        <div className="inputbox">
                            <label>Link</label><br/>
                            <input type="text" name="link" value={question.link} onChange={handleChange}
                                />
                        </div>
                        <br />
                        <label>Select Topic:&nbsp;&nbsp;&nbsp;</label>
                        <select className="select_topic" name="topic" value={question.topic} onChange={handleChange}>
                            <option value=""> --select--</option>
                            <option value="array">Array</option>
                            <option value="string">String</option>
                            <option selected value="graph">Graph</option>
                            <option value="bst">BST</option>
                        </select>
                        <br /><br /> <br />
                        <label>Enter Details:</label>
                        <br />
                
                        <textarea className="text_area" rows="15" cols="80" maxlength="200" name="details" value={question.details} onChange={handleChange} />
                        
                        <br /><br /><br />
                        <input type="Submit" value="Submit" onClick={handleSubmit} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Question
