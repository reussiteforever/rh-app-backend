const express = require('express');
const TypeStage = require('../models/typestage.js');
const router = express.Router();
const state = require('../utils/states.js');

//GET ALL
router.get("/", async (req, res) => {
    try {
        const typestages = await TypeStage.findAll({
            where: {
                state: 0
            }
        });
        res.status(200).json(typestages);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const typestage = await TypeStage.findByPk(id);
        res.status(200).json(typestage);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// INSERT ONE
router.post("/", async (req, res) => {
    try {
        const typestage = await TypeStage.create(req.body);
        res.status(200).json(typestage);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//UPDATE ONE
router.patch("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const typestage = await TypeStage.update(req.body, {where:{id:id}});
        res.status(200).json(typestage);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//ARCHIVED OR ENABLED ONE
router.patch("/:id/state/:state", async (req, res) => {
    try {
        const id = req.params.id;
        const currentState = req.params.state;
        let value = currentState==0? state.ARCHIVED : state.ENABLED;
        const result = await TypeStage.update({ state: value }, {where:{id:id}});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
