const express = require('express');
const path = require('path');

const { NewAccount } = require('../database/controllers/newAccountQueries.js');

const app = express();
const PORT = 8080


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/parentSignUp', (req, res) => {
    const parent = new NewAccount();
    // console.log('req: ', req.body)
    parent.addParent(req.body)
    .then((id) => {
        res.status(202).send(id);
    })
});

app.post('/login', (req, res) => {
    console.log('req: ', req.body);
    if (req.body.password.length > 6) {
        res.status(202).send({resp: 'OK'})
    } else {
        res.status(202).send({resp: 'NOT FOUND'})
    }

})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:8080`);
})