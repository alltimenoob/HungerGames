import { Request, Response } from "express"

const express = require('express')
const app = express()


app.get('/',(req : Request, res : Response) => {
    return res.json({name:"mihir"})
})

app.listen(3000,()=>{
    console.log("Server Started on port 3000 ✅")
})

