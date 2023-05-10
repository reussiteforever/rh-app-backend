const express = require('express');
const Contrat = require('../models/contrat.js');
const router = express.Router();
const state = require('../utils/states.js');

//GET ALL
router.get("/", async (req, res) => {
    try {
        const contrats = await Contrat.findAll();
        res.status(200).json(contrats);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const contrat = await Contrat.findByPk(id);
        res.status(200).json(contrat);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// INSERT ONE
router.post("/", async (req, res) => {
    try {
        const contrat = await Contrat.create(req.body);
        res.status(200).json(contrat);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//ARCHIVED OR ENABLED ONE
router.post("/", async (req, res) => {
    try {
        const currentState = req.params;
        let value = currentState==0? state.ARCHIVED : state.ENABLED;
        const contrat = await Contrat.update({ state: value });
        res.status(200).json(contrat);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
