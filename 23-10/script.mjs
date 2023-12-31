import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import { apiRouter } from './routes/api.mjs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

app.use('/api', apiRouter);
app.use(express.json());       
app.use(express.urlencoded({extended: true}))
app.use(express.static('public/js'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/kontakt', (req, res)=>{
    res.sendFile(path.join(__dirname, '/kontakt.html'))
})
app.post('/kontakt', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})
app.listen(port, ()=>{
    console.log(`running at http://localhost:${port}`)
})
