// import { Request, Response } from "express"
const express = require("express");
const app = express();
const port = 8000;
app.get("/", (request, response) => {
    response.send("hello world");
});
app.listen(port, () => {
    console.log('server is now listening on port:', port);
});
//# sourceMappingURL=server.js.map