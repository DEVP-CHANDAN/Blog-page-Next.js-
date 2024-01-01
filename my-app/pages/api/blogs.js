const path  = require('path');
const fs = require('fs');
const hello = async (req , res)=>{
 
let data = await fs.promises.readdir('blogdata');
let myfile ;
let arr = [];
for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile('blogdata/' + item , 'utf-8');
    arr.push(JSON.parse(myfile))
} 

  res.status(200).json(arr);
}

export default hello