import express from "express"
import connectDatabase from "./config/database.js"
import routers from "./routers/index.js"
import bodyParser from "body-parser"
import path from "path"

const app = express()
const port = 5000
const __dirname = path.resolve()

// muốn lấy dữ liệu từ req.body thì phải có 2 dòng này 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cấu hình ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'))

// Cấu hình thư mục tĩnh cho CSS, JS, images, v.v.
app.use(express.static(path.join(__dirname, '/src/public')));



// connect database
connectDatabase()

// router
routers(app)


app.listen(port, () => {
    console.log('server running on port ', port);
})