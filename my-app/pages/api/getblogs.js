const path  = require('path');
const fs = require('fs');
const hello = (req , res)=>{
const filepath = path.join(__dirname , `../../../../blogdata/${req.query.slug}.json`)
console.log(filepath)
fs.readFile(filepath ,'utf-8',(error,data)=>{
     if(error){
        res.status(500).json('Internal Server Error');
     }
        const jsonData = JSON.parse(data);
        res.send(jsonData);
    })
    
}

export default hello