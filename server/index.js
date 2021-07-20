const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/signUpForm', (req, res) => {
    console.log('req: ', req.body['First name'])
})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:8080`);
})