const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const port = 8000

app.get("/kendaraan", (req, res) =>{
    res.send("GET request to /kendaraan");
});

app.post("/kendaraan", (req, res)=>{
    const{plat_nomor, merk_kendaraan} = req.body;

    let use3 = {
        plat_nomor:plat_nomor,
        merk_kendaraan:merk_kendaraan
    }
    res.json(use3)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
