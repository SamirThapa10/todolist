const express= require('express')
const router = express.Router() 

router.post('/Data',(req,res) =>{
    const list =req.body.list
    console.log(list)
})

router.get('/getData',(req, res) =>{
    res.send('No task to do');
})

module.exports = router