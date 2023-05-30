const express = require("express");
const router = express.Router();

const societeCtrl = require("../controllers/societe");


router.get("/:id", societeCtrl.getOnesociete);
router.get("/", societeCtrl.getAllsocietes);
router.post("/", societeCtrl.createsociete);
router.put("/:id", societeCtrl.modifysociete);
router.delete("/:id", societeCtrl.deletesociete);

module.exports = router;