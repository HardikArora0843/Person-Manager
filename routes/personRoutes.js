
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController.js');

// GET /person - Display list of people
router.get('/', personController.getAllPersons);

// GET /person/new - Display form to create a new person
router.get('/new', personController.showCreateForm);

// POST /person - Create a new person
router.post('/', personController.createPerson);

// GET /person/:id - Display single person details
router.get('/:id', personController.getPersonById);

// GET /person/:id/edit - Display form to edit a person
router.get('/:id/edit', personController.showEditForm);

// PUT /person/:id - Update a person
router.put('/:id', personController.updatePerson);

// GET /person/:id/delete - Display confirmation page for deletion
router.get('/:id/delete', personController.showDeleteConfirmation);

// DELETE /person/:id - Delete a person
router.delete('/:id', personController.deletePerson);

module.exports = router;