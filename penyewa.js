const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const port = 8000

app.get("/penyewa", (req, res) =>{
    res.send("GET request to /penyewa");
});

app.post("/penyewa", (req, res)=>{
    let NIK_penyewa = Number(req.body.NIK_penyewa)
    let nama_penyewa = (req.body.nama_penyewa)
    let alamat_penyewa = (req.body.alamat_penyewa)
    let noHP_penyewa = Number(req.body.noHP_penyewa)
    let username = (req.body.username)
    let password = (req.body.password)

    let use = {
        NIK_penyewa:NIK_penyewa,
        nama_penyewa:nama_penyewa,
        alamat_penyewa:alamat_penyewa,
        noHP_penyewa:noHP_penyewa,
        username:username,
        password:password
    }
    res.json(use)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
