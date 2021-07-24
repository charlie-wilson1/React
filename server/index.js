const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/parentSignUp', (req, res) => {
    console.log('req: ', req.body)
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