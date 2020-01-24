const server = require("./server.js");

const PORT = process.env.PORT || 7000;

server.listen(7000, () => {
    console.log(`server listening on port ${PORT}`);
});