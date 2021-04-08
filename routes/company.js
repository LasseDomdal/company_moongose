// company.js
const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        try {
            let companies = await controller.getCompanies();
            response.send(companies);
        } catch (e) {
            sendStatus(e, response);
        }
    })
    .post('/', async (request, response) => {
            try {
                let {name, hours} = request.body;
                await controller.createCompany(name, hours);
                response.send({message: 'Company saved!'});
            } catch (e) {
                sendStatus(e, response);
            }
        }
    );

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;