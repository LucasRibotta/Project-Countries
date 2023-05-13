const { Router } = require('express');
const { Activity, Country } = require('../db');
const {createActivity} = require('../controllers/activities')

const router = Router();

router.get('/', async (req, res) => {
    try {
       const allActivities = await Activity.findAll({
          include: Country
       })
       res.status(200).json(allActivities)
    } catch (error) {
       res.status(400).json({ error: "No se encontraron actividades" })
    }
 
 });


router.post("/", async (req,res,next) => {
    try {
        const response = await createActivity(req.body);
        res.status(201).json({
            status: 'has been created succefully'
        })
    
    } catch (error) {
        
        res.status(400).json({error: error.message})
        next(error)
    }
})


module.exports = router;