import * as IPFS from 'ipfs-core'
import * as fs	from 'fs'

    const file = fs.readFileSync('../pornhub-scrapper/files/ph5bd5c86128496/lazyload.jpg');
	const ipfs = await IPFS.create()
    const { cid } = await ipfs.add({ path: 'lazyload.jpg', content: file });
	console.info(cid)


/* where i got the code https://stackoverflow.com/questions/63916136/how-to-upload-files-to-ipfs-using-nodejs
const express = require("express");
const app = express();
const ipfsClient = require("ipfs-http-client");
const ipfs = new ipfsClient();
const expFileUpload = require("express-fileupload");
app.use(expFileUpload());

app.post("/upload", (req, res) => {
    let fileObj = {};
    if (req.files.inputFile) {
        const file = req.files.inputFile;
        const fileName = file.name;
        const filePath = __dirname + "/files/" + fileName;

        file.mv(filePath, async (err) => {
            if (err) {
                console.log("Error: failed to download file.");
                return res.status(500).send(err);
            }

            const fileHash = await addFile(fileName, filePath);
            console.log("File Hash received __>", fileHash);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log("Error: Unable to delete file. ", err);
                }
            });
            fileObj = {
                file: file,
                name: fileName,
                path: filePath,
                hash: fileHash
            };
            res.render("transfer", { fileObj });
        });
    }
});


const addFile = async (fileName, filePath) => {
    const file = fs.readFileSync(filePath);
    const filesAdded = await ipfs.add({ path: fileName, content: file }, {
    progress: (len) => console.log("Uploading file..." + len)
  });
    console.log(filesAdded);
    const fileHash = filesAdded.cid.string;

    return fileHash;
};

app.listen(3000);


*/


/* other things you might consider
const result = await ipfs.add(file)

console.info(result)

Prints:
{
  "path": "tmp",
  "cid": CID("QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg"),
  "mode": 493,
  "mtime": { secs: Number, nsecs: Number },
  "size": 67
}

//* how to get cid directly

const { cid } = await ipfs.add(files)
console.info(cid)
// *****************************************
*/