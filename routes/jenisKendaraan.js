const router = require("express").Router();
const jenisKendaraan = require("../controllers/jenisKendaraanController")

router.get("/", jenisKendaraan.getAll)

module.exports = router