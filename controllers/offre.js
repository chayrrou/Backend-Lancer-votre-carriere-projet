const Offre = require("../models/offre");
//const Personnel = require("../models/personnel");


exports.createoffre = (req, res, next) => {
  const offreObject = req.body;
  delete offreObject.id;
  const offre = new Offre({
    ...offreObject
  });
  offre.save()
  .then(() => res.status(201).json({message: "Objet enregistré !"}))
  .catch(error => res.status(400).json({error}));
};

exports.getOneoffre = (req, res, next) => {

  console.log(req.params.id);
  Offre.findOne({
    where:{id: req.params.id}
  }).then(offre => {
    res.status(200).json({offre});
  }).catch(error => {
    res.status(404).json({error: error});
  });
};

exports.modifyoffre = (req, res, next) => {
  const offreObject = req.body;
  Offre.findOne({ id: req.params.id })
  .then(offre => {
      Offre.update({ ...offreObject }, {where:{id: req.params.id}}) 
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
  })
};

exports.deleteoffre = (req, res, next) => {
  
    Offre.findOne({id: req.params.id})
      .then(offre => {
          Offre.destroy({where:{id: req.params.id}})
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.getAlloffres = (req, res, next) => {
  Offre.findAll().then(offres => {
    res.status(200).json({offres});
  }).catch(error => {
    res.status(400).json({error: error});
  });
};