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


app.post("/transaksisewa", (req, res)=>{
    const { transaksi_sewa_id, durasi, NIK_penyewa, NIK_pemilik } = req.body;


    let use1 = {
        NIK_penyewa:NIK_penyewa,
        NIK_pemilik:NIK_pemilik,
        transaksi_sewa_id:transaksi_sewa_id,
        durasi:durasi
    }
    transaksiSewaData.push(newTransaksiSewa);
    res.json(use1)
})

app.get("/transaksisewa", (req, res) => {
    res.json(transaksiSewaData);
  });

  app.get("/transaksisewa/:transaksi_sewa_id", (req, res) => {
    const transaksiId = Number(req.params.transaksi_sewa_id);
    const transaksiSewa = transaksiSewaData.find((t) => t.transaksi_sewa_id === transaksiId);
  
    if (!transaksiSewa) {
      res.status(404).json({ message: "TransaksiSewa not found" });
    } else {
      res.json(transaksiSewa);
    }
  });

  app.put("/transaksisewa/:transaksi_sewa_id", (req, res) => {
    const transaksiId = Number(req.params.transaksi_sewa_id);
    const updatedData = req.body;
  
    const transaksiSewa = transaksiSewaData.find((t) => t.transaksi_sewa_id === transaksiId);
  
    if (!transaksiSewa) {
      res.status(404).json({ message: "TransaksiSewa not found" });
    } else {
      Object.assign(transaksiSewa, updatedData);
      res.json(transaksiSewa);
    }
  });

  app.delete("/transaksisewa/:transaksi_sewa_id", (req, res) => {
    const transaksiId = Number(req.params.transaksi_sewa_id);
    const index = transaksiSewaData.findIndex((t) => t.transaksi_sewa_id === transaksiId);
  
    if (index === -1) {
      res.status(404).json({ message: "TransaksiSewa not found" });
    } else {
      transaksiSewaData.splice(index, 1);
      res.json({ message: "TransaksiSewa deleted" });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
