const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const filePath = path.join(__dirname, 'User.txt');

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const newUser = {
        name1: name,
        age1: age
    };

    fs.readFile(filePath, 'utf-8', (err, data) => {
        let users = [];

        if (!err) {
            users = JSON.parse(data);
        }

        users.push(newUser);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return console.log(err);
            }
            res.send(users);
        });
    });
});

app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});
