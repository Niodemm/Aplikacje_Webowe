import {Readable} from 'stream'
    function Random(min,max){
       return Math.floor(Math.random() * (max - min )) +min
    }
    async function * generate(){
    for(let i=0;i<20;i++){
        yield Random(-420,2137);
    }
}
const readable = Readable.from(generate());
readable.on('data',(chunk) => {
    console.log(chunk);
});