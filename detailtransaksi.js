const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const port = 8000

app.get("/detailtransaksi", (req, res) =>{
    res.send("GET request to /detailtransaksi");
});

app.post("/detailtransaksi", (req, res)=>{
    const {id_transaksi, id_kendaraan} = req.body;

    let use4 = {
        id_kendaraan:id_kendaraan,
        id_transaksi:id_transaksi
    }
    res.json(use4)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
