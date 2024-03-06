const http = require('http');
const port = 7000;

const server = http.createServer((req, res) => {

    console.log(req.url);

    switch (req.url) {
        case "/":
            res.end("Hello Server...");
            break;
        case "/home":
            res.end("Welcome To Home Page...");
            break;
        case "/about":
            res.end("Welcome To About Page...");
            break;
        case "/shope":
            res.end("Welcome To User shope...");
            break;
        case "/contact":
            res.end("Welcome To Contact Page...");
            break;
        default:
            res.end("server not  found...");
    }
})

server.listen(port, () => {
    console.log(`server start $(port)`);
})