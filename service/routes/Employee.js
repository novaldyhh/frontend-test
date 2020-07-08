var express = require("express");
const employee = express.Router();
const Employees = require("../module/Employees");
const multer = require("multer");
const upload = multer({ dest: "images/" });

employee.get("/get", function (req, res, next) {
  Employees.findAll()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

employee.get("/get/:id", function (req, res, next) {
  Employees.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((employee) => {
      if (employee) {
        res.json(employee);
      } else {
        res.send("Data Tidak Ada");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

employee.post("/photo", upload.single("Photo"), function (req, res) {
  Employees.create(req.file)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json("error: " + err);
    });
});

employee.post("/add", function (req, res, err) {
  Employees.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json("error: " + err);
    });
});

employee.delete("/delete/:id", function (req, res) {
  Employees.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.json({ status: "Data Karyawan Telah Dihapus" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

employee.put("/edit/:id", function (req, res) {
  Employees.update(
    {
      NIK: req.body.NIK,
      FullName: req.body.FullName,
      TglJoin: req.body.TglJoin,
      TglModifikasi: req.body.TglModifikasi,
      TglRegistrasi: req.body.TglRegistrasi,
      TglLahir: req.body.TglLahir,
      NoKTP: req.body.NoKTP,
      Photo: req.body.Photo,
      StatusNikah: req.body.StatusNikah,
      Divisi: req.body.Divisi,
      JnsKelamin: req.body.JnsKelamin,
      Gaji: req.body.Gaji,
      TunjanganTetap: req.body.TunjanganTetap,
      TunjanganTdkTetap: req.body.TunjanganTdkTetap,
    },
    { where: { ID: req.params.id } }
  )
    .then(() => {
      res.json({ status: "Data Berhasil Diupdate" });
    })
    .error((err) => errorHandler(err));
});

module.exports = employee;
