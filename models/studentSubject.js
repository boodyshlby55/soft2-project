import { Schema, model } from "mongoose";

const studentSubject = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'student'
    },
    subject: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'subject'
    },
});

export default model('studentSubject', studentSubject);