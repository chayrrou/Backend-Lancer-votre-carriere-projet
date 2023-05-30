const express = require("express");
const router = express.Router();

const etudiant_diplomeCtrl = require("../controllers/etudiant_diplome");


router.get("/:id", etudiant_diplomeCtrl.getOneetudiant_diplome);
router.get("/", etudiant_diplomeCtrl.getAlletudiant_diplomes);
router.post("/", etudiant_diplomeCtrl.createetudiant_diplome);
router.put("/:id", etudiant_diplomeCtrl.modifyetudiant_diplome);
router.delete("/:id", etudiant_diplomeCtrl.deleteetudiant_diplome);

module.exports = router;