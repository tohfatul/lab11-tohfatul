const http = require("http");
        const fs = require('fs');
        const util = require('util');
        const server = http.createServer((req, res) => {
            console.log(`${req.url}${req.method}`);
            res.setHeader("Content-Type", "image/jpg");
            res.statusCode = 200;
            fs.readFile('./panda.jpg',(err, data)=>{
                res.end(data);
            });
            fs.createReadStream('./panda.jpg').pipe(res);
            res.end(fs.readFileSync('./panda2.jpg'));
            const promise = util.promisify(fs.readFile);
            promise("./panda2.jpg").then((data) =>{
                res.end(data);
            }).catch((err) =>res.end(err));
        }).listen(3000);
        console.log('Listening');
