require('dotenv').config();
const fs = require('fs');
const fsx = require('fs-extra');
const path = require('path');
const db = module.exports = {};

const fileLoc = path.resolve(__dirname, process.env.FILE_LOC);

try {
    db.data = [];
    fsx.pathExists(fileLoc, function (err, exists) {
        if (exists) {
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
        }
        else console.log(err);
    });
} catch (e) {
    console.log(e);
}

db.update = async function () {
    await fs.writeFileSync(fileLoc, JSON.stringify(db.data));
};
