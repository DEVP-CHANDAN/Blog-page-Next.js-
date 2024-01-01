const fs = require('fs');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await fs.promises.readdir('contact');
    fs.writeFile(`contact/${data.length+1}.json`, JSON.stringify(req.body), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).json(["Error writing file"]);
      } else {
        res.status(200).json(["File written successfully"]);
      }
    });
  } else {
    res.status(200).json(["AllBlogs"]);
  }
}
