const express = require('express');
const app = express();

// route handler definition: waits for requests with '/' 
app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000; //sets the production port that Heroku sets OR uses the localhost (5000)
app.listen(5000);
//localhost:5000