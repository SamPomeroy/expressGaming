const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.json({message: "Welcome to games info App"})
})

module.exports = router