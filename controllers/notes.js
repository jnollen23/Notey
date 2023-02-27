const path = require('path');
const router = require('express').Router();

router.use("", (req,res)=>{
    res.sendFile(path.resolve(`./public/notes.html`));
});

module.exports= router;