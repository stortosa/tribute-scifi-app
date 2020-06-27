const Replicant = require('../models/Replicant.model');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
  Replicant.find()
    .select('name gender age modelo inceptDate functionality physicalLevel mentalLevel origin destinyPlanet replicantsRemoved _id')
    .populate('replicant', 'name')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        replicants: docs.map(doc => {
          return {
            name: doc.name,
            gender: doc.gender,
            age: doc.age,
            inceptDate: doc.inceptDate,
            modelo: doc.modelo,
            functionality: doc.functionality,
            physicalLevel: doc.physicalLevel,
            mentalLevel: doc.mentalLevel,
            origin: doc.origin,
            destinyPlanet: doc.destinyPlanet,
            retired: doc.retired,
            idiosyncrasy: doc.idiosyncrasy,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:4000/replicants/' + doc._id
            }
          }
        })
      }
      // if(docs.length >= 0){
      res.status(200).json(response);
      // } else {
      //   res.status(404).json({
      //     message: "No entries found"
      //   });
      // }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/', (req, res, next) => {
  const replicant = new Replicant({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    inceptDate: req.body.inceptDate,
    model: req.body.model,
    functionality: req.body.functionality,
    physicalLevel: req.body.physicalLevel,
    mentalLevel: req.body.mentalLevel,
    origin: req.body.origin,
    destinyPlanet: req.body.destinyPlanet,
    retired: req.body.retired,
    idiosyncrasy: req.body.idiosyncrasy,
  });
  console.log(replicant)
  replicant
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created Replicant succesfully',
        createdReplicant: {
          name: result.name,
          gender: result.gender,
          age: result.age,
          inceptDate: result.inceptDate,
          modelo: result.modelo,
          functionality: result.functionality,
          physicalLevel: result.physicalLevel,
          mentalLevel: result.mentalLevel,
          origin: result.origin,
          destinyPlanet: result.destinyPlanet,
          retired: result.retired,
          idiosyncrasy: result.idiosyncrasy,
          _id: result._id,
          request: {
            type: 'POST',
            url: 'http://localhost:4000/replicants/' + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/:replicantId', (req, res, next) => {
  const id = req.params.replicantId;
  Replicant.findById(id)
    .select('name gender age modelo inceptDate functionality physicalLevel mentalLevel origin destinyPlanet replicantsRemoved _id')
    .populate('replicant')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          replicant: doc,
          request: {
            type: 'GET',
            description: 'Get all Replicants',
            url: 'http://localhost:4000/replicants/'
          }
        });
      } else {
        res.status(404).json({ message: "No valid entry found for proveided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put('/:replicantId', (req, res, next) => {
  const id = req.params.replicantId;
  Goal.findByIdAndUpdate(id, req.body, { new: true })
    .populate('replicant')
    .then(x => {
      console.log(x)
      res.json({ "updated": true, id })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// Ruta para borrar info del perfil de Replicantes, mejor ponerlo como en opaco 
router.delete('/:replicantId', (req, res, next) => {
  const id = req.params.replicantId;
  Replicant.deleteMany({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Replicant Retired',
        request: {
          type: 'POST',
          url: 'http://localhost:4000/replicants/',
          body: {
            name: 'String',
            gender: 'String',
            age: 'String',
            inceptDate: 'String',
            modelo: 'String',
            functionality: 'String',
            physicalLevel: 'String',
            mentalLevel: 'String',
            origin: 'String',
            destinyPlanet: 'String',
            retired: 'Boolean',
            idiosyncrasy: 'String',
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;