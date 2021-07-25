const express = require('express')
const router = express.Router()
const User = require('../Models/user')
const Question = require('../Models/question')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../Middleware/auth')



//Logout User
router.get('/logout', async (req, res) => {
    
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0),
        })
        return res.status(201).json()
    }
    catch (err) {
        
        console.log(err);
    }


})


//New Registration
router.post('/register', async (req, res) => {

    try {
        const { fname, lname, email,password } = req.body
        const name = fname + " "+lname
        
        if (!email || !password) {
            return res.status(422).json({ Error: "required" })
        }
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ Message: 'Email already exists' })
        }
        else {
            const user = new User({ name, email, password})
            await user.save()
            return res.status(201).json({ Message: 'User registered successfully' })
        }
    }
    catch (err) {
        console.log(err);
    }
    
})

//Login User
router.post('/login', async (req, res) => {

    try{
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({Message:'Please fill all the data'})
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            //console.log(token)
            if (isMatch) {
                //let token = await userLogin.generateAuthToken()
                let token = jwt.sign({
                    user : userLogin._id
                }, process.env.SECRET_KEY)
                
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                return res.status(201).json()
               
            }
            else {
                return res.status(400).json()
            }
        }
        else {
            return res.status(400).json()
        }
    }
    catch (err) {
        console.log(err);
    }
})



//Dashboard with middleware
router.get('/dash',auth,async (req,res) => {

    try {
        const data = req.user
        return res.json(data)
        //const info = await User.findOne({_id:data})
        //return res.json(info)
    }
    catch (err) {
        console.log(err);
    }
})


//Add Questions
router.post('/addquestion', async (req, res) => {

    try {
        const { userId, title, link, topic, details } = await req.body

        if (!title || !topic) {
            return res.status(422).json({ Error: "required" })
        }

        const question = new Question({ userId, title, link, topic, details})
        await question.save()
        return res.status(201).json({ Message: 'Added successfully' })

    }
    catch (err) {
        console.log(err)
    }
})

//Get Questions
router.get('/showquestion/:id/:topic', async (req, res) => {
    
    try {

        const userId = req.params.id
        const topic = req.params.topic
        const getQuestion = await Question.find({ userId:userId, topic:topic},{_v:0})
        res.send(getQuestion)
        //return res.status(200).json({Message: 'Successfull'})
    }
    catch (err) {
        
        console.log(err)
    }
})


module.exports = router



