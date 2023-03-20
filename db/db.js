require('dotenv').config();
const fs = require('fs');
const db = module.exports = {};
const path = require('path');

const fileLoc = process.env.FILE_LOC;

try {
    db.data = [];
    path.exists(fileLoc, function (exists) {
        fs.readFile(fileLoc, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                if (data) {
                    db.data = JSON.parse(data);
                    console.log("Successfully parsed file contents");
                }
                else {
                    console.log("Successfully opened file but not data");
                }
            }
        })
    });
} catch (e) {
    console.log("File read failed");
}

db.update = async function () {
    await fs.writeFile(fileLoc, JSON.stringify(db.data));
};
