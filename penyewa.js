const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const penyewaData = [];

app.post("/penyewa", (req, res) => {
    let NIK_penyewa = Number(req.body.NIK_penyewa);
    let nama_penyewa = req.body.nama_penyewa;
    let alamat_penyewa = req.body.alamat_penyewa;
    let noHP_penyewa = Number(req.body.noHP_penyewa);
    let username = req.body.username;
    let password = req.body.password;

    let use = {
        NIK_penyewa: NIK_penyewa,
        nama_penyewa: nama_penyewa,
        alamat_penyewa: alamat_penyewa,
        noHP_penyewa: noHP_penyewa,
        username: username,
        password: password,
    };
    penyewaData.push(use);
    res.json(use);
});

app.get("/penyewa", (req, res) => {
    res.json(penyewaData);
});

app.get("/penyewa/:NIK_penyewa", (req, res) => {
    const NIK = Number(req.params.NIK_penyewa);
    const penyewa = penyewaData.find((p) => p.NIK_penyewa === NIK);
    res.json(penyewa);
});

app.put("/penyewa/:NIK_penyewa", (req, res) => {
    const NIK = Number(req.params.NIK_penyewa);
    const updatedData = req.body;

    const penyewa = penyewaData.find((p) => p.NIK_penyewa === NIK);

    if (penyewa) {
        Object.assign(penyewa, updatedData);
        res.json(penyewa);
    } else {
        res.status(404).json({ message: "Penyewa not found" });
    }
});

app.delete("/penyewa/:NIK_penyewa", (req, res) => {
    const NIK = Number(req.params.NIK_penyewa);
    const index = penyewaData.findIndex((p) => p.NIK_penyewa === NIK);
    if (index !== -1) {
        penyewaData.splice(index, 1);
        res.json({ message: "Penyewa dihapus" });
    } else {
        res.status(404).json({ message: "Penyewa not found" });
    }
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
