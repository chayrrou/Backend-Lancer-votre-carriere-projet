const Societe = require("../models/societe");
//const Personnel = require("../models/personnel");


exports.createsociete = (req, res, next) => {
  const societeObject = req.body;
  delete societeObject.id;
  const societe = new Societe({
    ...societeObject
  });
  societe.save()
  .then(() => res.status(201).json({message: "Objet enregistré !"}))
  .catch(error => res.status(400).json({error}));
};

exports.getOnesociete = (req, res, next) => {

  console.log(req.params.id);
  Societe.findOne({
    where:{id: req.params.id}
  }).then(societe => {
    res.status(200).json({societe});
  }).catch(error => {
    res.status(404).json({error: error});
  });
};

exports.modifysociete = (req, res, next) => {
  const societeObject = req.body;
  Societe.findOne({ id: req.params.id })
  .then(societe => {
      Societe.update({ ...societeObject }, {where:{id: req.params.id}}) 
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
  })
};

exports.deletesociete = (req, res, next) => {
  
    Societe.findOne({id: req.params.id})
      .then(societe => {
          Societe.destroy({where:{id: req.params.id}})
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.getAllsocietes = (req, res, next) => {
  Societe.findAll().then(societes => {
    res.status(200).json({societes});
  }).catch(error => {
    res.status(400).json({error: error});
  });
};