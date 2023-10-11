// require express
const express = require('express');
// create a new router
const router = express.Router();


router.get("/", (req, res) => {
    res.json({ 
        status: "success", 
        message: "GETTING messages",
        // data: [
        //     { id: 1, text: "Hello World" },
        //     { id: 2, text: "Hi" }
        // ]
    });
});

router.post("/", (req, res) => {
    let message = req.body.message; // message is json pakket dat binnenkomt 
    res.json({ 
        status: "success", 
        message: `POST ${message}`,

    });
});

module.exports = router; // exporteer de router zodat deze beschikbaar is voor andere bestanden en kan worden geïmporteerd met require()