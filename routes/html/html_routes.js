//import express router()
const router = require('express').Router();

// import fuctioinality to get all cats 
const { getCats } = require('../../controllers/cats_controller');

//set up root '/' get route to server homepage with catdata
router.get('/', (req, res) => {
 //get all cat data
    getCats().then(catdata => {
        res.render('home', {cats: catdata });
    })
    .catch(err => {
        res.status(500).end();
    });
});

module.exports = router;
