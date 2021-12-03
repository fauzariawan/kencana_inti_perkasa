function errorHandling(err, req, res, next){
    if(err.name == 'SequelizeUniqueConstraintError'){
        console.log('dari error handling SequelizeUniqueConstraintError')
        console.log(err.errors[0].message)
        res.status(400).json({kode:'01', pesan: err.errors[0].message})
        // console.log('ini dari error handling')
        // console.log(err.message)
    }else if(err.name = 'SequelizeDatabaseError'){
        console.log(' dari error handling SequelizeDatabaseError >>>>>>>>>>>>>')
        console.log(err.original)
    }else{}
    // // res.send(err.errors)
    // if(err.name == 'login'){
    //     res.status(500).json({pesan:err.errors})
    // }else if(err.name == 'register'){
    //     res.status(500).json({pesan:err.errors})
    // }else if(err.name == 'SequelizeConnectionError'){
    //     res.status(500).json({"rc":"05","pesan":"GAGAL Koneksi ke DB "})
    // }else{
    //     console.log("ini dari error handling")
    //     console.log(err)
    //     res.send(err)
    // }
}

module.exports = errorHandling