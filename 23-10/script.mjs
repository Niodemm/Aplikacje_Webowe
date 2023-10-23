import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000


app.use(express.json());       
app.use(express.urlencoded({extended: true}))
app.use(express.static('public/js'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/kontakt', (req, res)=>{
    res.sendFile(path.join(__dirname, '/kontakt.html'))
})
app.route('/kontakt')
    .post((req,res) => {
        const body = req.body;
        console.log(body);
        res.redirect('/');
    })
router.use((req,res,next) => {
    console.log('time',Date.now())
    next()
})
app.listen(port, ()=>{
    console.log(`running at http://localhost:${port}`)
})