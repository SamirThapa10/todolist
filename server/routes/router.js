const express= require('express')
const router = express.Router() 

router.use(express.json())

let fullList = ['No task to do'];

router.post('/api',(req,res) =>{
    const {list} =req.body
    console.log(`Updated List is ${list}`)
    const newTask = list
    if(fullList=['No task to do']){
        fullList = [...list];
    }else{
        fullList = [...fullList, ...list];
    }
    res.status(201).json({ message: "List updated", data: newTask});
})

router.get('/api',(req, res) =>{
    res.json(fullList);
})

router.delete('/api',(req,res) => {
    const {index , task} = req.body
    console.log(req.body)
    if (index === undefined) {
        fullList = ['No task to do']
        res.json({ message: "Whole Task Deleted Successfully", data: fullList });
    }
    fullList = fullList.filter(list => list !== task);
    res.json({ message: "Specific Task deleted successfully", data: fullList });
})


module.exports = router