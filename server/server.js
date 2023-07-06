const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const relationRoutes = require("./routes/relation.routes");
const postRoutes = require("./routes/post.routes");
const uploadRoutes = require("./routes/post.routes");
require('dotenv').config();

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true, }));

server.use(morgan("dev"));
server.use(cors());
server.use(express.static("public"));

server.use("/api/v1/users", userRoutes);
server.use("/api/v1/relation", relationRoutes);
server.use("/api/v1/posts", postRoutes);
server.use("/api/v1/upload", uploadRoutes);



const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
