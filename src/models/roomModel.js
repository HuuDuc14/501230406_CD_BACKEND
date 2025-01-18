import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const { Schema } = mongoose

const roomSchema = new Schema({
    code: {type: String, require: true},
    description: { type: String, default: ''},
    price: { type: Number, required: true, default: 0 }, // Giá thuê phòng
    size: { type: Number, required: true, default: 0 }, // Diện tích phòng (m²)
    number_people: {type: Number, default: 1}, // số người ở
    image: { type: String, default: '' }, // Hình ảnh phòng
    status: { type: String, enum: ['trống', 'đã cho thuê'], default: 'trống' }, // Trạng thái phòng
},{
    versionKey: false,
    timestamps: true
})

// thư viện xóa mềm
roomSchema.plugin(mongooseDelete, {
    overrideMethods: 'all'
})

const RoomModel = mongoose.model('Room', roomSchema)

export default RoomModel