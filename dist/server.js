// import { Request, Response } from "express"
const express = require("express");
// const cors = require('cors');
const app = express();
const port = 8000;
// app.use(cors({}))
app.get("/", (request, response) => {
    response.send("hello world");
});
app.listen(port, () => {
    console.log('server is now listening on port:', port);
});
//# sourceMappingURL=server.js.map