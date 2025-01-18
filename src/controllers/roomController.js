import RoomModel from "../models/roomModel.js";


export async function listRoom(req, res) {
    const search = req.query?.search
    let filters = {}
    if(search && search.length > 0){
        filters.code = { $regex: search }
    }
    try {
        const rooms = await RoomModel.find( filters )
        res.render("pages/room/listRoom", {rooms: rooms})
    } catch (error) {
        console.log('khong co room');
    }
}

export function pageCreateRoom(req, res) {
    try {
        res.render("pages/room/formCreateRoom")
    } catch (error) {
        console.log('kh the lay trang create room');
    }
}

export async function createRoom(req, res) {
    const { code, description, price, size, number_people, image, status} = req.body
    try {
        await RoomModel.create({
            code,
            description,
            size,
            price,
            number_people,
            image,
            status
        })
        res.redirect('/room')
    } catch (error) {
        console.log('khong tao duwoc', error)
    }
}

export async function pageEditRoom(req, res) {
    const code = req.params.code

    try {
        const room = await RoomModel.findOne({code})
        res.render('pages/room/formUpdate', {room: room})
    } catch (error) {
        console.log('khong tim thay phong ', error)
    }
}

export async function updateRoom(req, res) {
    const code = req.params.code
    const {description, size, image, price, number_people} = req.body
    try {
        await RoomModel.updateOne(
            {code: code},
            {
                description,
                size,
                image,
                price,
                number_people
            }
        )
        res.redirect('/room')
    } catch (error) {
        console.log('update room khong thanh cong', error);
    }
}

export async function pageDeleteRoom(req, res) {
    const code = req.params.code

    try {
        const room = await RoomModel.findOne({code})
        res.render('pages/room/formDelete', {room: room})
    } catch (error) {
        console.log('khong tim thay phong ', error)
    }
}

export async function deleteRoom(req, res) {
    const code = req.params.code
    try {
        await RoomModel.delete({code: code})
        res.redirect('/room')
    } catch (error) {
        console.log('delete room khong thanh cong', error);
    }
}


export async function trashRoom(req, res, next) {
    try {
        const rooms = await RoomModel.findWithDeleted({deleted: true})
        res.render("pages/room/trashRoom", {rooms: rooms})
    } catch (error) {
        console.log('khong co room');
    }
}

export async function retoreRoom(req, res) {
    const code = req.params.code
    try {
        await RoomModel.restore({code})
        res.redirect('/room/trash')
    } catch (error) {
        console.log('khoi phuc khong thanh cong ', error)
    }
}