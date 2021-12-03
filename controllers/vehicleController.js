const models = require("../models")
const moment = require('moment-timezone')

class VehicleController{
    static async getAll(req, res, next){
        try {
            let result = await models.Vehicle.findAll({
                order:[['createdAt','desc']]
            })
            res.status(200).json(result)
            console.log(result)
        } catch (error) {
            console.error(error)
            res.send(error)
        }
    }

    static async addNew(req, res, next){
        console.log('sudah di hit')
        let now = moment().tz('Asia/Jakarta').format('YYYY-MM-DDTHH:mm:ss.SSSZ').slice(0, 23)
        let { id, plat, 
            typeId, 
            type, 
            no_mesin, 
            no_rangka, 
            no_bpkb, 
            tahun, 
            atas_nama, 
            posisi, 
            aset, 
            tgl_selesai_leasing, 
            angsuran_per_bulan, 
            sisa_leasing, 
            keterangan, 
            jenis_asuransi, 
            tgl_mulai_asuransi,
            tgl_berakhir_asuransi, 
            no_polis, 
            merek_mobil, action} = req.body
            console.log(id, 'ini dari reg body <<<<<<<<<<<<<<<')
        let formatDate = tgl_mulai_asuransi.split(' ').join('').split('/').reverse().join('')
        let formatEndDate = tgl_berakhir_asuransi.split(' ').join('').split('/').reverse().join('')
        let startDate = moment(formatDate).tz('Asia/Jakarta').format('YYYY-MM-DDTHH:mm:ss.SSSZ').slice(0, 23)
        let endDate = moment(formatEndDate).tz('Asia/Jakarta').format('YYYY-MM-DDTHH:mm:ss.SSSZ')
        let tglSelesaiLeasing = moment().toDate(tgl_selesai_leasing)
        let startDateAsuransi = moment().toDate(startDate)
        let endDateAsuransi = moment().toDate(endDate)
        console.log(startDateAsuransi, endDateAsuransi)

        let data = {plat: plat.toUpperCase(), 
            typeId: typeId.toUpperCase() == 'MOBIL CPO' ? 1 : typeId.toUpperCase() == 'MOBIL INTI' ? 2 : typeId.toUpperCase() == 'MOBIL TBS' ? 3 : typeId.toUpperCase() == 'MOBIL PROYEK, SOLID DAN SAMPAH ' ? 4 : typeId.toUpperCase() == 'MOBIL OPERASIONAL' ? 5 : 6 , 
            type: type.toUpperCase(), 
            no_mesin: no_mesin.toUpperCase(), 
            no_rangka: no_rangka.toUpperCase(), 
            no_bpkb: no_bpkb.toUpperCase(), 
            tahun: Number(tahun.toUpperCase()), 
            atas_nama: atas_nama.toUpperCase(), 
            posisi: posisi.toUpperCase(), 
            aset: aset.toUpperCase(), 
            tgl_selesai_leasing: tglSelesaiLeasing, 
            angsuran_bulanan: Number(angsuran_per_bulan.toUpperCase().replace(/[^0-9]/g, "")), 
            sisa_leasing: Number(sisa_leasing.toUpperCase().replace(/[^0-9]/g, "")), 
            keterangan: keterangan.toUpperCase(), 
            jenis_asuransi: jenis_asuransi.toUpperCase(), 
            tgl_mulai_asuransi:startDateAsuransi,
            tgl_berakhir_asuransi:endDateAsuransi,
            no_polis: no_polis.toUpperCase(),  
            merek_mobil: merek_mobil.toUpperCase(),
            createdAt: now,
            updatedAt: now}
            console.log(data)
        // if(action == 'update'){
        //     data['id'] = id
        // }
        try {
            if(action == 'save'){
                console.log('save data')
                console.log(data)
                // let result = await models.Vehicle.create(data)
                // if(result){
                //     res.status(200).json({kode:'00', pesan:'Data Berhasil Di Input'})
                // }
            }else{
                console.log('update data')
                console.log(id)
                let result = await models.Vehicle.update(data, {
                    where:{
                        id
                    }
                })
                console.log(result)
                if(result[0] == 1){
                    res.status(200).json({kode:'00', pesan:'Data Berhasil Di Update'})
                }
            }
        } catch (error) {
            console.log('error tidak bsa nambah <<<<<<<<<<<<<<<<<<<<<<<<<')
            next(error)
        }
    }

    static async deleteVehicle(req, res, next){
        let plat = req.body.plat
        let result = await models.Vehicle.destroy({
            where: {plat}
        })
        if(result == 1){
            res.status(200).json({kode:'00', pesan:`kendaraan dengan plat ${plat} berhasil di hapus`})
        }else{
            res.status(400).json({kode:'01', pesan:`Gagal Menghapus, Data tidak ditemukan silahkan refresh page`})
        }
    }

    static async updateVehicle(req, res, next){
        console.log('sudah di hit')
    }
}

module.exports = VehicleController;