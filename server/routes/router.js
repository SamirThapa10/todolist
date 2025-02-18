const express= require('express')
const router = express.Router() 

router.use(express.json())

let fullList = [{
    user : null,
    value : 'No task to do'}]

router.post('/api',(req,res) =>{
    const {user,value} =req.body
    console.log("Received Body:", req.body);
    console.log(`Updated List of ${user}: ${value}`)
    const newTask = { user,value}
    fullList.splice(0, fullList.length)
    fullList.push(newTask)
    res.status(201).json({ message: "List updated", data: newTask});
})

router.get('/api',(req, res) =>{
    res.json(fullList);
})

router.delete('/api',(req,res) => {
    fullList = []
    res.json({ message: "List deleted successfully", data: fullList });
})

module.exports = router