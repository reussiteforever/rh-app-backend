const express = require('express');
const Personne = require('../models/personne.js');
const router = express.Router();
const state = require('../utils/states.js');

//GET ALL
router.get("/", async (req, res) => {
    try {
        const personnes = await Personne.findAll();
        res.status(200).json(personnes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const personne = await Personne.findByPk(id);
        res.status(200).json(personne);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// INSERT ONE
router.post("/", async (req, res) => {
    try {
        const personne = await Personne.create(req.body);
        res.status(200).json(personne);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//ARCHIVED OR ENABLED ONE
router.post("/", async (req, res) => {
    try {
        const currentState = req.params;
        let value = currentState==0? state.ARCHIVED : state.ENABLED;
        const personne = await Personne.update({ state: value });
        res.status(200).json(personne);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
