const mongoose = require('mongoose');
const Bladerunner = require('../models/Bladerunner.model');
const express = require('express');
const router = express.Router();

// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
  Bladerunner.find()
    .select('name age adress category replicantsRemoved guns dateReplicantRemoved animals idiosyncrasy _id')
    .populate('bladerunner', 'name')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        bladerunners: docs.map(doc => {
          return {
            name: doc.name,
            age: doc.age,
            adress: doc.adress,
            category: doc.category,
            replicantsRemoved: doc.replicantsRemoved,
            guns: doc.guns,
            dateReplicantRemoved: doc.dateReplicantRemoved,
            animals: doc.animals,
            idiosyncrasy: doc.idiosyncrasy,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:4000/bladerunner/' + doc._id
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
  const bladerunner = new Bladerunner({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    age: req.body.age,
    adress: req.body.adress,
    category: req.body.category,
    replicantsRemoved: req.body.replicantsRemoved,
    guns: req.body.guns,
    dateReplicantRemoved: req.body.dateReplicantRemoved,
    animals: req.body.animals,
    idiosyncrasy: req.body.idiosyncrasy,
  });
  console.log(bladerunner)
  bladerunner
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created Blade Runner succesfully',
        createdBladerunner: {
          name: result.name,
          age: result.age,
          adress: result.adress,
          category: result.category,
          replicantsRemoved: result.replicantsRemoved,
          guns: result.guns,
          dateReplicantRemoved: result.dateReplicantRemoved,
          animals: result.animals,
          idiosyncrasy: result.idiosyncrasy,
          _id: result._id,
          request: {
            type: 'POST',
            url: 'http://localhost:4000/bladerunner/' + result._id
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

router.get('/:bladerunnerId', (req, res, next) => {
  const id = req.params.replicantId;
  Bladerunner.findById(id)
    .select('name age adress category replicantsRemoved guns dateReplicantRemoved animals idiosyncrasy _id')
    .populate('bladerunner')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          bladerunner: doc,
          request: {
            type: 'GET',
            description: 'Get all Blade Runners',
            url: 'http://localhost:4000/bladerunner/'
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

router.put('/:bladerunnerId', (req, res, next) => {
  const id = req.params.bladerunnerId;
  Bladerunner.findByIdAndUpdate(id, req.body, { new: true })
    .populate('bladerunner')
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

// Ruta para borrar info del perfil de Blade runners
router.delete('/:bladerunnerId', (req, res, next) => {
  const id = req.params.bladerunnerId;
  Bladerunner.deleteMany({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Blade Runner info update',
        request: {
          type: 'POST',
          url: 'http://localhost:4000/bladerunner/',
          body: {
            name: 'String',
            age: 'String',
            adress: 'String',
            category: 'String',
            replicantsRemoved: 'String',
            guns: 'String',
            dateReplicantRemoved: 'String',
            animals: 'String',
            idiosyncrasy: 'String'
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