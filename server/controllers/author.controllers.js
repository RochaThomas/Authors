//require model
const Author = require('../models/author.model');

//create and export the controllers
module.exports = {
    //read all method
    findAllAuthors : (req, res) => {
        Author.find()
            .then(allAuthors => {
                console.log('Finding all authors in the db');
                return res.json({authors: allAuthors});
            })    
            .catch(err => res.status(400).json({message: 'Something went wrong with the read all', error: err}));
    },
    //read one method
    findOneAuthor : (req, res) => {
        Author.findById(req.params._id)
        //don't forget to match variable name ('_id' in this case) with the route param
            .then(oneAuthor => {
                console.log('Finding one author in the db by id');
                return res.json({author: oneAuthor});
            })    
            .catch(err => res.status(400).json({message: 'Something went wrong with the read one', error: err}));
    },
    //create method
    createAuthor : (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                console.log('Creating a new author in the db');
                return res.json({author: newAuthor});
            })    
            .catch(err => res.status(400).json(err));
    },
    //update one method
    updateAuthor : (req, res) => {
        //don't forget to match variable name ('_id' in this case) with the route param
        Author.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
            runValidators: true
        })
            .then(updatedAuthor => {
                console.log('Updating an author in the db');
                return res.json({author: updatedAuthor});
            })    
            .catch(err => res.status(400).json(err));
    },
    //delete one method
    deleteAuthor : (req, res) => {
        //don't forget to match variable name ('_id' in this case) with the route param
        Author.deleteOne({_id: req.params._id})
            .then(result => {
                console.log('Deleting an author from the db');
                return res.json({result: result});
            })    
            .catch(err => res.status(400).json({message: 'Something went wrong with the delete one', error: err}));
    }
}