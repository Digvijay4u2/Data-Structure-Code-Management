const jwt = require('jsonwebtoken')
const User = require('../Models/user')

const Auth = async (req, res, next) => {
    
    try {
        
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({Error:"Unauthorized"})
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        if (!verify) return res.status(401).json({ Error: "Unauthorized" })
        // rootUser = await User.findOne({ _id:verify.user}) 
        req.user = verify.user
        //req.user = verify.user
        next()
    }
    catch (err) {

        res.status(401).send('Unauthorized')
    }

}

module.exports = Auth