import express from 'express'
const router = express.Router()

router.use((req,res,next) => {
    console.log('time',Date.now())
    next()
})
router.get('/',(req,res) => {
    res.send('home page')
})