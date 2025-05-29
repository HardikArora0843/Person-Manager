const Person = require('../models/Person.js');

// GET /person - Display list of all persons
const getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find().sort({ createdAt: -1 });
        res.render('index', { 
            title: 'Person Management System',
            persons: persons,
            message: req.query.message || null
        });
    } catch (error) {
        console.error('Error fetching persons:', error);
        res.status(500).render('index', { 
            title: 'Person Management System',
            persons: [],
            error: 'Error loading persons'
        });
    }
};

// GET /person/new - Show create form
const showCreateForm = (req, res) => {
    res.render('create', { 
        title: 'Add New Person',
        person: {},
        errors: null
    });
};

// POST /person - Create new person
const createPerson = async (req, res) => {
    try {
        const { name, age, gender, mobileNumber } = req.body;
        
        const newPerson = new Person({
            name,
            age: parseInt(age),
            gender,
            mobileNumber
        });

        await newPerson.save();
        res.redirect('/person?message=Person created successfully');
    } catch (error) {
        console.error('Error creating person:', error);
        
        let errors = {};
        if (error.name === 'ValidationError') {
            Object.keys(error.errors).forEach(key => {
                errors[key] = error.errors[key].message;
            });
        } else if (error.code === 11000) {
            errors.mobileNumber = 'Mobile number already exists';
        } else {
            errors.general = 'Error creating person';
        }

        res.render('create', { 
            title: 'Add New Person',
            person: req.body,
            errors: errors
        });
    }
};

// GET /person/:id - Get single person
const getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).render('error', {
                message: 'Person not found',
                error: { status: 404 }
            });
        }
        res.render('view', { 
            title: 'Person Details',
            person: person
        });
    } catch (error) {
        console.error('Error fetching person:', error);
        res.status(500).render('error', {
            message: 'Error loading person details',
            error: error
        });
    }
};

// GET /person/:id/edit - Show edit form
const showEditForm = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).render('error', {
                message: 'Person not found',
                error: { status: 404 }
            });
        }
        res.render('edit', { 
            title: 'Edit Person',
            person: person,
            errors: null
        });
    } catch (error) {
        console.error('Error fetching person for edit:', error);
        res.status(500).render('error', {
            message: 'Error loading person for editing',
            error: error
        });
    }
};

// PUT /person/:id - Update person
const updatePerson = async (req, res) => {
    try {
        const { name, age, gender, mobileNumber } = req.body;
        
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
            {
                name,
                age: parseInt(age),
                gender,
                mobileNumber
            },
            { new: true, runValidators: true }
        );

        if (!updatedPerson) {
            return res.status(404).render('error', {
                message: 'Person not found',
                error: { status: 404 }
            });
        }

        res.redirect('/person?message=Person updated successfully');
    } catch (error) {
        console.error('Error updating person:', error);
        
        let errors = {};
        if (error.name === 'ValidationError') {
            Object.keys(error.errors).forEach(key => {
                errors[key] = error.errors[key].message;
            });
        } else if (error.code === 11000) {
            errors.mobileNumber = 'Mobile number already exists';
        } else {
            errors.general = 'Error updating person';
        }

        const person = await Person.findById(req.params.id) || req.body;
        res.render('edit', { 
            title: 'Edit Person',
            person: { ...person, ...req.body },
            errors: errors
        });
    }
};

// GET /person/:id/delete - Show delete confirmation
const showDeleteConfirmation = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).render('error', {
                message: 'Person not found',
                error: { status: 404 }
            });
        }
        res.render('delete', { 
            title: 'Delete Person',
            person: person
        });
    } catch (error) {
        console.error('Error fetching person for deletion:', error);
        res.status(500).render('error', {
            message: 'Error loading person for deletion',
            error: error
        });
    }
};

// DELETE /person/:id - Delete person
const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);
        
        if (!deletedPerson) {
            return res.status(404).render('error', {
                message: 'Person not found',
                error: { status: 404 }
            });
        }

        res.redirect('/person?message=Person deleted successfully');
    } catch (error) {
        console.error('Error deleting person:', error);
        res.status(500).render('error', {
            message: 'Error deleting person',
            error: error
        });
    }
};

module.exports = {
    getAllPersons,
    showCreateForm,
    createPerson,
    getPersonById,
    showEditForm,
    updatePerson,
    showDeleteConfirmation,
    deletePerson
};