const Etudiant_stagiaire = require("../models/etudiant_stagiaire");
//const Personnel = require("../models/personnel");


exports.createetudiant_stagiaire = (req, res, next) => {
  const etudiant_stagiaireObject = req.body;
  delete etudiant_stagiaireObject.id;
  const etudiant_stagiaire = new Etudiant_stagiaire({
    ...etudiant_stagiaireObject
  });
  etudiant_stagiaire.save()
  .then(() => res.status(201).json({message: "Objet enregistré !"}))
  .catch(error => res.status(400).json({error}));
};

exports.getOneetudiant_stagiaire = (req, res, next) => {
  
  console.log(req.params.id);
  Etudiant_stagiaire.findOne({
    where:{id: req.params.id}
  }).then(etudiant_stagiaire => {
    res.status(200).json({etudiant_stagiaire});
  }).catch(error => {
    res.status(404).json({error: error});
  });
};

exports.modifyetudiant_stagiaire = (req, res, next) => {
  const etudiant_stagiaireObject = req.body;
  Etudiant_stagiaire.findOne({ id: req.params.id })
  .then(etudiant_stagiaire => {
      Etudiant_stagiaire.update({ ...etudiant_stagiaireObject }, {where:{id: req.params.id}}) 
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
  })
};

exports.deleteetudiant_stagiaire = (req, res, next) => {
  
    Etudiant_stagiaire.findOne({id: req.params.id})
      .then(etudiant_stagiaire => {
          Etudiant_stagiaire.destroy({where:{id: req.params.id}})
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.getAlletudiant_stagiaires = (req, res, next) => {
  Etudiant_stagiaire.findAll().then(etudiant_stagiaires => {
    res.status(200).json({etudiant_stagiaires});
  }).catch(error => {
    res.status(400).json({error: error});
  });
};