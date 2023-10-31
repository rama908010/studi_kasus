const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const db = require("./koneksi")

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
    detailTransaksiData.push(newDetailTransaksi);
    res.json(use4)
})

app.get("/detailtransaksi", (req, res) => {
    res.json(detailTransaksiData);
  });

  app.get("/detailtransaksi/:id_transaksi/:id_kendaraan", (req, res) => {
    const idTransaksi = Number(req.params.id_transaksi);
    const idKendaraan = Number(req.params.id_kendaraan);
  
    const detailTransaksi = detailTransaksiData.find((dt) => dt.id_transaksi === idTransaksi && dt.id_kendaraan === idKendaraan);
  
    if (!detailTransaksi) {
      res.status(404).json({ message: "DetailTransaksi not found" });
    } else {
      res.json(detailTransaksi);
    }
  });

  app.put("/detailtransaksi/:id_transaksi/:id_kendaraan", (req, res) => {
    const idTransaksi = Number(req.params.id_transaksi);
    const idKendaraan = Number(req.params.id_kendaraan);
    const updatedData = req.body;
  
    const detailTransaksi = detailTransaksiData.find((dt) => dt.id_transaksi === idTransaksi && dt.id_kendaraan === idKendaraan);
  
    if (!detailTransaksi) {
      res.status(404).json({ message: "DetailTransaksi not found" });
    } else {
      Object.assign(detailTransaksi, updatedData);
      res.json(detailTransaksi);
    }
  });

  app.delete("/detailtransaksi/:id_transaksi/:id_kendaraan", (req, res) => {
    const idTransaksi = Number(req.params.id_transaksi);
    const idKendaraan = Number(req.params.id_kendaraan);
    const index = detailTransaksiData.findIndex((dt) => dt.id_transaksi === idTransaksi && dt.id_kendaraan === idKendaraan);
  
    if (index === -1) {
      res.status(404).json({ message: "DetailTransaksi not found" });
    } else {
      detailTransaksiData.splice(index, 1);
      res.json({ message: "DetailTransaksi deleted" });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
