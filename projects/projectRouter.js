const express = require('express');
const projects = require('../data/helpers/projectModel')
const router = express.Router();

const errorHelper = (status, message, res) => {
    res.status(status).json({error: message})
}

router.get('/', (req, res) => {
    projects
    .get()
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        return errorHelper(500, 'Not Found', res)
    })
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    projects
    .get(id)
    .then(response => {
        if (response === 0) {
            return errorHelper(404, 'id not found', res)
        }
        res.json(response)
    })
    .catch(err => {
        return errorHelper(500, 'Not Found', res)
    })

})

router.post('/', (req, res) => {
    const { name, description } = req.body
    projects
    .insert({ name, description })
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        return errorHelper(500, 'Not Found', res)
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    projects
    .remove(id)
    .then(response => {
        if (response === 0) {
            return errorHelper(404, 'id not found', res)
        } else {
            res.json({message: 'successful delete'})
        }
    })
    .catch(err => {
        return errorHelper(500, 'Not Found', res)
    })
})
router.put('/:id', (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;
    projects
    .update(id, { name, description })
    .then(response => {
        if (response === 0) {
            return errorHelper(404, 'id not found')
        } else {
            projects.get(id).then(response => {
                res.json(response)
            })
        }
    })
    .catch(err => {
        return errorHelper(500, 'Not Found', res)
    }) 

})

module.exports = router;