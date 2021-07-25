import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import ShowTable from './ShowTable'

const Table = () => {
  
  const { topic } = useParams()
  const history = useHistory()
  const [userData, setuserData] = useState()
  const [allQuestion, setAllQuestion] = useState([])
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
          setuserData(data)
          
          let topic_id = topic.toLowerCase()
          let url = `/showquestion/${data}/${topic_id}`
          const res1 = await fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
          const question = await res1.json()
          setAllQuestion(question)
        
        }
        else {
          await sleep(100)
          history.push('/login')
        }
        
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    callAbout()
  }, [])

  
  
  return (
    <>
      {/* {allQuestion.map((x, key) => (
        <div>
          <h2>{x.title}</h2>
          <h2>{x.link}</h2>
          <h2>{x.details}</h2>
        </div>
      ))} */}

      <ShowTable question={allQuestion}/>
     
    </>
  )
}

export default Table
