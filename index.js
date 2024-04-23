const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com" },
    { id: 2, name: "Sabila", email: "Sabila@gmail.com" },
    { id: 3, name: "kabila", email: "kabila@gmail.com" },
    { id: 4, name: "abrar", email: "abrar@gmail.com" },
    { id: 5, name: "lubaba", email: "lubaba@gmail.com" },
]

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
    res.send(users);
})




app.get('/', (req, res) => {
    res.send("Users Management server is running...");
})

app.post('/users', (req, res) => {
    console.log("post api hitting")
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})