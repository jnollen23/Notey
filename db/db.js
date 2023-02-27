require('dotenv').config();
const fs = require('fs');
const db = module.exports = {};

const fileLoc = process.env.FILE_LOC;

fs.readFile(fileLoc, "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        if (data) {
            db.data = JSON.parse(data);
            console.log("Successfully parsed file contents");
        }
        else console.log("Successfully opened file but not data");
    }
});

db.update = async function () {
    await fs.writeFileSync(fileLoc, JSON.stringify(db.data));
};
