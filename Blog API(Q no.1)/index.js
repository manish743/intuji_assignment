import express, { json } from "express";
import connectToMongoDB from "./src/databaseConnection/connectToMongoDB.js";
import { port } from "./src/config.js";
import blogRouter from "./src/Router/blogRouter.js";

const app = express();
app.use(json());

app.use("/blogs", blogRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, ()=>{
    console.log(`Application is running at port ${port}`)
});

connectToMongoDB();

// app.use("/blogs", blogRouter);