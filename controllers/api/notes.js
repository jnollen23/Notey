const router = require('express').Router();
const db = require('../../db/db');


router.get('/', (req, res) => {
    res.status(200).json(db.data);
});

router.post('/', (req, res) => {
    let id = req.body.ID;
    const title = req.body.title;
    const body = req.body.text;
    if (id === undefined) {
        if (db.data === undefined)
            id = 0;
        else
            id = db.data.length;
    }

    const newItem = {
        title: title,
        description: body,
        id: id,
        shortDescription: body.substring(0, 20) + "...",
    };

    db.data.push(newItem);

    db.update()
        .then(() => res.status(200).json({ message: "Update Success" }))
        .catch(() => res.status(400).json({ message: "Error saving data" }));
});

router.delete('/:ID', async (req, res) => {
    const id = req.params.ID;
    console.log(`(${id}) delete require`);
    db.data.splice(id, 1);
    console.log(`(${id}) deletion complete`);
    for(let i = 0; i < db.data.length; i++){
        db.data[i].id = i;
    }
    db.update().then(()=> res.status(200).json({message:"Delete Success"}));
});

module.exports = router;