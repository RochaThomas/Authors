
//require controllers
const Author = require('../controllers/author.controllers');

//routes
module.exports = (app) => {
    app.get('/api/authors', Author.findAllAuthors);
    app.get('/api/authors/:_id', Author.findOneAuthor);
    app.post('/api/authors/new', Author.createAuthor);
    app.put('/api/authors/update/:_id', Author.updateAuthor);
    app.delete('/api/authors/delete/:_id', Author.deleteAuthor);
}