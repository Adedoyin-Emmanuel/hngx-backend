const express = require("express");
const app = express();
const indexRoute = require("./routes/index");
const PORT = process.env.PORT || 2800;


app.use(express.json());
app.use("/api", indexRoute);


app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`);
})
