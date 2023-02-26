const router = require('express').Router();
const db = require('../../db/db');


router.post('/', (req, res)=>{
    const id = req.body.ID;
    const title = req.body.title;
    const body = req.body.body;
    if(id == -1)
        id = data.length;

    db.data[id].title = title;
    db.data[id].description = body;
    db.data[id].id = id;
    db.data[id].shortDescription = description.substring(0, 20) + "...";
    
    db.update()
    .then(()=>res.status(200).json({message:"Update Success"}))
    .catch(()=>res.status(400).json({message:"Error saving data"}));
});

module.exports = router;