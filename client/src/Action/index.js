import { SET_QUESTIONS } from './actionTypes'
const axios = require('axios')

export const postQuestions = (data) => {
    return async (dispatch) => {
        data.map(async (x, key) => (
            await fetch('/addquestion',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    title: x.title , link: x.link, topic: x.topic, details:x.details
                  })
            })
        ))

        dispatch(getQuestions())
    }
}
export const setQuestions = (data) => {
    return {
        type: SET_QUESTIONS,
        data
    }
}
export const getQuestions = () => {
    return async (dispatch) => {
        const data = await axios.get('/getquestions')
        dispatch (setQuestions(data))
    }
}