import "reflect-metadata"
import express from "express"
const app = express()
const PORT = 5050

app.listen(PORT, ()=>{
    console.log(`App is listning on port ${PORT}`);
})
