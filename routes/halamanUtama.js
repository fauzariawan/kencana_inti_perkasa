const router = require('express').Router();

router.get("/",(req, res)=>{
    res.send("Ini Halaman Utama")
})

module.exports = router