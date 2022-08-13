const express = require('express');
const mobileApi = require("./Documents/Mobile");
const ipadApi = require("./Documents/Ipad");
const laptopApi = require("./Documents/Laptop")
const accessoriesApi = require("./Documents/Accessories")
const macbookApi = require("./Documents/MakcBook")

const cors = require("cors");
const app = express();

app.use(cors());

app.use("/api",mobileApi);
app.use("/api",ipadApi);
app.use("/api",laptopApi);
app.use("/api",macbookApi);
app.use("/api",accessoriesApi);

app.listen(process.env.PORT||4400, () =>{
    console.log("App is Running");
})