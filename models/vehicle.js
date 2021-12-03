'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vehicle.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    typeId: {
      type: DataTypes.INTEGER
      
    },
    plat: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    type: {
      type: DataTypes.STRING
    },
    no_mesin: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    no_rangka: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    no_bpkb: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    tahun: DataTypes.INTEGER,
    atas_nama: DataTypes.STRING,
    posisi: DataTypes.STRING,
    aset: DataTypes.STRING,
    tgl_selesai_leasing: DataTypes.DATE,
    angsuran_bulanan: DataTypes.INTEGER,
    sisa_leasing: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    jenis_asuransi: DataTypes.STRING,
    tgl_mulai_asuransi: DataTypes.DATE,
    tgl_berakhir_asuransi: DataTypes.DATE,
    no_polis: DataTypes.STRING,
    merek_mobil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};