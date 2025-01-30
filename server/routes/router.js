const express= require('express')
const router = express.Router() 


let list = 'No task to do';
router.post('/Data',(req,res) =>{
    const {value} =req.body
    list = value
    console.log(`Updated List: ${list}`)
    res.status(201).json({ message: "List updated successfully", value });
})

router.get('/getData',(req, res) =>{
    res.send(list);
})

module.exports = router