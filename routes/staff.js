import { Router } from "express";
import { homeStaff, showSubjectStudents, subjectInfo } from "../controllers/staffs.js";
import { upload } from "../controllers/staffs.js";
import mongodb from 'mongodb'
const router = new Router();
const MongoClient = mongodb.MongoClient;
const mongoURL = 'mongodb://0.0.0.0:27017';
const dbName = 'project';
const collectionName = 'files';
router.get('/', homeStaff)
router.get('/subjects/:_id', subjectInfo)
router.get('/subjects/:_id/students', showSubjectStudents)
router.post('/subjects/:_id', upload.single('pdf'), (req, res) => {
    const file = req.file;

    // Connect to MongoDB
    MongoClient.connect(mongoURL, (err, client) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
            return;
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insert the file into MongoDB
        collection.insertOne({ name: file.originalname, path: file.path }, (err, result) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            } else {
                res.send('File uploaded to MongoDB successfully.');
            }

            // Close the MongoDB connection
            client.close();
        });
    });
});
export default router;