const express = require('express');
const router = express.Router();
const db = require('../models');


//pg 
router.get('/', (req, res) => {
    db.Pg.find()
        .then((pg) => res.json(pg))
        .catch((err) => res.send(err));
});

// pg home route
router.post('/' ,(req, res) => {
    db.Pg.create(req.body)
        .then(res.redirect('/home'))
        .catch((err) => res.send(err))
});

// pg show
router.get('/:id', (req, res) => {
    let id = req.params.id;
    db.Pg.findById(id)
        .then((pg) => res.json(pg))
        .catch((err) => res.send(err))
});

// update pg
router.put('/:id', (req, res) => {
    db.Pg.findByIdAndUpdate({ _id:req.params.id }, req.body)
        .then((pg) => res.json(pg))
        .catch((err) => res.send(err))
});

//delete pg

router.delete('/:id', (req, res) => {
    db.Pg.remove({ _id:req.params.id})
        .then(res.send("removed"))
        .catch((err) => res.send(err))
});


module.exports = router; 
