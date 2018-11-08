const express = require('express');
const actions = require('../data/helpers/actionModel')
const router = express.Router();

const errorHelper = (status, message, res) => {
    res.status(status).json({error: message})
}

router.get('/', (req, res) => {
    actions
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
    actions
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
    const { project_id, description, notes } = req.body
    actions
    .insert({ project_id, description, notes })
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        return errorHelper(500, 'Not Found', res)
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    actions
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
    const { project_id, description, notes } = req.body;
    const { id } = req.params;
    actions
    .update(id, { project_id, description, notes })
    .then(response => {
        if (response === 0) {
            return errorHelper(404, 'id not found')
        } else {
            actions.get(id).then(response => {
                res.json(response)
            })
        }
    })
    .catch(err => {
        return errorHelper(500, 'Not Found', res)
    }) 

})
module.exports = router;