const express = require('express')
const cors = require("cors");
const errorHandling = require('./midleware/errorHandling')
const app = express()
const port = 3002

const halamanUtama = require('./routes/halamanUtama')
const jenisKendaraan = require('./routes/jenisKendaraan')
const vehicle = require('./routes/vehicle')

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.text({
    type: 'text/plain'
}))
app.use(express.json({
    type: 'application/json'
}));

app.listen(port, ()=>{
    console.log(`this app running at port ${port}`)
})

// app.use("/kendaraanDanAlatBerat", kendaraanDanAlatBerat)
// app.use("/jenisKendaraan", jenisKendaraan)
app.get('/tes', (req, res)=>{
    res.send('berhasi')
})
app.use("/", halamanUtama)
app.use("/jenisKendaraan", jenisKendaraan)
app.use("/vehicle", vehicle)
app.use(errorHandling)

app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'Endpoint doesnt exist !!!'
    })
});
