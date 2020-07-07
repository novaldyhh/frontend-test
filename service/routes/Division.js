var express = require("express");
const division = express.Router();
const Divisions = require("../module/Divisions");

division.get("/get", function (req, res, next) {
  Divisions.findAll()
    .then((division) => {
      res.json(division);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

division.get("/get/:id", function (req, res, next) {
  Divisions.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((division) => {
      if (division) {
        res.json(division);
      } else {
        res.send("Data Tidak Ada");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

division.post("/add", function (req, res) {
  Divisions.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json("error: " + err);
    });
});

division.delete("/delete/:id", function (req, res) {
  Divisions.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.json({ status: "Data Wilayah Telah Dihapus" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

division.put("/edit/:id", function (req, res) {
  jwt.verify(req.token),
    "katakuncisuperrahasia",
    (err) => {
      if (!req.token) {
        res.sendStatus(403);
      } else {
        Divisions.update(
          {
            kode_wilayah: req.body.kode_wilayah,
            wilayah_name: req.body.wilayah_name,
            korda: req.body.korda,
            telp_korda: req.body.telp_korda,
          },
          { where: { id: req.params.id } }
        )
          .then(() => {
            res.json({ status: "Data Berhasil Diupdate" });
          })
          .error((err) => errorHandler(err));
      }
    };
});

module.exports = division;
