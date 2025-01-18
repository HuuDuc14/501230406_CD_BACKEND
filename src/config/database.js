import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017'
const dbname = 'doan_CDBackend'

function connectDatabase() {
    try {
        mongoose.connect(`${uri}/${dbname}`)
        console.log('connect batabase successfully');
    } catch (error) {
        console.log('connect database failed: ', error);
    }
}

export default connectDatabase