const router = require("express").Router();
const vehicle = require('../controllers/vehicleController')

router.get('/', vehicle.getAll)
router.post('/addNew', vehicle.addNew)
router.post('/deleteVehicle', vehicle.deleteVehicle)
router.put('/update', vehicle.updateVehicle)

module.exports = router