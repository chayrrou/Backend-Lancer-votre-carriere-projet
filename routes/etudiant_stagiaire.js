const express = require("express");
const router = express.Router();

const etudiant_stagiaireCtrl = require("../controllers/etudiant_stagiaire");


router.get("/:id", etudiant_stagiaireCtrl.getOneetudiant_stagiaire);
router.get("/", etudiant_stagiaireCtrl.getAlletudiant_stagiaires);
router.post("/", etudiant_stagiaireCtrl.createetudiant_stagiaire);
router.put("/:id", etudiant_stagiaireCtrl.modifyetudiant_stagiaire);
router.delete("/:id", etudiant_stagiaireCtrl.deleteetudiant_stagiaire);

module.exports = router;