'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeId: {
        type: Sequelize.INTEGER
        
      },
      plat: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      type: {
        type: Sequelize.STRING
      },
      no_mesin: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      no_rangka: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      no_bpkb: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      tahun: {
        type: Sequelize.INTEGER
      },
      atas_nama: {
        type: Sequelize.STRING
      },
      posisi: {
        type: Sequelize.STRING
      },
      aset: {
        type: Sequelize.STRING
      },
      tgl_selesai_leasing: {
        type: Sequelize.DATE
      },
      angsuran_bulanan: {
        type: Sequelize.INTEGER
      },
      sisa_leasing: {
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
      },
      jenis_asuransi: {
        type: Sequelize.STRING
      },
      tgl_mulai_asuransi: {
        type: Sequelize.DATE
      },
      tgl_berakhir_asuransi: {
        type: Sequelize.DATE
      },
      no_polis: {
        type: Sequelize.STRING
      },
      merek_mobil: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vehicles');
  }
};