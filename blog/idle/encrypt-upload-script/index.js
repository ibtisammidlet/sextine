const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const { Crypt } = require("simple-crypto-js");

const serviceAccount = require("./path/to/serviceAccountKey.json"); // Path to your service account key file
const storageBucketName = "your-storage-bucket-name"; // Replace with your Firebase Storage bucket name

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: `${storageBucketName}.appspot.com`,
});

const bucket = admin.storage().bucket();

// Function to encrypt the data
function encryptData(data, password) {
  const crypt = new Crypt(password);
  return crypt.encrypt(data);
}

// Function to process a file, encrypt it, and upload to Firebase Storage
async function processFile(filePath, password) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const encryptedFileContents = encryptData(fileContents, password);

  const encryptedFileName = encryptData(path.basename(filePath), password);
  const encryptedFilePath = path.join(path.dirname(filePath), encryptedFileName);

  fs.writeFileSync(encryptedFilePath, encryptedFileContents, "utf8");

  await uploadFile(encryptedFilePath);

  // Delete the encrypted file after uploading
  fs.unlinkSync(encryptedFilePath);

  console.log(`Processed file: ${filePath}`);
}

// Function to upload a file to Firebase Storage
async function uploadFile(filePath) {
  const fileBuffer = fs.readFileSync(filePath);

  const fileEncryptionMetadata = {
    metadata: {
      firebaseStorageDownloadTokens: "your-download-token", // Replace with your custom download token
    },
  };

  await bucket.upload(filePath, fileEncryptionMetadata);

  console.log(`Uploaded file: ${filePath}`);
}

// Function to process files and folders recursively
async function processFilesAndFolders(dirPath, password) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processFilesAndFolders(filePath, password);
    } else {
      await processFile(filePath, password);
    }
  }
}

// Specify the root directory path and password
const rootDirPath = "/path/to/your/directory";
const password = "123456";

processFilesAndFolders(rootDirPath, password)
  .then(() => {
    console.log("Processing and upload complete!");
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
  
  
  //**  ChatGPT v4
