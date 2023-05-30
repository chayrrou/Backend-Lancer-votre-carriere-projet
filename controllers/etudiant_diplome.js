const Etudiant_diplome = require("../models/etudiant_diplome");
//const Personnel = require("../models/personnel");


exports.createetudiant_diplome = (req, res, next) => {
  const etudiant_diplomeObject = req.body;
  delete etudiant_diplomeObject.id;
  const etudiant_diplome = new Etudiant_diplome({
    ...etudiant_diplomeObject
  });
  etudiant_diplome.save()
  .then(() => res.status(201).json({message: "Objet enregistré !"}))
  .catch(error => res.status(400).json({error}));
};

exports.getOneetudiant_diplome = (req, res, next) => {
  
  console.log(req.params.id);
  Etudiant_diplome.findOne({
    where:{id: req.params.id}
  }).then(etudiant_diplome => {
    res.status(200).json({etudiant_diplome});
  }).catch(error => {
    res.status(404).json({error: error});
  });
};

exports.modifyetudiant_diplome = (req, res, next) => {
  const etudiant_diplomeObject = req.body;
  Etudiant_diplome.findOne({ id: req.params.id })
  .then(etudiant_diplome => {
      Etudiant_diplome.update({ ...etudiant_diplomeObject }, {where:{id: req.params.id}}) 
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
  })
};

exports.deleteetudiant_diplome = (req, res, next) => {
  
    Etudiant_diplome.findOne({id: req.params.id})
      .then(etudiant_diplome => {
          Etudiant_diplome.destroy({where:{id: req.params.id}})
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.getAlletudiant_diplomes = (req, res, next) => {
  Etudiant_diplome.findAll().then(etudiant_diplomes => {
    res.status(200).json({etudiant_diplomes});
  }).catch(error => {
    res.status(400).json({error: error});
  });
};