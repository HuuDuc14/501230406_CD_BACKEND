import roomRouter from "./roomRoute.js"

function routers(app) {

    app.use('/room', roomRouter)

    app.get("/", (req, res) => {
        res.render('pages/dashboard')
    })

    

}

export default routers