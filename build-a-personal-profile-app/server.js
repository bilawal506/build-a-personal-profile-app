const express = require("express");
const app = express();
const port = 3000;
const profileRouter = express.Router()

app.get("/",(req,res)=>{
  res.send("Welcome to Camper Bot's homepage!")
})

app.get("/hobbies", (req, res)=>{
  res.send("I cycle, go boating, and play guitar.")
})

app.get("/skills", (req ,res)=>{
  res.send("JavaScript, Node.js, and Express.js!")
})

profileRouter.get("/", (req,res)=>{
  res.json({
    name:"Camper Bot",
    hobbies:['cycling', 'boating', 'guitar'],
    skills:['JavaScript', 'Node.js', 'Express.js']
  })
})

app.use("/api/profile", profileRouter)

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});