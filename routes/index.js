const express = require('express');
const router = express.Router();

const doSomething = require('../lib/doSomething');

/**
 * @api {get} / Verify Name Query Parameter
 * @apiDescription Verifies that name query param is not empty
 * @apiGroup Name
 *
 * @apiParam {String} name Some name.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "text": "Name cant be empty"
 *     }
 */

router.get('/', (req, res) => {
    const name = req.query.name ? req.query.name : '';

    doSomething.do(name, err => {
        if (err) {
            res.status(400);
            res.send(err.message);
        } else res.send({ success: true });
    });
});

module.exports = router;
