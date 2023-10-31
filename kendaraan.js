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

app.get("/kendaraan", (req, res) =>{
    res.send("GET request to /kendaraan");
});

app.post("/kendaraan", (req, res)=>{
    const{plat_nomor, merk_kendaraan} = req.body;

    let use3 = {
        plat_nomor:plat_nomor,
        merk_kendaraan:merk_kendaraan
    }
    kendaraanData.push(newKendaraan);
    res.json(use3)
})

app.get("/kendaraan", (req, res) => {
    res.json(kendaraanData);
  });

  app.get("/kendaraan/:plat_nomor", (req, res) => {
    const platNomor = req.params.plat_nomor;
    const kendaraan = kendaraanData.find((k) => k.plat_nomor === platNomor);
  
    if (!kendaraan) {
      res.status(404).json({ message: "Kendaraan not found" });
    } else {
      res.json(kendaraan);
    }
  });

  app.put("/kendaraan/:plat_nomor", (req, res) => {
    const platNomor = req.params.plat_nomor;
    const updatedData = req.body;
  
    const kendaraan = kendaraanData.find((k) => k.plat_nomor === platNomor);
  
    if (!kendaraan) {
      res.status(404).json({ message: "Kendaraan not found" });
    } else {
      Object.assign(kendaraan, updatedData);
      res.json(kendaraan);
    }
  });

  app.delete("/kendaraan/:plat_nomor", (req, res) => {
    const platNomor = req.params.plat_nomor;
    const index = kendaraanData.findIndex((k) => k.plat_nomor === platNomor);
  
    if (index === -1) {
      res.status(404).json({ message: "Kendaraan not found" });
    } else {
      kendaraanData.splice(index, 1);
      res.json({ message: "Kendaraan deleted" });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
