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

app.get("/pemilik", (req, res) =>{
    res.send("GET request to /pemilik");
});

app.post("/pemilik", (req, res)=>{
    const{NIK_pemilik, nama_pemilik, username1, password1} = req.body;

    let use2 = {
        NIK_pemilik:NIK_pemilik,
        nama_pemilik:nama_pemilik,
        username1:username1,
        password1:password1
    }
    pemilikData.push(newPemilik);
    res.json(use2)
})

app.get("/pemilik", (req, res) => {
    res.json(pemilikData);
  });

  app.get("/pemilik/:NIK_pemilik", (req, res) => {
    const NIK = Number(req.params.NIK_pemilik);
    const pemilik = pemilikData.find((p) => p.NIK_pemilik === NIK);
  
    if (!pemilik) {
      res.status(404).json({ message: "Pemilik not found" });
    } else {
      res.json(pemilik);
    }
  });

  app.put("/pemilik/:NIK_pemilik", (req, res) => {
    const NIK = Number(req.params.NIK_pemilik);
    const updatedData = req.body;
  
    const pemilik = pemilikData.find((p) => p.NIK_pemilik === NIK);
  
    if (!pemilik) {
      res.status(404).json({ message: "Pemilik not found" });
    } else {
      Object.assign(pemilik, updatedData);
      res.json(pemilik);
    }
  });

  app.delete("/pemilik/:NIK_pemilik", (req, res) => {
    const NIK = Number(req.params.NIK_pemilik);
    const index = pemilikData.findIndex((p) => p.NIK_pemilik === NIK);
  
    if (index === -1) {
      res.status(404).json({ message: "Pemilik not found" });
    } else {
      pemilikData.splice(index, 1);
      res.json({ message: "Pemilik deleted" });
    }
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
