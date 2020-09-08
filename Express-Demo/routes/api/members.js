const express = require('express');
const members = require('../../Members');
const router = express.Router();
const uuid = require('uuid');

// Gets all members
router.get('/', (req, res) => {
    res.json(members);
});

// Get single member
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const member = members.find(x => x.id === id);
    if (member) {
        res.json(member);
    } else {
        res.status(400).json({ msg: `Member not found with id: ${id}` });
    }
});

// Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };
    if (!newMember.name || !newMember.email) {
        res.status(400).json({ msg: 'Please inclide a name and email' });
    }

    members.push(newMember);
    res.json(members);
    // res.redirect('/');
});

// Update member
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const member = members.find(x => x.id === id);

    if (member) {
        const updatedMember = req.body;
        members.forEach(x => {
            if (x.id === id) {
                x.name = updatedMember.name ? updatedMember.name : x.name;
                x.email = updatedMember.email ? updatedMember.email : x.email;
                res.json({ msg: 'Member updated', member });
            }
        });
    } else {
        res.status(400).json({ msg: `Member not found with id: ${id}` });
    }
});

// Delete member
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const member = members.find(x => x.id === id);

    if (member) {
        res.json({ msg: 'Member deleted', members: members.filter(x => x.id !== id) });
    } else {
        res.status(400).json({ msg: `Member not found with id: ${id}` });
    }
});

module.exports = router;