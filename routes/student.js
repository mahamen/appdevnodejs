const express = require('express');
const router = express.Router();

// Temporary data storage
let students = [];

// Route: View all students
router.get('/', (req, res) => {
    res.render('student-list', { students });
});

// Route: Add a new student form
router.get('/add', (req, res) => {
    res.render('add-student');
});

// Route: Handle adding a new student
router.post('/add', (req, res) => {
    const { name, age, course } = req.body;
    students.push({ name, age, course });
    res.redirect('/students');
});

// Route: Edit a student form
router.get('/edit/:id', (req, res) => {
    const student = students[req.params.id];
    res.render('edit-student', { student, id: req.params.id });
});

// Route: Handle editing a student
router.post('/edit/:id', (req, res) => {
    const { name, age, course } = req.body;
    students[req.params.id] = { name, age, course };
    res.redirect('/students');
});

// Route: Delete a student
router.post('/delete/:id', (req, res) => {
    students.splice(req.params.id, 1);
    res.redirect('/students');
});

// Route: View student details
router.get('/details/:id', (req, res) => {
    const student = students[req.params.id];
    res.render('student-details', { student });
});

module.exports = router;
