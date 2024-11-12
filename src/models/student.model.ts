import mongoose, { Schema } from 'mongoose';
const ObjectId = Schema.ObjectId;

const schema = new Schema(
  {
    userId:{
        type: ObjectId,
        ref: "users"
    }
  },
  { timestamps: true }
);

export default mongoose.model('students', schema);
