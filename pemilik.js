const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

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
    res.json(use2)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
