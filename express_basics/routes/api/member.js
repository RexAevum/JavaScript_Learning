// define routs that are used a lot
const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');
const { json } = require('express');

// Get all members
router.get('/', (req, res) => res.json(members));

// Get single member using the id in the URL
router.get('/:id', (req, res) => {
    // check if object exists that matches the requested params
    const found = members.some((member) => member === parseInt(req.params.id));
    if (found){
        // filter the users where the user id is mathced 
        // for each member in members return only the member that has the id from req.params.id
        res.json(members.filter(member => member.id == req.params.id)); // req.params.id is a string  
    }else{
        res.status(400).json({msg: `Did not find user with id: ${req.params.id}`});
    }
});

// Create a member
// can use the same rout if the methods used are different (get vs post)
router.post('/', (req, res) => {
    console.log(req.body.name, req.body.email);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    let tyrAgain = false;
    // check if the name and email are sent
    if (!newMember.name || !newMember.email){
        res.status(400).json({msg: 'Please enter both name and email'});
        tyrAgain = true;
    }

    // add new member to the list
    members.push(newMember);
    console.log(members)
    // send back all memebers
    if(tyrAgain){
        res.json(members);
    }
    // to load a different page or relode same page with different data
    res.redirect('/')
});

// Update member
router.put('/:id', (req, res) => {
    // check if user exists
    // .some == contains : boolean an will check each item in array
    const userFound = members.some( (member) => {member.id === parseInt(req.params.id)});
    if (userFound){
        // get the new info for the object
        const updMember = req.body;
        members.forEach((member) => {
            if (member.id === parseInt(req.params.id)){
                // updat all the fields
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                member.status = updMember.status ? updMember.status : member.status;

                // send back a response
                res.json({msg: `Updated member` + member})
            }
        });
    }else{
        // if it fails to find it return http 400 for member not found
        res.status(400).json({msg: `User with id: ${req.params.id} is not found`});
    };
});

// Delet member
router.delete('/:id', (req, res) => {
    const userFound = members.some(member => {member.id === parseInt(req.params.id)});
    if (userFound){
        res.json({
            msg: "Member deleted",
            members: members.filter(member => member.id !== parseInt(req.params.id)) // this will keep only the members that have a different id than the requested one
        })
    }else{
        res.status(400).json({msg: `User with id: ${req.params.id} is not found`})
    }
});

module.exports = router;