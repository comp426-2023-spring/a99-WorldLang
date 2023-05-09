const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', './frontend/src');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('frontend/src'));
app.use('/assets', express.static('frontend/assets'));
app.use(bodyParser.json());
app.use(cors());

const uri = 'mongodb://localhost:27017';
const dbName = 'worldlang';

//let website users create a worldlang account
app.post('/app/register', async (req, res) => {
  const { name, email, username, password } = req.body;
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const userCollection = db.collection('users');
    const interactionCollection = db.collection('interactions');

    const user = await userCollection.findOne({ username });
    if (user) {
      res.status(400).send('Username already exists');
    } else {
      await userCollection.insertOne({ name, email, username, password });
      await interactionCollection.insertOne({ username, action: 'register', timestamp: new Date() });
      res.status(201).send('User registered');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

//let users login to pre-registered worldlang accounts
app.post('/app/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        const userCollection = db.collection('users');

        const user = await userCollection.findOne({ username });
        if (user) {
            if (user.password === password) {
                // Remove the password before sending the user object
                delete user.password;
                res.status(200).json(user);
            } else {
                res.status(401).send('Incorrect password');
            }
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/src/home/index.html'));
// });  

//let users update name, email, and password fields for their account
app.put('/app/user', async (req, res) => {
    const { name, email, username, password } = req.body;
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db(dbName);
      const userCollection = db.collection('users');
      const interactionCollection = db.collection('interactions');
  
      const user = await userCollection.findOne({ username });
      if (!user) {
        res.status(404).send('User not found');
      } else {
        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (password) updateFields.password = password;
  
        await userCollection.updateOne({ username }, { $set: updateFields });
        await interactionCollection.insertOne({ username, action: 'update', timestamp: new Date() });
        res.status(200).send('User information updated');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
});

//access worldlang account to display profile details on profile page
app.get('/app/user/:username', async (req, res) => {
const { username } = req.params;
try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const userCollection = db.collection('users');

    const user = await userCollection.findOne({ username });
    if (user) {
    delete user.password; // Remove the password before sending the user object
    res.status(200).json(user);
    } else {
    res.status(404).send('User not found');
    }
} catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
}
});
  
//let user delete their worldlang account
app.delete('/app/user/:username', async (req, res) => {
const { username } = req.params;
try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const userCollection = db.collection('users');
    const interactionCollection = db.collection('interactions');

    const user = await userCollection.findOne({ username });
    if (!user) {
    res.status(404).send('User not found');
    } else {
    await userCollection.deleteOne({ username });
    await interactionCollection.insertOne({ username, action: 'delete', timestamp: new Date() });
    res.status(200).send('User account deleted');
    }
} catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
}
});

// NEW CODE ************

// somewhat working todo list
const todos = [{
  todoId: "1",
  todoTask: "Learn Spanish",
},
{
  todoId: "2",
  todoTask: "Make Flashcards",
},
{
  todoId: "3",
  todoTask: "Study Chinese",
}
];

//display list of user's goals
app.get("/goals", function (req, res) {
res.render("goals/goals", {
  data: todos,
});
});

//add a new goal to user's goals
app.post("/", (req, res) => {
  const inputTodoId = todos.length + 1;
  const inputTodoTask = req.body.todoTask;

  todos.push({
    todoId: inputTodoId,
    todoTask: inputTodoTask
    });
  res.render("goals/goals", {
    data: todos,
  });
});

//delete a goal from user's goals
app.post("/delete", (req, res) => {
var requestedtodoId = req.body.todoId;
var j = 0;
todos.forEach((todo) => {
  j = j + 1;
  if (todo.todoId === requestedtodoId) {
      todos.splice(j - 1, 1);
    }
  });
  res.redirect("/goals");
});

//prevent access to undefined addresses
app.get("*", function(req, res){
 res.send("<h1>Invalid Page</h1>")
});
// ***************************

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/home`);
});
