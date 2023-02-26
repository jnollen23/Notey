const router = require('express').Router();
const db = require('../db/db');


router.get('/view', (req, res)=>{
    const note = db.data[req.body.ID];

    res.render("view",{
        note:note.note,
        description:note.description,
        id: req.body.ID,
        data
    })
});

router.get('/edit', (req,res)=>{
    const piece = req.body.ID;
    const note = "Enter Note Name";
    const description = "Enter a longer description for the note.";
    if(piece != -1){
        note = db.data[piece].note;
        description = db.data[piece].description;
    }

    res.render("edit", {
        note: note,
        description: description,
        id: piece,
        data: db.data
    });
});

module.exports = router;