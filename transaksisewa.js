const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const port = 8000


app.post("/transaksisewa", (req, res)=>{
    const { transaksi_sewa_id, durasi, NIK_penyewa, NIK_pemilik } = req.body;
    

    let use1 = {
        NIK_penyewa:NIK_penyewa,
        NIK_pemilik:NIK_pemilik,
        transaksi_sewa_id:transaksi_sewa_id,
        durasi:durasi
    }
    res.json(use1)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
