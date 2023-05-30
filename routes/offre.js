const express = require("express");
const router = express.Router();

const offreCtrl = require("../controllers/offre");


router.get("/:id", offreCtrl.getOneoffre);
router.get("/", offreCtrl.getAlloffres);
router.post("/", offreCtrl.createoffre);
router.put("/:id", offreCtrl.modifyoffre);
router.delete("/:id", offreCtrl.deleteoffre);

module.exports = router;